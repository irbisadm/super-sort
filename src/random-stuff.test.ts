import {describe, it, expect} from 'vitest';
import {randomShuffle, fisherYatesShuffle, randomPick} from './random-stuff';

describe('shuffles', () => {
  for (const [name, shuffle] of [['randomShuffle', randomShuffle], ['fisherYatesShuffle', fisherYatesShuffle]] as const) {
    describe(name, () => {
      it('preserves the multiset of elements', () => {
        const input = [1, 2, 3, 4, 5];
        const shuffled = shuffle(input);
        expect([...shuffled].sort((a, b) => a - b)).toEqual([1, 2, 3, 4, 5]);
      });

      it('does not mutate the input', () => {
        const input = [1, 2, 3];
        shuffle(input);
        expect(input).toEqual([1, 2, 3]);
      });
    });
  }
});

describe('randomPick', () => {
  it('returns the only element of a singleton', () => {
    expect(randomPick([42])).toBe(42);
  });

  it('always returns a member of the array', () => {
    const pool = ['a', 'b', 'c', 'd'];
    for (let i = 0; i < 100; i++) {
      expect(pool).toContain(randomPick(pool));
    }
  });
});
