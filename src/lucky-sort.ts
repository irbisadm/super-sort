import {isSorted, isSortedDescending} from "./is-sorted";

function luckySort<T>(input: T[], direction: 'asc' | 'desc' = 'asc'): T[] {
  const validator = direction === 'asc' ? isSorted : isSortedDescending;
  if (validator(input)) {
    return input;
  }
  throw 'Bad luck!';
}

export {luckySort}