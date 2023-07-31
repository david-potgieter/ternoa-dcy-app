import { GradientButton } from '@/components/ui/button/gradient-button'
import shieldImage from '@/components/ui/image/images/checked_shield.png'
import { NavParams, WalletRoutes } from '@/types/route-types'
import { useNavigation } from '@react-navigation/native'
import { Box, Center, Image, Text, VStack } from 'native-base'

export function WalletCreateSecureScreen() {
  const navigation = useNavigation<NavParams>()
  return (
    <Center safeArea variant="container" justifyContent="space-between" pb="10">
      <Box variant="onboardingImage" h="64">
        <Image width="56" variant="onboarding" source={shieldImage} alt="Safe & Security" />
      </Box>
      <Box mb="5">
        <Text fontFamily="body" fontWeight="600" fontSize="lg">
          Secure Your Wallet
        </Text>
      </Box>
      <VStack space="2" px="6">
        <Text color="tGray.400" fontSize="xs">
          Don't risk losing your funds. protect your wallet by saving your Seed phrase in a place
          you trust.
        </Text>
        <Text color="tGray.400" fontSize="xs">
          It's the only way to recover your wallet if you get locked out of the app or get a new
          device.
        </Text>
      </VStack>
      <Box w="full" mt="10">
        <GradientButton
          label="Start"
          action={() => navigation.navigate(WalletRoutes.WALLET_CREATE_MNEMONIC_STORE)}
        />
      </Box>
    </Center>
  )
}
