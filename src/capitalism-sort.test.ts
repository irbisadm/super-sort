import {describe, it, expect} from 'vitest';
import {capitalismSort} from './capitalism-sort';

describe('capitalismSort (free market)', () => {
  it('returns an already sorted array immediately', () => {
    expect(capitalismSort([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('returns an already descending array immediately in desc mode', () => {
    expect(capitalismSort([3, 2, 1], 'desc')).toEqual([3, 2, 1]);
  });

  it('does not mutate the input', () => {
    const input = [1, 2, 3];
    capitalismSort(input);
    expect(input).toEqual([1, 2, 3]);
  });
});

describe('capitalismSort (real: monopoly)', () => {
  it('gives the entire pot to the single richest player', () => {
    expect(capitalismSort([1, 2, 3, 4], 'asc', true)).toEqual([0, 0, 0, 10]);
  });

  it('breaks ties in favour of the first maximum', () => {
    expect(capitalismSort([7, 7, 2], 'asc', true)).toEqual([16, 0, 0]);
  });

  it('works with negative wealth (debt still concentrates)', () => {
    expect(capitalismSort([-5, -1, -9], 'asc', true)).toEqual([0, -15, 0]);
  });

  it('does not mutate the input and handles the empty case', () => {
    const input = [5, 9, 1];
    expect(capitalismSort(input, 'asc', true)).toEqual([0, 15, 0]);
    expect(input).toEqual([5, 9, 1]);
    expect(capitalismSort([], 'asc', true)).toEqual([]);
  });
});
