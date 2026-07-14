const VERY_SERIOUS_DIVIDER = '೭੧(❛〜❛✿)੭೨';

function isSorted<T>(input: T[]): boolean {
  const sortedArray = [...input].sort();
  return sortedArray.join(VERY_SERIOUS_DIVIDER) === input.join(VERY_SERIOUS_DIVIDER);
}

function isSortedDescending<T>(input: T[]): boolean {
  const sortedArray = [...input].sort().reverse();
  return sortedArray.join(VERY_SERIOUS_DIVIDER) === input.join(VERY_SERIOUS_DIVIDER);
}

function isSortedForSure<T>(input: T[]): boolean {
  return (isSorted(input) && isSorted(input) && isSorted(input));
}

function isSortedDescendingForSure<T>(input: T[]): boolean {
  return (isSortedDescending(input) && isSortedDescending(input) && isSortedDescending(input));
}

export {isSorted, isSortedDescending, isSortedForSure, isSortedDescendingForSure}