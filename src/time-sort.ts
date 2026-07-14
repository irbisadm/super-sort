/*
 * Copyright (c) 2023  Igor Buldin <i@irbisadm.dev>
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

const TICK = 4; // milliseconds of sleep per unit of distance between elements

async function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// The element that should come out first sleeps the least. Delays are shifted
// to be non-negative (so negative inputs work too) and bounded by the spread
// of the array (so setTimeout is never asked for an absurd, clamped delay).
function calcTime(element: number, direction: 'asc' | 'desc', min: number, max: number): number {
  return direction === 'asc' ? (element - min) * TICK : (max - element) * TICK;
}

async function timeSort<T = number>(input: T[], direction: 'asc' | 'desc' = 'asc'): Promise<T[]> {
  if (input.length <= 1) return [...input];
  const numbers = input as unknown as number[];
  const min = numbers.reduce((acc, n) => (n < acc ? n : acc), Infinity);
  const max = numbers.reduce((acc, n) => (n > acc ? n : acc), -Infinity);
  const output: T[] = [];
  await Promise.all(
    input.map(async (element, i) => {
      // Each element lands in `output` when *its own* timer fires, so the array
      // fills up in sorted order. Promise.all only waits for every timer to end.
      await sleep(calcTime(numbers[i], direction, min, max));
      output.push(element);
    })
  );
  return output;
}

export {timeSort}
