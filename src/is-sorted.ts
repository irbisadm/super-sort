/*
 * Copyright (c) 2023  Igor Buldin <i@irbisadm.dev>
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

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