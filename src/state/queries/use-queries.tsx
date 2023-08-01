import { CONFIG } from '@/config/dot/polkadot-config'
import { QUERY_KEYS, queryClient } from '@/config/query/query-config'
import { getBalance, getTransactions } from '@/state/polkadot/use-polkadot'
import { Keyring } from '@polkadot/api'
import { cryptoWaitReady } from '@polkadot/util-crypto'
import { KeypairType } from '@polkadot/util-crypto/types'
import * as Keychain from 'react-native-keychain'
import { useMutation } from 'react-query'

async function logOut() {
  await Keychain.resetGenericPassword()
  return queryClient.setQueryData([QUERY_KEYS.WALLET_CREDENTIALS], {})
}

async function credentialsHelper() {
  await cryptoWaitReady()
  const keyring = new Keyring({ type: CONFIG.keyRingType as KeypairType })
  const credentials = await Keychain.getGenericPassword()
  const transactions = await getTransactions()
  if (!credentials) return {}
  const {
    address,
    isLocked,
    meta: { name },
  } = keyring.addFromUri(credentials.username, { name: 'Wallet 1' })
  const balances = await getBalance(address)
  const out = {
    ...credentials,
    name,
    address,
    isLocked,
    balance: { ...balances },
    transactions,
  }
  return out
}

async function doImport(mnemonic: string, password: string) {
  try {
    await Keychain.setGenericPassword(mnemonic, password)
    const credentials = await credentialsHelper()
    return queryClient.setQueryData([QUERY_KEYS.WALLET_CREDENTIALS], credentials)
  } catch (error) {
    const err = error as Error
    throw new Error(err.message)
  }
}

async function doCreate(password: string) {
  try {
    //create seed phrase
    const seed = ''
    console.log('seed', seed, password)
    if (seed !== '') {
      await Keychain.setGenericPassword(seed, password)
      const credentials = await credentialsHelper()
      return queryClient.setQueryData([QUERY_KEYS.WALLET_CREDENTIALS], credentials)
    }
  } catch (error) {
    const err = error as Error
    throw new Error(err.message)
  }
}

export async function getCurrentAuth() {
  const credentials = await credentialsHelper()
  return credentials
}

export function useImport() {
  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: (values: { mnemonic: string; password: string }) =>
      doImport(values.mnemonic, values.password),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: [QUERY_KEYS.WALLET_CREDENTIALS] })
    },
  })
  return { mutate, isLoading, isError, error }
}

export function useCreate() {
  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: (values: { password: string }) => doCreate(values.password),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: [QUERY_KEYS.WALLET_CREDENTIALS] })
    },
  })
  return { mutate, isLoading, isError, error }
}

export function useLogout() {
  const { mutate, isLoading } = useMutation({
    mutationFn: logOut,
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: [QUERY_KEYS.WALLET_CREDENTIALS] })
    },
  })

  return { mutate, isLoading }
}
