import { GradientButton } from '@/components/ui/button/gradient-button'
import { SecondaryButton } from '@/components/ui/button/secondary-button'
import extraDot from '@/components/ui/image/images/ellip.png'
import walletImage from '@/components/ui/image/images/wallet_traditional.png'
import { SecondaryText } from '@/components/ui/text/secondary-text'
import { NavParams, WalletRoutes } from '@/types/route-types'
import { useNavigation } from '@react-navigation/native'
import { Box, Center, Image, VStack } from 'native-base'

export function WalletScreen() {
  const navigation = useNavigation<NavParams>()
  return (
    <Center variant="container">
      <Box mb="20">
        <Image
          source={extraDot}
          alt="Wallet Stack"
          position="absolute"
          top="2"
          left="2"
          width="4"
        />
        <Image variant="onboarding" source={walletImage} alt="Wallet Setup" />
      </Box>
      <Center mb="10">
        <SecondaryText label="Wallet Setup" />
      </Center>

      <VStack space="4" w="full">
        <SecondaryButton
          action={() => navigation.navigate(WalletRoutes.WALLET_IMPORT_ROOT)}
          label="Import Using Seed Phrase"
        />
        <GradientButton
          action={() => navigation.navigate(WalletRoutes.WALLET_CREATE_ROOT)}
          label="Create a New Wallet"
        />
      </VStack>
    </Center>
  )
}
