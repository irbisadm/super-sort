// askClaude sort — the ultimate act of delegation. Rather than sort anything
// ourselves, we hand the whole array to the Anthropic (Claude) API and trust
// whatever it sends back. Unlike every other algorithm in this library, this
// one is useless offline: it needs network access and a valid Anthropic API
// key (passed in on every single call — never read from the environment) to do
// its "work". Sorting has never been slower, pricier, or more delegated.
async function askClaudeSort<T = number>(
  input: T[],
  direction: 'asc' | 'desc' = 'asc',
  apiKey: string
): Promise<T[]> {
  const order = direction === 'asc' ? 'ascending' : 'descending';
  const prompt =
    `Sort this JSON array in ${order} order. ` +
    `Reply with ONLY the sorted JSON array — no prose, no explanation, no code fences: ` +
    JSON.stringify(input);

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 4096,
      messages: [{role: 'user', content: prompt}],
    }),
  });

  if (!response.ok) {
    throw new Error(`askClaudeSort failed: Anthropic API returned status ${response.status}`);
  }

  const data = await response.json();
  return JSON.parse(data.content?.[0]?.text) as T[];
}

export {askClaudeSort}
