/*
 * Copyright (c) 2023  Igor Buldin <i@irbisadm.dev>
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

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