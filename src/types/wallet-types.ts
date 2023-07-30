export type Coin = 'CAPS' | 'ETH' | 'BTC'
export type TransactionType = 'send' | 'receive'
export type TransactionStatus = 'confirmed' | 'pending' | 'cancelled'

export interface Wallet {
  balance: number
  balanceEXA: string
  token: Coin
  decimals: number
  usdRate: number
}

export interface Transaction {
  id: string
  timestamp: string
  type: TransactionType
  amount: number
  symbol: Coin
  address: string
  status: TransactionStatus
  exchangeRate: number
}
