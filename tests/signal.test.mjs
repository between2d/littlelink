import test from 'node:test';
import assert from 'node:assert/strict';
import { clamp, signalLevel, channelIndex } from '../src/lib/signal.mjs';

test('signal controls clamp invalid and out-of-range values', () => {
  assert.equal(clamp(-1,0,100),0);
  assert.equal(clamp(101,0,100),100);
  assert.equal(clamp(NaN,0,100),0);
});
test('channel tuning wraps in both directions', () => {
  assert.equal(channelIndex(-1,3),2);
  assert.equal(channelIndex(3,3),0);
  assert.equal(channelIndex(0,0),0);
});
test('audio meter normalizes silence and full amplitude', () => {
  assert.equal(signalLevel(new Uint8Array([0,0])),0);
  assert.equal(signalLevel(new Uint8Array([255,255])),1);
  assert.equal(signalLevel(new Uint8Array()),0);
});
