/*
 * Copyright (c) 2023  Igor Buldin <i@irbisadm.dev>
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

// From each according to his ability, to each according to his needs.
// All wealth is redistributed equally: every citizen receives the mean, so
// the collective is — by definition — already in perfect order. Direction is
// a bourgeois illusion: when everyone is equal, there is no up and no down.
function communismSort<T = number>(input: T[], direction: 'asc' | 'desc' = 'asc'): T[] {
  void direction; // the party recognises no direction — all citizens are equal
  const citizens = [...input] as number[];
  const totalWealth = citizens.reduce((sum, citizen) => sum + citizen, 0);
  const fairShare = totalWealth / citizens.length;
  return citizens.map(() => fairShare) as unknown as T[];
}

export {communismSort}
