import SendSVG from '@/components/ui/image/icons/send.svg'
import WalletSVG from '@/components/ui/image/icons/wallet2.svg'
import { WalletHeader } from '@/components/wallet/wallet-header'
import { transactions } from '@/state/mocked/transactions'
import { HomeRoutes, NavParams } from '@/types/route-types'
import { Transaction } from '@/types/wallet-types'
import { useNavigation } from '@react-navigation/native'
import { parseISO } from 'date-fns'
import { format, utcToZonedTime } from 'date-fns-tz'
import { Box, Center, HStack, Pressable, ScrollView, Text, VStack } from 'native-base'

export function TransactionItemIcon({ type }: { type: string }) {
  switch (type) {
    case 'send':
      return <SendSVG width="40" height="40" fill="white" />

    case 'receive':
      return <WalletSVG width="40" height="40" fill="white" />

    default:
      return null
  }
}

export function TransactionItemDetails({ status }: { status: string }) {
  return (
    <VStack>
      <Text>Something Coin</Text>
      <Text variant={status}>{status}</Text>
    </VStack>
  )
}

export function TransactionItemAmount({ amount, symbol }: { amount: string; symbol: string }) {
  return (
    <VStack>
      <Text>{amount}</Text>
      <Text>{symbol}</Text>
    </VStack>
  )
}

export function TransactionItemDate({ timestamp }: { timestamp: string }) {
  const utcTimestamp = parseISO(timestamp)
  const zonedDate = utcToZonedTime(utcTimestamp, 'UTC')
  return <Text>{format(new Date(zonedDate), "MMM dd 'at' hh:mmaaa")}</Text>
}

export function TransactionItem({ item }: { item: Transaction }) {
  const navigation = useNavigation<NavParams>()
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(HomeRoutes.HOME_TRANSACTION_DETAILS_MODAL, {
          transaction: item.id,
        })
      }>
      <Box h="20" w="full" px="6">
        <Box>
          <TransactionItemDate timestamp={item.timestamp} />
        </Box>
        <HStack w="full" justifyContent="space-between">
          <Box>
            <TransactionItemIcon type={item.type} />
          </Box>
          <Box>
            <TransactionItemDetails status={item.status} />
          </Box>
          <Box>
            <TransactionItemAmount amount="1.5" symbol="CAPS" />
          </Box>
        </HStack>
      </Box>
    </Pressable>
  )
}

export function WalletTransactions() {
  return (
    <ScrollView w="full" h="80" py="6">
      {transactions.map(transaction => (
        <TransactionItem key={transaction.id} item={transaction} />
      ))}
    </ScrollView>
  )
}

export function HomeWalletScreen() {
  return (
    <Center safeAreaBottom variant="fullWidth" justifyContent="flex-start">
      <WalletHeader />
      <WalletTransactions />
    </Center>
  )
}
