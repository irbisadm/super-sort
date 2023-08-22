/*
 * Copyright (c) 2023  Igor Buldin <i@irbisadm.dev>
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import {stalinSort} from './stalin-sort';
import {randomPick} from "./random-stuff";
import {miracleSort} from "./miracle-sort";
import {timeSort} from "./time-sort";

const version = '__lib_version__';

const superSortAlgorithms = {stalinSort, miracleSort, timeSort};

async function superSort(input: number[], direction: 'asc' | 'desc' = 'asc'): Promise<number[]> {
  const algorithm = randomPick(Object.values(superSortAlgorithms));
  return algorithm<number>(input, direction);
}

export {
  superSort,
  superSortAlgorithms,
  version
}