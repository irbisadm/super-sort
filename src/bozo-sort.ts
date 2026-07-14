import {isSorted, isSortedDescending} from "./is-sorted";

function bozoSort<T>(input: T[], direction: 'asc' | 'desc' = 'asc'): T[] {
  const validator = direction === 'asc' ? isSorted : isSortedDescending;
  const array = [...input];
  while (true) {
    const a = (Math.random() * array.length) | 0;
    const b = (Math.random() * array.length) | 0;
    [array[a], array[b]] = [array[b], array[a]];
    if (validator(array)) {
      return array;
    }
  }
}

export {bozoSort}