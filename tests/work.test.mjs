import test from 'node:test';
import assert from 'node:assert/strict';
import { projects as legacy } from '../src/data/projects.mjs';
import { allWork, availableYears, disciplines, recentWork } from '../src/data/work.mjs';
import { caseStudies, featuredIds } from '../src/data/case-studies.mjs';

test('every project has a unique slug and valid discipline', () => {
  const all = allWork(legacy);
  const ids = all.map((item) => item.id);
  assert.equal(new Set(ids).size, ids.length);
  const permitted = new Set(disciplines.map((item) => item.id));
  for (const item of all) {
    assert.match(item.id, /^[a-z0-9-]+$/);
    assert.ok(item.title && item.description);
    assert.ok(Array.isArray(item.categories) && item.categories.length > 0, item.id);
    assert.ok(item.categories.every((category) => permitted.has(category)), item.id);
    if (/^\d{4}$/.test(item.year)) assert.ok(Number(item.year) <= 2026);
  }
});

test('recent portfolio projects have detail-page content', () => {
  for (const item of recentWork) {
    assert.ok(item.posterText && item.role && item.status, item.id);
    assert.ok(item.year === '2025' || item.year === '2026', item.id);
    assert.ok(!item.url, `recent project ${item.id} should use its detail page`);
  }
});

test('filter years contain only real years in newest-first order', () => {
  const years = availableYears(allWork(legacy));
  assert.deepEqual(years, ['2026', '2025', '2024', '2022', '2021', '2020', '2018']);
});

test('2026 commissioned work and artistic projects are present', () => {
  const ids = new Set(recentWork.map((item) => item.id));
  ['viva-usina-2026', 'campanha-nabor-2026', 'presenca-instavel', 'canal-zero-tv', 'aulas-idiomas']
    .forEach((id) => assert.ok(ids.has(id)));
});

test('featured work exists and points to complete case studies', () => {
  const entries = new Map(recentWork.map((work) => [work.id, work]));
  assert.equal(featuredIds.length, 3);
  assert.equal(new Set(featuredIds).size, 3);

  for (const id of featuredIds) {
    assert.ok(entries.has(id), `featured project not found: ${id}`);
    const study = caseStudies[id];
    assert.ok(study, `case study missing: ${id}`);
    for (const property of ['heading', 'intro', 'date', 'place', 'involvement', 'challenge']) {
      assert.ok(study[property] && typeof study[property] === 'string', `missing ${property} for ${id}`);
    }
    assert.ok(Array.isArray(study.execution) && study.execution.length >= 2);
    assert.ok(Array.isArray(study.outcomes) && study.outcomes.length >= 1);
    for (const link of study.publicLinks) {
      const url = new URL(link.url);
      assert.equal(url.protocol, 'https:');
      assert.ok(link.label);
    }
  }
});

test('no released status is claimed for the interactive Metamuseu work', () => {
  const project = recentWork.find((work) => work.id === 'presenca-instavel');
  assert.match(project.status, /em desenvolvimento/i);
  assert.match(caseStudies['presenca-instavel'].intro, /em andamento/i);
});

test('all referenced real portfolio media is checked into the site', async () => {
  const { existsSync } = await import('node:fs');
  const { join } = await import('node:path');
  const media = new Set([
    ...recentWork.map((work) => work.mediaFile).filter(Boolean),
    ...Object.values(caseStudies).flatMap((study) =>
      (study.gallery || []).map((item) => item.file)
    ),
  ]);
  assert.ok(media.size >= 3);
  for (const file of media) {
    assert.match(file, /^assets\/work\/[a-z0-9-]+\.(png|jpg|webp)$/);
    assert.ok(existsSync(join('public', file)), `Missing referenced media: ${file}`);
  }
});

test('external work videos have proper labels and HTTPS source', () => {
  for (const [id, study] of Object.entries(caseStudies)) {
    if (!study.video) continue;
    const url = new URL(study.video.embedUrl);
    assert.equal(url.protocol, 'https:', id);
    assert.ok(study.video.title && study.video.caption, id);
  }
  assert.match(caseStudies['viva-usina-2026'].video.caption, /não documenta o show/i);
  assert.match(caseStudies['campanha-nabor-2026'].video.caption, /pós-produção de áudio/i);
});
