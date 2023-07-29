import { Text, VStack } from 'native-base'

export function Logo() {
  return (
    <VStack alignItems="center">
      <Text
        lineHeight="60"
        fontSize="6xl"
        fontFamily="AvenirNext"
        fontWeight="600"
        letterSpacing="-3">
        DCY
      </Text>
      <Text
        fontSize="md"
        fontFamily="Archivo"
        fontWeight="600"
        textTransform="uppercase"
        letterSpacing="-1">
        Crypto Wallet
      </Text>
    </VStack>
  )
}
