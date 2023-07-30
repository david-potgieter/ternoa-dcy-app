import { GradientButton } from '@/components/ui/button/gradient-button'
import shieldImage from '@/components/ui/image/images/checked_shield.png'
import { NavParams, WalletRoutes } from '@/types/route-types'
import { useNavigation } from '@react-navigation/native'
import { Box, Center, Image, Text } from 'native-base'

export function WalletCreateSecureScreen() {
  const navigation = useNavigation<NavParams>()
  return (
    <Center safeArea variant="container" justifyContent="space-between" pb="10">
      <Box variant="onboardingImage">
        <Image variant="onboarding" source={shieldImage} alt="Safe & Security" />
      </Box>
      <Box>
        <Text>Secure Your Wallet</Text>
      </Box>
      <Box>
        <Text>
          Don't risk losing your funds. protect your wallet by saving your Seed phrase in a place
          you trust.
        </Text>
        <Text>
          It's the only way to recover your wallet if you get locked out of the app or get a new
          device.
        </Text>
      </Box>
      <Box mb="5">
        <Text>Remind Me Later</Text>
      </Box>
      <Box w="full">
        <GradientButton
          label="Start"
          action={() => navigation.navigate(WalletRoutes.WALLET_CREATE_MNEMONIC_STORE)}
        />
      </Box>
    </Center>
  )
}
