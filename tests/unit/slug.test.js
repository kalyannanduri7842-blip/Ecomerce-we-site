/**
 * Slug generation tests
 */
const { test, describe } = require('node:test');
const assert = require('node:assert');

function slugify(text) {
  return String(text).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

describe('slugify', () => {
  test('basic product name', () => {
    assert.strictEqual(slugify('Classic Black Cotton T-Shirt'), 'classic-black-cotton-t-shirt');
  });
  test('trims edges', () => {
    assert.strictEqual(slugify('  Hello World  '), 'hello-world');
  });
  test('removes special chars', () => {
    assert.strictEqual(slugify('Men\'s Jeans (Slim)'), 'men-s-jeans-slim');
  });
});
