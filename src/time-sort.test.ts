import {describe, it, expect} from 'vitest';
import {timeSort} from './time-sort';

describe('timeSort', () => {
  it('sorts ascending by sleeping proportionally to each element', async () => {
    expect(await timeSort([3, 1, 2])).toEqual([1, 2, 3]);
  });

  it('sorts descending', async () => {
    expect(await timeSort([1, 3, 2], 'desc')).toEqual([3, 2, 1]);
  });

  it('handles negative values and duplicates', async () => {
    expect(await timeSort([2, -1, 2, 0])).toEqual([-1, 0, 2, 2]);
  });

  it('resolves empty and single-element arrays', async () => {
    expect(await timeSort([])).toEqual([]);
    expect(await timeSort([5])).toEqual([5]);
  });
});
