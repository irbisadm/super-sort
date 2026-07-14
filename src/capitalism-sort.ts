import {isSorted, isSortedDescending} from "./is-sorted";

// The invisible hand at work. Two players meet on the free market and the
// richer one takes a coin from the poorer: the rich get richer, the poor get
// poorer. The market keeps "self-regulating" until it happens to be in order —
// or until the heat death of the economy, whichever comes first.
//
// Set `real: true` for real, unregulated capitalism: the invisible hand always
// ends in monopoly. The single richest player seizes the entire market and
// everyone else is left with nothing.
function capitalismSort<T = number>(input: T[], direction: 'asc' | 'desc' = 'asc', real: boolean = false): T[] {
  const market: number[] = [...input] as number[];

  if (real) {
    if (market.length === 0) return market as unknown as T[];
    let richest = 0;
    for (let i = 1; i < market.length; i++) {
      if (market[i] > market[richest]) richest = i;
    }
    const totalWealth = market.reduce((sum, player) => sum + player, 0);
    market.fill(0); // everyone is left with nothing...
    market[richest] = totalWealth; // ...and the richest takes it all
    return market as unknown as T[];
  }

  const validator = direction === 'asc' ? isSorted : isSortedDescending;
  while (!validator(market)) {
    const investor = (Math.random() * market.length) | 0;
    const worker = (Math.random() * market.length) | 0;
    const rich = market[investor] >= market[worker] ? investor : worker;
    const poor = rich === investor ? worker : investor;
    market[rich] += 1;
    market[poor] -= 1;
  }
  return market as unknown as T[];
}

export {capitalismSort}
