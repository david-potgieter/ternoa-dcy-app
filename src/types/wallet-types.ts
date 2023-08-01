export type Coin = 'CAPS' | 'ETH' | 'BTC'
export type TransactionType = 'send' | 'receive'
export type TransactionStatus = 'confirmed' | 'pending' | 'cancelled'

export interface Balance {
  balance: number
  balanceEXA: string
  token: Coin
  decimals: number
  usdRate: number
}

export interface Credentials {
  username: string
  password: string
}

export interface Wallet extends Credentials {
  storage: string
  name: string
  service: string
  address: string
  isLocked: boolean
  balance: Balance
  transactions?: Transaction[]
}

export interface Transaction {
  id: string
  timestamp: string
  type: TransactionType
  amount: number
  symbol: Coin
  fromAddress: string
  toAddress: string
  status: TransactionStatus
  usdRate: number
}

export interface Contact {
  name: string
  address: string
}
