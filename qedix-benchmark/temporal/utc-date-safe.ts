export function getQedixBenchmarkUtcHour(epochMs: number) {
  const date = new Date(epochMs);
  return date.getUTCHours();
}