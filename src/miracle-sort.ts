import {isSorted, isSortedDescending, isSortedDescendingForSure, isSortedForSure} from "./is-sorted";

const PRAYING_TIMEOUT = 5;

async function pray() {
  console.log('Please, pray God about the miracle of sorting for a 5 seconds');
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve();
    }, PRAYING_TIMEOUT * 1000);
  });
}

async function miracleSort<T>(input: T[], direction: 'asc' | 'desc' = 'asc'): Promise<T[]> {
  const validator = direction === 'asc' ? isSorted : isSortedDescending;
  const validatorForValidator = direction === 'asc' ? isSortedForSure : isSortedDescendingForSure;
  while (true) {
    if (validator(input) && validatorForValidator(input))
      return input;
    console.log('Array is not sorted, time to pray for miracle!');
    await pray();
  }
}

export {miracleSort}