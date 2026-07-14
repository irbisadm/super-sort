import {randomShuffle} from "./random-stuff";
import {isSorted, isSortedDescending} from "./is-sorted";

function quantumBogoSort<T>(input: T[], direction: 'asc' | 'desc' = 'asc'): T[] {
  const validator = direction === 'asc' ? isSorted : isSortedDescending;
  // Shuffle exactly once, then measure the array. If it is sorted, return it.
  const shuffled = randomShuffle(input);
  if (validator(shuffled)) {
    return shuffled;
  }
  // Otherwise, destroy the universe. By the many-worlds interpretation, every
  // branch of the multiverse where the array came out unsorted ceases to exist,
  // so in every surviving branch the array is necessarily already sorted. O(n).
  throw new Error('The universe has been destroyed (the array was not sorted).');
}

export {quantumBogoSort}
