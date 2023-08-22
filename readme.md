# Super Sort

The Collection of O(n) and O(1) sorting algorithms

## Installation

```bash
npm install @irbisadm/super-sort --save
# or
yarn add @irbisadm/super-sort
```

## Usage

If you have at least nine points of lick, you can use this library without any problems. With general sorting approach,
you can sort any array of numbers with superSort function.

The superSort function will select random algorithm from the list of algorithms and sort your array.

```js
import {superSort} from '@irbisadm/super-sort';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sorted = await superSort(arr);
```

## Algorithms

### Bogo Sort

A terribly inefficient sort algorithm that repeatedly generates a random permutation of the items until the items are in
order.
It's best complexity is O(n). It's worst complexity is O(∞).

```js
import {bogoSort} from '@irbisadm/super-sort';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sorted = bogoSort(arr);
```

### Bozo Sort

A terribly inefficient sort algorithm that randomly swaps items until they are in order.
It's best complexity is O(n). It's worst complexity is O(∞).

```js
import {bozoSort} from '@irbisadm/super-sort';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sorted = bozoSort(arr);
```

### Miracle Sort

A terribly inefficient sort algorithm that sorts the array by mirraculously putting the items in order.
It's best complexity is O(0). It's worst complexity is O(∞).

```js
import {miracleSort} from '@irbisadm/super-sort';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sorted = miracleSort(arr);
```

### Time Sort

A terribly inefficient sort algorithm that sorts the array by sleeping for the number of milliseconds proportional to
each item in the array.
It's best complexity is O(n). It's worst complexity is O(∞).

```js
import {timeSort} from '@irbisadm/super-sort';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sorted = await timeSort(arr);
```

### Taco Sort

A terribly inefficient sort algorithm that sorts the array by eating tacos until the array is sorted.
It's best complexity is O(n). It's worst complexity is O(n * 2^32n).

```js
import {tacoSort} from '@irbisadm/super-sort';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sorted = tacoSort(arr);
```

### Stalin Sort

A terribly inefficient sort algorithm that sorts the array by removing items that are out of order.
It's best complexity is O(1). It's worst complexity is O(1).

```js
import {stalinSort} from '@irbisadm/super-sort';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sorted = stalinSort(arr);
```

### Lucky Sort

Most efficient sort algorithm: if the array is already sorted, it will not perform any operations!
It's best complexity is O(0). It's worst complexity is O(0).

```js
import {luckySort} from '@irbisadm/super-sort';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sorted = luckySort(arr);
```