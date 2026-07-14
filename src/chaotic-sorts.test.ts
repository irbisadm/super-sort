import {describe, it, expect} from 'vitest';
import {bogoSort} from './bogo-sort';
import {bozoSort} from './bozo-sort';
import {tacoSort} from './taco-sort';

// bogo/bozo/taco may run forever on larger inputs. We only exercise tiny inputs
// where termination is (practically) guaranteed within a few iterations.
describe('bogoSort', () => {
  it('sorts a two-element array', () => {
    expect(bogoSort([2, 1])).toEqual([1, 2]);
  });

  it('returns single-element and empty arrays', () => {
    expect(bogoSort([1])).toEqual([1]);
    expect(bogoSort([])).toEqual([]);
  });
});

describe('bozoSort', () => {
  it('sorts a two-element array', () => {
    expect(bozoSort([2, 1])).toEqual([1, 2]);
  });
});

describe('tacoSort', () => {
  it('terminates on a single element and keeps the array length', () => {
    // A single element is trivially "sorted", so exactly one iteration runs.
    expect(tacoSort([1])).toHaveLength(1);
  });
});
