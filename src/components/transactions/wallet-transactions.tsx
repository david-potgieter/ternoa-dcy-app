import { TransactionItem } from '@/components/transactions/transaction-item'
import { getTransactions } from '@/config/dot/polkadot-config'
import { QUERY_KEYS } from '@/config/query/query-config'
import { Box, ScrollView } from 'native-base'
import { useQuery } from 'react-query'

export function WalletTransactions() {
  const { data, isLoading, isError, error } = useQuery(
    QUERY_KEYS.WALLET_TRANSACTIONS,
    getTransactions,
  )

  if (isError) console.log(error)

  return isLoading ? (
    <Box>Loading</Box>
  ) : (
    <ScrollView w="full" h="80" py="6">
      {data?.map(transaction => (
        <TransactionItem key={transaction.id} item={transaction} />
      ))}
    </ScrollView>
  )
}
