import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import ts from 'typescript';

// Isolated credentials and mocked HTTP: never loads .env or calls the provider.
const source = await readFile(new URL('../components/chat/ChatFetch.tsx', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true },
}).outputText;

function setup(env, response = { candidates: [{ content: { parts: [{ text: 'Resposta' }] } }] }, ok = true) {
  const calls = [];
  const sandbox = {
    exports: {}, process: { env }, AbortSignal, console: { error() {} },
    require(name) {
      if (name === 'server-only') return {};
      if (name === './curriculo.json') return { nome: 'Teste', experiencia: [], habilidades: [], projetos: [], formacao: 'Teste' };
      throw new Error('Unexpected import');
    },
    fetch: async (url, options) => {
      calls.push({ url, options });
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
