import { GradientButton } from '@/components/ui/button/gradient-button'
import { NavParams, WalletRoutes } from '@/types/route-types'
import { useNavigation } from '@react-navigation/native'
import { Box, Center } from 'native-base'

export function WalletCreateConfirmScreen() {
  const navigation = useNavigation<NavParams>()
  return (
    <Center safeArea variant="container" justifyContent="space-between">
      <Box>
        <Box>1</Box>
      </Box>
      <Box w="full">
        <GradientButton
          label="Create Password"
          action={() => navigation.navigate(WalletRoutes.WALLET_CREATE_SUCCESS)}
        />
      </Box>
    </Center>
  )
}
