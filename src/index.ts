import {stalinSort} from "./stalin-sort";
import {randomPick} from "./random-stuff";
import {miracleSort} from "./miracle-sort";
import {timeSort} from "./time-sort";
import {bogoSort} from "./bogo-sort";
import {bozoSort} from "./bozo-sort";
import {tacoSort} from "./taco-sort";
import {luckySort} from "./lucky-sort";
import {capitalismSort} from "./capitalism-sort";
import {communismSort} from "./communism-sort";

const version = '__lib_version__';

const superSortAlgorithms = {stalinSort, miracleSort, timeSort, bogoSort, bozoSort, tacoSort, luckySort, capitalismSort, communismSort};

async function superSort(input: number[], direction: 'asc' | 'desc' = 'asc'): Promise<number[]> {
  const algorithm = randomPick(Object.values(superSortAlgorithms));
  return algorithm<number>(input, direction);
}

export {
  superSort,
  superSortAlgorithms,
  version
}