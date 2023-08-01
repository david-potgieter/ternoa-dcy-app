export function avatarName(string: string) {
  if (!string || string.length === 0) return null
  const upperString = string.toUpperCase()
  return `${upperString[0]}${upperString[string.length - 1]}`
}
