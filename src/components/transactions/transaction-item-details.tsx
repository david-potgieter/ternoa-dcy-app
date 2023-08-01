import { Text, VStack } from 'native-base'

export function TransactionItemDetails({ label, status }: { label: string; status: string }) {
  return (
    <VStack>
      <Text fontSize="lg" fontFamily="Archivo-Bold" fontWeight="600">
        {label}
      </Text>
      <Text fontSize="md" fontFamily="Archivo-Bold" fontWeight="600" variant={status}>
        {status}
      </Text>
    </VStack>
  )
}
