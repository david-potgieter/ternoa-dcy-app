import { u128 } from '@polkadot/types-codec'
import BN from 'bn.js'

export function toUnit(balance: u128, chainDecimals: number) {
  const base = new BN(10).pow(new BN(chainDecimals))
  const dm = new BN(balance).divmod(base)
  return parseFloat(dm.div.toString() + '.' + dm.mod.toString())
}
