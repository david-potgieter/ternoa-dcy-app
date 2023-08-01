import { TransactionDetailDate } from '@/components/transactions/transaction-item-date'
import { shorten } from '@/helpers/shorten-string'
import { NavParams, RouteParams } from '@/types/route-types'
import { Transaction, Wallet } from '@/types/wallet-types'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Box, Center, HStack, Text, VStack } from 'native-base'
import { Pressable } from 'react-native'
// import QRSVG from 'src/assets/icons/qr.svg'

export function DetailBlock({
  labels,
  children,
}: {
  labels: { left: string; right?: string }
  children: React.ReactNode
}) {
  return (
    <VStack>
      <HStack justifyContent="space-between" mt="4">
        <Text fontSize="xs" fontWeight="400" color="tGray.400">
          {labels.left}
        </Text>
        {labels?.right ? (
          <Text fontSize="xs" fontWeight="400" color="tGray.400">
            {labels.right}
          </Text>
        ) : null}
      </HStack>
      <HStack justifyContent="space-between" mt="4">
        {children}
      </HStack>
    </VStack>
  )
}

export function TransactionDetailModal() {
  const route = useRoute<RouteParams>()
  const navigation = useNavigation<NavParams>()
  const wallet = route?.params
  const { transactionId } = route?.params

  const { transactions } = wallet as Wallet
  const trxDetail =
    transactions?.filter((transaction: Transaction) => transaction.id === transactionId)?.[0] ??
    ({} as Transaction)

  return (
    <Box h="full" w="full" justifyContent="flex-end">
      <Pressable onPress={() => navigation.goBack()}>
        <Box h="1/3" />
      </Pressable>
      <Box h="2/3">
        <Center pb="4">
          <Box w="12" h="1" bgColor="tGray.300" rounded="full" />
        </Center>
        <VStack bgColor="baseBg.500" h="full" p="4" w="full" justifyContent="space-between" pb="10">
          <Box>
            <Center>
              <Text fontSize="md" fontWeight="600">
                {trxDetail.type === 'send' ? 'Sent' : 'Received'} {trxDetail.symbol}
              </Text>
            </Center>
            <DetailBlock labels={{ left: 'Status', right: 'Date' }}>
              <Text
                fontSize="sm"
                fontFamily="Archivo-Bold"
                fontWeight="600"
                variant={trxDetail.status}>
                {trxDetail.status}
              </Text>
              <Text fontSize="sm" fontWeight="400" color="tGray.400">
                {trxDetail.timestamp ? (
                  <TransactionDetailDate timestamp={trxDetail.timestamp} />
                ) : null}
              </Text>
            </DetailBlock>
            <DetailBlock labels={{ left: 'To', right: 'From' }}>
              <Text fontSize="sm" fontWeight="400" color="white">
                {shorten(trxDetail.fromAddress)}
              </Text>
              <Text fontSize="sm" fontWeight="400" color="white">
                {shorten(trxDetail.toAddress)}
              </Text>
            </DetailBlock>
            <DetailBlock labels={{ left: 'Nonce' }}>
              <Text fontSize="sm" fontWeight="400" color="white">
                #0
              </Text>
            </DetailBlock>
          </Box>
          <Box w="full">
            <HStack
              w="full"
              bgColor="tGray.900"
              p="4"
              rounded="lg"
              justifyContent="space-between"
              mb="10">
              <Text fontSize="md" fontFamily="Archivo-Bold" fontWeight="600" color="white">
                Total Amount
              </Text>
              <VStack>
                <Text fontSize="md" fontFamily="Archivo-Bold" fontWeight="600" color="white">
                  {trxDetail.amount} {trxDetail.symbol}
                </Text>
                <Text fontSize="xs" fontWeight="400" color="tGray.400" textAlign="right">
                  ${trxDetail.usdRate.toFixed(3)}
                </Text>
              </VStack>
            </HStack>
            <Center>View on Mainnet</Center>
          </Box>
        </VStack>
      </Box>
    </Box>
  )
}
