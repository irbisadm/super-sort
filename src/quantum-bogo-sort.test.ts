import {describe, it, expect} from 'vitest';
import {quantumBogoSort} from './quantum-bogo-sort';
import {isSorted} from './is-sorted';

describe('quantumBogoSort', () => {
  it('returns the empty array (trivially sorted, no universe destroyed)', () => {
    expect(quantumBogoSort([])).toEqual([]);
  });

  it('returns a single-element array', () => {
    expect(quantumBogoSort([1])).toEqual([1]);
  });

  it('either returns a sorted array or destroys the universe', () => {
    let result: number[] | undefined;
    try {
      result = quantumBogoSort([5, 3, 1, 4, 2, 8, 6, 7]);
    } catch (e) {
      // The universe was destroyed because the array came out unsorted.
      expect(e).toBeInstanceOf(Error);
    }
    if (result !== undefined) {
      // In a surviving branch the array is necessarily already sorted.
      expect(isSorted(result)).toBe(true);
    }
  });

  it('honours the descending direction on a single element', () => {
    expect(quantumBogoSort([1], 'desc')).toEqual([1]);
  });

  it('either returns a descending-sorted array or destroys the universe', () => {
    let result: number[] | undefined;
    try {
      result = quantumBogoSort([2, 7, 1, 9, 4, 3, 6, 5], 'desc');
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
    }
    if (result !== undefined) {
      expect([...result].sort().reverse()).toEqual(result);
    }
  });
});
