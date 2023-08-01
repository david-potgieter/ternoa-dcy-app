import { ImportWalletForm } from '@/components/form/import-wallet-form'
import { Center } from 'native-base'

export function WalletImportPermissionsScreen() {
  return (
    <Center safeArea variant="container" justifyContent="space-between" pb="10">
      <ImportWalletForm />
    </Center>
  )
}
