import {describe, it, expect} from 'vitest';
import {miracleSort} from './miracle-sort';

// Only already-ordered inputs are exercised: on an unsorted array miracleSort
// prays in an infinite loop, which is the whole joke.
describe('miracleSort', () => {
  it('returns immediately when the miracle has already happened (ascending)', async () => {
    expect(await miracleSort([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('returns immediately for an already descending array', async () => {
    expect(await miracleSort([3, 2, 1], 'desc')).toEqual([3, 2, 1]);
  });
});
