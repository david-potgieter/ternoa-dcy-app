import { WalletTransactions } from '@/components/transactions/wallet-transactions'
import { WalletHeader } from '@/components/wallet/wallet-header'
import { Center } from 'native-base'

export function HomeWalletScreen() {
  return (
    <Center safeAreaBottom variant="fullWidth" justifyContent="flex-start">
      <WalletHeader />
      <WalletTransactions />
    </Center>
  )
}
