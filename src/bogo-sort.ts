import {randomShuffle} from "./random-stuff";
import {isSorted, isSortedDescending} from "./is-sorted";

function bogoSort<T>(input: T[], direction: 'asc' | 'desc' = 'asc'): T[] {
  const validator = direction === 'asc' ? isSorted : isSortedDescending;
  while (true) {
    const shuffled = randomShuffle(input);
    if (validator(shuffled)) {
      return shuffled;
    }
  }
}

export {bogoSort}