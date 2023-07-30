import shieldImage from '@/components/ui/image/bgs/bokeh.png'
import { CoinText } from '@/components/ui/text/coin-text'
import { getBalance } from '@/config/dot/polkadot-config'
import { QUERY_KEYS } from '@/config/query/query-config'
import { Wallet } from '@/types/wallet-types'
import { Box, Center, Text } from 'native-base'
import { Fragment } from 'react'
import { ImageBackground, StyleSheet } from 'react-native'
import { useQuery } from 'react-query'

const styles = StyleSheet.create({
  backGroundImage: { height: 260 },
})

export function WalletHeader() {
  const { data, isLoading, isError, error } = useQuery<Wallet, Error>(
    QUERY_KEYS.WALLET_BALANCE,
    getBalance,
  )

  if (isError) console.log(error)

  return (
    <Box w="full">
      <ImageBackground source={shieldImage} resizeMode="stretch" style={styles.backGroundImage}>
        <Center w="full" h="240px" justifyContent="space-between" py="6">
          {isLoading ? (
            <Box>Loading</Box>
          ) : (
            <Fragment>
              <Center>
                <Text>{data?.token}</Text>
              </Center>
              <Center>
                <CoinText label={`${data?.balance} ${data?.token}`} />
                <Text>$ {data?.usdRate * data?.balance}</Text>
              </Center>
              <Center>
                <Text>Send</Text>
              </Center>
            </Fragment>
          )}
        </Center>
      </ImageBackground>
    </Box>
  )
}
