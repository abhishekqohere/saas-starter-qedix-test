export function getQedixBenchmarkTwoDaysEarlier() {
  const now = Date.now();
  const earlier = now - 172800000;

  return new Date(earlier);
}