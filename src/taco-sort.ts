import {isSorted, isSortedDescending} from "./is-sorted";

function tacoSort<T = number>(input: T[], direction: 'asc' | 'desc' = 'asc'): T[] {
  const validator = direction === 'asc' ? isSorted : isSortedDescending;
  const array: number[] = [...input] as number[];
  while (true) {
    const idx = (Math.random() * array.length) | 0;
    const delta = ((Math.random() * Number.MAX_SAFE_INTEGER) + Number.MIN_SAFE_INTEGER) | 0;
    array[idx] += delta;
    if (validator(array)) {
      return array as T[];
    }
  }
}

export {tacoSort}