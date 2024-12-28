import { describe, expect, it } from 'vitest';
import { noop } from './noop.js';

describe('noop', () => {
  it('should return correct result', () => {
    expect(noop()).toBe(undefined);
  });
});
