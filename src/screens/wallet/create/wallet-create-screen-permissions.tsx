import { CreateWalletForm } from '@/components/form/create-wallet-form'
import { Center } from 'native-base'

export function WalletCreatePermissionsScreen() {
  return (
    <Center safeArea variant="container" justifyContent="space-between" pb="10">
      <CreateWalletForm />
    </Center>
  )
}
