import { CreateWalletForm } from '@/components/form/create-wallet-form'
import { GradientButton } from '@/components/ui/button/gradient-button'
import { NavParams, WalletRoutes } from '@/types/route-types'
import { useNavigation } from '@react-navigation/native'
import { Box, Center } from 'native-base'

export function WalletCreatePermissionsScreen() {
  const navigation = useNavigation<NavParams>()

  return (
    <Center safeArea variant="container" justifyContent="space-between" pb="10">
      <CreateWalletForm />
      <Box w="full">
        <GradientButton
          label="Create Password"
          action={() => navigation.navigate(WalletRoutes.WALLET_CREATE_MNEMONIC_STORE)}
        />
      </Box>
    </Center>
  )
}
