import { WalletActionButton } from '@/components/ui/button/wallet-action-button'
import shieldImage from '@/components/ui/image/bgs/bokeh.png'
import SendSVG from '@/components/ui/image/icons/paper_airplane.svg'
import Wallet3SVG from '@/components/ui/image/icons/wallet3.svg'
import { BlueText } from '@/components/ui/text/blue-text'
import { QUERY_KEYS } from '@/config/query/query-config'
import { getCurrentAuth } from '@/state/queries/use-queries'
import { HomeRoutes, NavParams } from '@/types/route-types'
import { useNavigation } from '@react-navigation/native'
import { Box, Center, HStack, Text } from 'native-base'
import { Fragment } from 'react'
import { ImageBackground, StyleSheet } from 'react-native'
import { useQuery } from 'react-query'

const styles = StyleSheet.create({
  backGroundImage: { height: 260 },
})

export function WalletActions() {
  const navigation = useNavigation<NavParams>()
  return (
    <HStack space="2">
      <WalletActionButton
        action={() => navigation.navigate(HomeRoutes.HOME_SEND_MODAL)}
        label="Send"
        icon={SendSVG}
      />
      <WalletActionButton
        action={() => navigation.navigate(HomeRoutes.HOME_RECEIVE_MODAL)}
        label="Receive"
        icon={Wallet3SVG}
      />
    </HStack>
  )
}

export function WalletHeader() {
  const { data, isLoading, isError, error } = useQuery(
    QUERY_KEYS.WALLET_CREDENTIALS,
    getCurrentAuth,
  )

  if (isError) console.log(error)

  const token = data?.balance?.token
  const balance = parseFloat(data?.balance?.balance?.toFixed(3))
  const rate = data?.balance?.usdRate * data?.balance?.balance
  const ratedBalance = parseFloat(rate?.toFixed(3))

  return (
    <Box w="full">
      <ImageBackground source={shieldImage} resizeMode="stretch" style={styles.backGroundImage}>
        <Center w="full" h="240px" justifyContent="space-between" py="6">
          {isLoading ? (
            <Box>Loading</Box>
          ) : (
            <Fragment>
              <Center>
                <Text>{token}</Text>
              </Center>
              <Center>
                <BlueText label={`${balance} ${token}`} />
                <Text>$ {ratedBalance}</Text>
              </Center>
              <Center>
                <WalletActions />
              </Center>
            </Fragment>
          )}
        </Center>
      </ImageBackground>
    </Box>
  )
}
