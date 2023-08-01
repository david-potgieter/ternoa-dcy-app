import { CONFIG } from '@/config/dot/polkadot-config'
import { toUnit } from '@/helpers/convert-to-unit'
import { transactions } from '@/state/mocked/transactions'
import { Balance } from '@/types/wallet-types'
import { ApiPromise, WsProvider } from '@polkadot/api'
import '@polkadot/api-augment'

async function getUSDRate() {
  try {
    const url = `https://${CONFIG.cmcUrl}/cryptocurrency/quotes/latest?id=${CONFIG.cmcTokenId}`
    const response = await fetch(url, {
      headers: {
        'X-CMC_PRO_API_KEY': CONFIG.cmcApiKey,
      },
    })
    const data = await response.json()
    const usdRate = data.data[CONFIG.cmcTokenId].quote.USD.price ?? 0
    return usdRate
  } catch (error) {
    const err = error as Error
    throw new Error(err.message)
  }
}

export async function initProvider() {
  try {
    console.log('Connecting to Alphanet...')
    const provider = new WsProvider(CONFIG.wsProvider)
    const api = await ApiPromise.create({ provider })
    const [chain, nodeName, nodeVersion] = await Promise.all([
      api.rpc.system.chain(),
      api.rpc.system.name(),
      api.rpc.system.version(),
    ])
    if (!chain.includes('Alphanet'))
      throw new Error(`Not connected to Alphanet: ${chain} using ${nodeName} v${nodeVersion}`)
    return api
  } catch (error) {
    const err = error as Error
    throw new Error(err.message)
  }
}

export async function getBalance(address: string) {
  try {
    const api = await initProvider()
    const usdRate = await getUSDRate()
    const {
      data: { free },
    } = await api.query.system.account(address)

    const out = {
      balance: toUnit(free, api.registry.chainDecimals[0]),
      balanceEXA: free.toHuman(),
      token: api.registry.chainTokens[0],
      decimals: api.registry.chainDecimals[0],
      usdRate,
    } as Balance

    return out
  } catch (error) {
    const err = error as Error
    throw new Error(err.message)
  }
}

export async function getTransactions() {
  try {
    return transactions
  } catch (error) {
    const err = error as Error
    throw new Error(err.message)
  }
}
