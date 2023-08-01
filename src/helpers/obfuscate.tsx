export function obfuscate(value: string) {
  return value
    .split(' ')
    .map(word => '*'.repeat(word.length))
    .join(' ')
}
