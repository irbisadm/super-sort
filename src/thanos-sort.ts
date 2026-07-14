import {isSorted, isSortedDescending} from "./is-sorted";

// Perfectly balanced, as all things should be. While the array is out of order,
// Thanos snaps his fingers and half of its elements turn to dust (chosen at
// random). Each snap halves the length, so the survivors are eventually sorted —
// though there may be far fewer of them than the universe started with.
function thanosSort<T>(input: T[], direction: 'asc' | 'desc' = 'asc'): T[] {
  const validator = direction === 'asc' ? isSorted : isSortedDescending;
  const survivors = [...input];
  while (!validator(survivors)) {
    const snapCount = Math.floor(survivors.length / 2);
    for (let i = 0; i < snapCount; i++) {
      const doomed = (Math.random() * survivors.length) | 0;
      survivors.splice(doomed, 1); // turned to dust
    }
  }
  return survivors;
}

export {thanosSort}
