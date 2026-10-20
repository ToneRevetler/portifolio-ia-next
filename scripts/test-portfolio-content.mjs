import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile, access } from 'node:fs/promises';

const read = path => readFile(new URL(`../${path}`, import.meta.url), 'utf8');
const profile = JSON.parse(await read('components/chat/curriculo.json'));
const projects = JSON.parse(await read('content/projects.json'));
const experience = await read('components/Accordion/AccordionItems/AccordionItems.tsx');

// Resume baseline received on 2026-10-20, with freelance removed at the user's request.
// Change deliberately with the next resume revision.
const periods = ['09/2025 - 09/2026', '11/2023 - 09/2025', '04/2023 - 11/2023', '06/2022 - 04/2023'];
for (const period of periods) {
  assert.ok(experience.includes(`date="${period}"`), `Missing visible period: ${period}`);
  assert.ok(profile.experiencia.some(item => item.includes(period)), `Missing assistant period: ${period}`);
}
for (const outdated of ['10/2023 - 09/2025', '04/2023 - 10/2023', '05/2022 - 04/2023']) {
  assert.ok(!experience.includes(outdated) && !JSON.stringify(profile).includes(outdated));
}
assert.ok(experience.includes('Desenvolvedor Web Pleno'));
assert.ok(experience.includes('Iniciei na Ecoflame Garden'));

const header = await read('components/Header.tsx');
assert.match(header, /href="https:\/\/wa\.me\/5519981135074"\s+target="_blank"\s+rel="noopener noreferrer"/);
assert.ok(header.includes('Vamos conversar pelo WhatsApp (abre em nova aba)'));

for (const component of ['components/initial/InitalContent.tsx', 'components/ContactSection.tsx']) {
  const source = await read(component);
  assert.match(source, /href="\/curriculo-tone-revetler\.pdf"\s+download="Curriculo-Tone-Revetler\.pdf"/);
  assert.ok(source.includes('Baixar currículo (PDF)'));
}
const pdf = await readFile(new URL('../public/curriculo-tone-revetler.pdf', import.meta.url));
assert.equal(pdf.subarray(0, 5).toString(), '%PDF-');
assert.equal(createHash('sha256').update(pdf).digest('hex'), '9f599456284aef6824d0e8ee0c89c2b001991d46d19ff9ca5527d9ceadcfbb4e');
for (const project of projects) {
  for (const asset of [project.imageUrl, project.mobileImageUrl].filter(Boolean)) {
    assert.ok(asset.startsWith('/images/'));
    await access(new URL(`../public${asset}`, import.meta.url));
  }
}
console.log('Portfolio checks passed: resume integrity, two downloads, dates, role and project assets.');
