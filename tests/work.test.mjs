import test from 'node:test';
import assert from 'node:assert/strict';
import { projects as legacy } from '../src/data/projects.mjs';
import { allWork, availableYears, disciplines, recentWork } from '../src/data/work.mjs';

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
