/*
 * Copyright (c) 2023  Igor Buldin <i@irbisadm.dev>
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

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