import { GradientButton } from '@/components/ui/button/gradient-button'
import { HomeRoutes, NavParams } from '@/types/route-types'
import { useNavigation } from '@react-navigation/native'
import { Box, Center } from 'native-base'

export function WalletImportSuccessScreen() {
  const navigation = useNavigation<NavParams>()
  return (
    <Center safeArea variant="container" justifyContent="space-between">
      <Box>
        <Box>1</Box>
      </Box>
      <Box w="full">
        <GradientButton
          label="Create Password"
          action={() =>
            navigation.replace(HomeRoutes.HOME_ROOT, { screen: HomeRoutes.HOME_WALLET })
          }
        />
      </Box>
    </Center>
  )
}
