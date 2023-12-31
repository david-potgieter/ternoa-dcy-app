import { TransactionItemAmount } from '@/components/transactions/transaction-item-amount'
import { TransactionItemDate } from '@/components/transactions/transaction-item-date'
import { TransactionItemDetails } from '@/components/transactions/transaction-item-details'
import { TransactionItemIcon } from '@/components/transactions/transaction-item-icon'
import { HomeRoutes, NavParams } from '@/types/route-types'
import { Transaction } from '@/types/wallet-types'
import { useNavigation } from '@react-navigation/native'
import { Box, Center, HStack, Pressable } from 'native-base'

export function TransactionItem({ item }: { item: Transaction }) {
  const navigation = useNavigation<NavParams>()
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(HomeRoutes.HOME_TRANSACTION_DETAILS_MODAL, {
          transactionId: item.id,
        })
      }>
      <Box h="20" w="full" px="6" my="4">
        <Box mb="2">
          <TransactionItemDate timestamp={item.timestamp} />
        </Box>
        <HStack w="full" justifyContent="space-between">
          <HStack alignItems="center">
            <Center w="10" mr="2">
              <TransactionItemIcon type={item.type} />
            </Center>
            <Box>
              <TransactionItemDetails
                label={`${item.type === 'send' ? 'Sent' : 'Receive'} ${item.symbol}`}
                status={item.status}
              />
            </Box>
          </HStack>
          <Box>
            <TransactionItemAmount
              value={`${item.amount} ${item.symbol}`}
              usd={item.usdRate.toFixed(3)}
            />
          </Box>
        </HStack>
      </Box>
    </Pressable>
  )
}
