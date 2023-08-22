/*
 * Copyright (c) 2023  Igor Buldin <i@irbisadm.dev>
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

function stalinSort<T = any>(suspects: T[], direction: 'asc' | 'desc' = 'asc'): T[] {
  if (suspects.length <= 1) return suspects;
  let survivors = [suspects[0]];
  for (let i = 1; i < suspects.length; i++) {
    const survivorsMax = survivors.length - 1;
    if (direction === 'asc' && survivors[survivorsMax] > suspects[i]) {
      continue; // shoot traitor!
    }
    if (direction === 'desc' && survivors[survivorsMax] < suspects[i]) {
      continue; // shoot traitor!
    }
    survivors.push(suspects[i]);
  }
  return survivors;
}

export {stalinSort}