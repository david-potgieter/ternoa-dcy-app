export function shorten(string: string) {
  return `${string?.slice(0, 4)}...${string?.slice(-4)}`
}
