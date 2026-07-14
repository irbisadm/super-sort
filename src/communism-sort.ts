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
