import {describe, it, expect} from 'vitest';
import {stalinSort} from './stalin-sort';

describe('stalinSort', () => {
  it('shoots the elements that are out of order', () => {
    expect(stalinSort([1, 3, 2, 4])).toEqual([1, 3, 4]);
  });

  it('leaves an already ascending array untouched', () => {
    expect(stalinSort([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('mutates and returns the source array (it destroys the input)', () => {
    const suspects = [1, 3, 2, 4];
    const result = stalinSort(suspects);
    expect(result).toBe(suspects);
    expect(suspects).toEqual([1, 3, 4]);
  });

  it('purges elements that increase in descending mode', () => {
    expect(stalinSort([9, 5, 7, 1], 'desc')).toEqual([9, 5, 1]);
  });

  it('returns arrays of length <= 1 as-is', () => {
    expect(stalinSort([])).toEqual([]);
    expect(stalinSort([42])).toEqual([42]);
  });
});
