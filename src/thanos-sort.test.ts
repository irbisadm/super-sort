import {describe, it, expect} from 'vitest';
import {thanosSort} from './thanos-sort';
import {isSorted} from './is-sorted';

describe('thanosSort', () => {
  it('returns an already-sorted array unchanged', () => {
    expect(thanosSort([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('returns an already-sorted descending array unchanged', () => {
    expect(thanosSort([3, 2, 1], 'desc')).toEqual([3, 2, 1]);
  });

  it('leaves a sorted subsequence no longer than the input', () => {
    const r = thanosSort([5, 3, 1, 4, 2]);
    expect(isSorted(r)).toBe(true);
    expect(r.length).toBeLessThanOrEqual(5);
  });

  it('does not mutate the input', () => {
    const a = [3, 1, 2];
    thanosSort(a);
    expect(a).toEqual([3, 1, 2]);
  });

  it('handles the empty and single-element cases', () => {
    expect(thanosSort([])).toEqual([]);
    expect(thanosSort([7])).toEqual([7]);
  });
});
