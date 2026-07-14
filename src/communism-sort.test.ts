import {describe, it, expect} from 'vitest';
import {communismSort} from './communism-sort';

describe('communismSort', () => {
  it('redistributes all wealth equally: everyone gets the mean', () => {
    expect(communismSort([5, 1, 3, 2, 4])).toEqual([3, 3, 3, 3, 3]);
  });

  it('keeps a fractional mean', () => {
    expect(communismSort([1, 2])).toEqual([1.5, 1.5]);
  });

  it('does not mutate the input and returns a fresh array', () => {
    const input = [9, 5, 1];
    const result = communismSort(input);
    expect(result).not.toBe(input);
    expect(input).toEqual([9, 5, 1]);
  });

  it('handles the empty and single-element cases', () => {
    expect(communismSort([])).toEqual([]);
    expect(communismSort([7])).toEqual([7]);
  });
});
