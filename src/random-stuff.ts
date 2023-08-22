/*
 * Copyright (c) 2023  Igor Buldin <i@irbisadm.dev>
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

function randomShuffle<T>(input: T[]): T[] {
  const array = [...input];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function randomPick<T>(input: T[]): T {
  const min = 0;
  const max = input.length;
  const index = Math.floor(Math.random() * (max - min)) + min;
  return input[index];
}

export {randomShuffle, randomPick}