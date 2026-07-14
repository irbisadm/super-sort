import {describe, it, expect} from 'vitest';
import {superSort, superSortAlgorithms, version} from './index';

describe('superSortAlgorithms registry', () => {
  it('exposes every algorithm as a function', () => {
    expect(Object.keys(superSortAlgorithms)).toEqual([
      'stalinSort', 'miracleSort', 'timeSort', 'bogoSort',
      'bozoSort', 'tacoSort', 'luckySort', 'capitalismSort', 'communismSort',
      'quantumBogoSort',
      'thanosSort',
    ]);
    for (const algorithm of Object.values(superSortAlgorithms)) {
      expect(typeof algorithm).toBe('function');
    }
  });
});

describe('superSort', () => {
  // Every algorithm terminates on a single-element input and returns length 1,
  // so this exercises the random pick without risking a non-terminating run.
  it('resolves to a length-1 array whichever algorithm is picked', async () => {
    for (let i = 0; i < 25; i++) {
      const result = await superSort([1]);
      expect(result).toHaveLength(1);
    }
  });
});

describe('version', () => {
  it('is replaced at build time, so the source keeps the placeholder', () => {
    expect(version).toBe('__lib_version__');
  });
});
