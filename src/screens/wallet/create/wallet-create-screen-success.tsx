import { GradientButton } from '@/components/ui/button/gradient-button'
import circleImage from '@/components/ui/image/images/checked_circle.png'
import { BlueText } from '@/components/ui/text/blue-text'
import { NavParams, WalletRoutes } from '@/types/route-types'
import { useNavigation } from '@react-navigation/native'
import { Box, Center, Image, Text } from 'native-base'

export function WalletCreateSuccessScreen() {
  const navigation = useNavigation<NavParams>()
  return (
    <Center safeArea variant="container" justifyContent="space-between" pb="10">
      <Image height="250" variant="onboarding" source={circleImage} alt="Safe & Security" />
      <BlueText label="Success!" />
      <Text fontSize="sm" textAlign="center" mt="-5">
        You've successfully protected your wallet. Remember to keep your seed phrase safe, it's your
        responsibility!
      </Text>
      <Text fontSize="sm" textAlign="center" px="20" color="yellow.500">
        Journey not implemented yet, please import using seed phrase
      </Text>
      <Box w="full">
        <GradientButton
          label="Next"
          action={() => navigation.navigate(WalletRoutes.WALLET_LANDING)}
        />
      </Box>
    </Center>
  )
}
