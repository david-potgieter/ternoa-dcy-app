import { Text, VStack } from 'native-base'

export function TransactionItemDetails({ status }: { status: string }) {
  return (
    <VStack>
      <Text fontSize="lg" fontFamily="Archivo-Bold" fontWeight="600">
        Something Coin
      </Text>
      <Text fontSize="md" fontFamily="Archivo-Bold" fontWeight="600" variant={status}>
        {status}
      </Text>
    </VStack>
  )
}
