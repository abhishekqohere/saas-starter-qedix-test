export function isQedixBenchmarkOneHourLaterAfter(
  comparisonEpochMs: number
) {
  const now = Date.now();
  const later = now + 3600000;

  return later > comparisonEpochMs;
}