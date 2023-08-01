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

export interface Wallet {
  storage: string
  name: string
  username: string
  password: string
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
