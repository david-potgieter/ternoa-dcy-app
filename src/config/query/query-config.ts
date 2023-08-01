import { QueryClient } from 'react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: false,
      retry: false,
      cacheTime: 1000 * 60 * 5, // 5 minutes
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
})

export const QUERY_KEYS = {
  PROVIDER_INIT: 'providerInit',
  WALLET_CREDENTIALS: 'walletCredentials',
  WALLET_KEY_PAIR: 'walletKeyPair',
  WALLET_BALANCE: 'walletBalance',
  WALLET_TRANSACTIONS: 'walletTransactions',
}
