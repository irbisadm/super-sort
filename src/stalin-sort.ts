function stalinSort<T = any>(suspects: T[], direction: 'asc' | 'desc' = 'asc'): T[] {
  if (suspects.length <= 1) return suspects;
  for (let i = 1; i < suspects.length; i++) {
    if ( (direction === 'asc' && suspects[i-1] > suspects[i])
      || (direction === 'desc' && suspects[i-1] < suspects[i])) {
      suspects.splice(i,1); // shoot traitor!
    }
  }
  return suspects;
}

export {stalinSort}