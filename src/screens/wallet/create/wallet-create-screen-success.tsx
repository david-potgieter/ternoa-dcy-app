import { GradientButton } from '@/components/ui/button/gradient-button'
import circleImage from '@/components/ui/image/images/checked_circle.png'
import { HomeRoutes, NavParams } from '@/types/route-types'
import { useNavigation } from '@react-navigation/native'
import { Box, Center, Image, Text } from 'native-base'

export function WalletCreateSuccessScreen() {
  const navigation = useNavigation<NavParams>()
  return (
    <Center safeArea variant="container" justifyContent="space-between" pb="10">
      <Box variant="onboardingImage">
        <Image variant="onboarding" source={circleImage} alt="Safe & Security" />
      </Box>
      <Box>
        <Text>Success!</Text>
        <Text>
          You've successfully protected your wallet. Remember to keep your seed phrase safe, it's
          your responsibility!
        </Text>
      </Box>
      <Box w="full">
        <GradientButton
          label="Next"
          action={() =>
            navigation.replace(HomeRoutes.HOME_ROOT, { screen: HomeRoutes.HOME_WALLET })
          }
        />
      </Box>
    </Center>
  )
}
