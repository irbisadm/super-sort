
/*
 * Copyright (c) 2023  Igor Buldin <i@irbisadm.dev>
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

async function timeoutPromise<T>(element:T, timeout:number){
  return new Promise<T>(resolve=>{
    setTimeout(()=>{
      resolve(element);
    },timeout);
  });
}

function calcTime(element:number, direction: 'asc' | 'desc'){
  const time = element*4;
  return direction === 'asc' ? time : Number.MAX_SAFE_INTEGER - time;
}

async function timeSort<T = number>(input:T[], direction: 'asc' | 'desc' = 'asc'):Promise<T[]>{
  const promises = input.map(element=>timeoutPromise(element, calcTime(element as number, direction)));
  return await Promise.all(promises);
}

export {timeSort}