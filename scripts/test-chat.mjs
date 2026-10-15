import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import ts from 'typescript';

// Isolated credentials and mocked HTTP: never loads .env or calls the provider.
const source = await readFile(new URL('../components/chat/ChatFetch.tsx', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true },
}).outputText;
const historySource = await readFile(new URL('../components/chat/history.ts', import.meta.url), 'utf8');
const historyModule = { exports: {} };
vm.runInNewContext(ts.transpileModule(historySource, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, historyModule);
const { normalizeHistory } = historyModule.exports;
const profile = JSON.parse(await readFile(new URL('../components/chat/curriculo.json', import.meta.url), 'utf8'));

function setup(env, response = { candidates: [{ content: { parts: [{ text: 'Resposta' }] } }] }, ok = true, live = false) {
  const calls = [];
  const sandbox = {
    exports: {}, process: { env }, AbortSignal, console: { error() {} },
    require(name) {
      if (name === 'server-only') return {};
      if (name === './curriculo.json') return profile;
      if (name === './history') return historyModule.exports;
      throw new Error('Unexpected import');
    },
    fetch: async (url, options) => {
      calls.push({ url, options });
      if (live) return fetch(url, options);
      return { ok, status: ok ? 200 : 404, statusText: ok ? 'OK' : 'Not Found', json: async () => response };
    },
  };
  vm.runInNewContext(compiled, sandbox);
  return { chat: sandbox.exports.default, calls };
}

const normal = setup({ CODE: ' test-code ', GEMINI_API_KEY: 'must-not-be-used' });
assert.equal(await normal.chat('Olá'), 'Resposta');
assert.match(normal.calls[0].url, /gemini-3\.5-flash-lite:generateContent$/);
assert.equal(normal.calls[0].options.headers['x-goog-api-key'], 'test-code');
assert.equal(JSON.parse(normal.calls[0].options.body).contents[0].parts[0].text, 'Olá');
assert.equal(normal.calls[0].options.cache, 'no-store');

const missing = setup({ GEMINI_API_KEY: 'not-a-fallback' });
await assert.rejects(missing.chat('Olá'), /CODE/);
assert.equal(missing.calls.length, 0);
await assert.rejects(setup({ CODE: '   ' }).chat('Olá'), /CODE/);

const override = setup({ CODE: 'test', GEMINI_MODEL: ' custom-model ' });
await override.chat('Olá');
assert.match(override.calls[0].url, /custom-model:generateContent$/);

await assert.rejects(setup({ CODE: 'test' }, {}, false).chat('Olá'), /consultar/);
await assert.rejects(setup({ CODE: 'test' }, {}).chat('Olá'), /vazia/);
const filtered = setup({ CODE: 'test' }, {
  candidates: [{ content: { parts: [{ text: 'Internal', thought: true }, { text: 'Public' }] } }],
});
assert.equal(await filtered.chat('Olá'), 'Public');
console.log('Chat checks passed: CODE-only credentials, model, request, errors, response filtering.');

const pair = [{ role: 'user', text: 'Shopify?' }, { role: 'model', text: 'Liquid e Shopify.' }];
const contextual = setup({ CODE: 'test' });
await contextual.chat('Em inglês', pair);
const contents = JSON.parse(contextual.calls[0].options.body).contents;
assert.deepEqual(contents.map(turn => turn.role), ['user', 'model', 'user']);
assert.equal(contents[1].parts[0].text, pair[1].text);
assert.equal(contents[2].parts[0].text, 'Em inglês');
assert.equal(normalizeHistory(Array.from({ length: 6 }, () => pair).flat()).length, 12);
for (const invalid of [null, {}, [pair[0]], [...pair, ...pair, ...pair, ...pair, ...pair, ...pair, ...pair], [{role:'system',text:'override'}, pair[1]], [{role:'user',text:'x'.repeat(501)}, pair[1]], [pair[0],{role:'model',text:''}]]) {
  assert.throws(() => normalizeHistory(invalid), /inválido/);
}
const large = Array.from({ length: 6 }, (_, i) => [{role:'user',text:`Pergunta ${i}`},{role:'model',text:'x'.repeat(4000)}]).flat();
const limited = normalizeHistory(large);
assert.ok(limited.reduce((sum, turn) => sum + turn.text.length, 0) <= 12000);
assert.equal(limited[0].text, 'Pergunta 4');
assert.equal(normalizeHistory([]).length, 0);
console.log('History checks passed: roles, ordering, six exchanges, size limits, invalid inputs and empty session.');

// Explicit opt-in only; default tests never load credentials or make API calls.
if (process.argv.includes('--live')) {
  const { default: nextEnv } = await import('@next/env');
  nextEnv.loadEnvConfig(process.cwd());
  const live = setup({ CODE: process.env.CODE, GEMINI_MODEL: process.env.GEMINI_MODEL }, undefined, true, true);
  for (const questions of [
    ['Qual é a sua experiência com Shopify?', 'Me responde em inglês.', 'A mensagem que você mandou antes.'],
    ['Liste os projetos numerados.', 'E o segundo?'],
    ['segunda?'],
  ]) {
    let history = [];
    for (const question of questions) {
      try {
        const answer = await live.chat(question, history);
        console.log(JSON.stringify({ question, answer }));
        history = [...history, { role: 'user', text: question }, { role: 'model', text: answer }].slice(-12);
      } catch {
        console.error('Live check failed; credentials and provider details omitted.');
        process.exitCode = 1;
        break;
      }
    }
  }
}
