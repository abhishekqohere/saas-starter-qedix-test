export function getQedixBenchmarkLocalHour(epochMs: number) {
  const date = new Date(epochMs);
  return date.getHours();
}