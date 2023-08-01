export function mnemonicToArray(mnemonic: string) {
  const arr = mnemonic.split(' ')
  const half = Math.ceil(arr.length / 2)
  const firstHalf = arr.slice(0, half)
  const secondHalf = arr.slice(-half)
  return [firstHalf, secondHalf]
}
