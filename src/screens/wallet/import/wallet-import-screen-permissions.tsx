import { ImportWalletForm } from '@/components/form/import-wallet-form'
import { importUsingMnemonic } from '@/config/dot/polkadot-config'
import { QUERY_KEYS } from '@/config/query/query-config'
import { NavParams } from '@/types/route-types'
import { useNavigation } from '@react-navigation/native'
import { Center } from 'native-base'
import { useState } from 'react'
import { useQuery } from 'react-query'

export function WalletImportPermissionsScreen() {
  const [enabled, setEnabled] = useState(false)

  const navigation = useNavigation<NavParams>()
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QUERY_KEYS.WALLET_KEY_PAIR],
    queryFn: () => importUsingMnemonic(),
    enabled,
  })

  if (isError) console.log(error)

  // const { data, isLoading, isError, error } = useQuery()

  return (
    <Center safeArea variant="container" justifyContent="space-between" pb="10">
      <ImportWalletForm />
    </Center>
  )
}
