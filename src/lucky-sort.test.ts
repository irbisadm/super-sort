import {describe, it, expect} from 'vitest';
import {luckySort} from './lucky-sort';

describe('luckySort', () => {
  it('returns the input untouched when it is already sorted', () => {
    const input = [1, 2, 3];
    expect(luckySort(input)).toBe(input);
  });

  it('honours the descending direction', () => {
    expect(luckySort([3, 2, 1], 'desc')).toEqual([3, 2, 1]);
  });

  it('throws "Bad luck!" when the array is not sorted', () => {
    let thrown: unknown;
    try {
      luckySort([3, 1, 2]);
    } catch (e) {
      thrown = e;
    }
    expect(thrown).toBe('Bad luck!');
  });
});
