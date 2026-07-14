function randomShuffle<T>(input: T[]): T[] {
  const array = [...input];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function fisherYatesShuffle<T>(input: T[]) {
  const array = [...input];
  let length = array.length;
  while (length) {
    const i = Math.floor(Math.random() * length--);
    [array[length], array[i]] = [array[i], array[length]];
  }
  return array;
}

function randomPick<T>(input: T[]): T {
  const min = 0;
  const max = input.length;
  const index = Math.floor(Math.random() * (max - min)) + min;
  return input[index];
}

export {randomShuffle, fisherYatesShuffle, randomPick}