import {describe, it, expect} from 'vitest';
import {isSorted, isSortedDescending, isSortedForSure, isSortedDescendingForSure} from './is-sorted';

describe('isSorted', () => {
  it('accepts an ascending array', () => {
    expect(isSorted([1, 2, 3])).toBe(true);
  });

  it('rejects an unordered array', () => {
    expect(isSorted([3, 1, 2])).toBe(false);
  });

  it('is lexicographic, not numeric (documented quirk)', () => {
    // Default Array#sort compares as strings: "10" < "2".
    expect(isSorted([2, 10])).toBe(false);
    expect(isSorted([10, 2])).toBe(true);
  });

  it('treats the empty and single-element arrays as sorted', () => {
    expect(isSorted([])).toBe(true);
    expect(isSorted([42])).toBe(true);
  });
});

describe('isSortedDescending', () => {
  it('accepts a descending array', () => {
    expect(isSortedDescending([3, 2, 1])).toBe(true);
  });

  it('rejects an ascending array', () => {
    expect(isSortedDescending([1, 2, 3])).toBe(false);
  });
});

describe('...ForSure variants', () => {
  it('agree with their single-check counterparts', () => {
    expect(isSortedForSure([1, 2, 3])).toBe(true);
    expect(isSortedForSure([3, 1, 2])).toBe(false);
    expect(isSortedDescendingForSure([3, 2, 1])).toBe(true);
    expect(isSortedDescendingForSure([1, 2, 3])).toBe(false);
  });
});
