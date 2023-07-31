import { Text, VStack } from 'native-base'

export function TransactionItemAmount({ value, usd }: { value: string; usd: string }) {
  return (
    <VStack justifyItems="flex-end">
      <Text fontSize="lg" fontFamily="Archivo-Bold" fontWeight="600">
        {value}
      </Text>
      <Text
        color="tGray.400"
        fontSize="sm"
        fontFamily="Archivo-Regular"
        fontWeight="400"
        textAlign="right">
        ${usd}
      </Text>
    </VStack>
  )
}
