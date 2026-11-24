export function clamp(value, min, max) {
  return Number.isFinite(value) ? Math.max(min, Math.min(max, value)) : min;
}
export function channelIndex(index, count) {
  return Number.isInteger(count) && count > 0 && Number.isFinite(index)
    ? ((Math.trunc(index) % count) + count) % count : 0;
}
export function signalLevel(bins) {
  if (!bins.length) return 0;
  return clamp(bins.reduce((sum, value) => sum + value, 0) / (bins.length * 255), 0, 1);
}
