export function isQedixBenchmarkTomorrowAfter(
  comparisonEpochMs: number
) {
  const now = Date.now();
  const tomorrow = now + 86400000;

  return tomorrow > comparisonEpochMs;
}