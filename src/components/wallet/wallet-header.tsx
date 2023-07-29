import shieldImage from '@/components/ui/image/bgs/bokeh.png'
import { CoinText } from '@/components/ui/text/coin-text'
import { Box, Center, Text } from 'native-base'
import { ImageBackground, StyleSheet } from 'react-native'

export function WalletHeader() {
  const styles = StyleSheet.create({
    backGroundImage: { height: 260 },
  })

  return (
    <Box w="full">
      <ImageBackground source={shieldImage} resizeMode="stretch" style={styles.backGroundImage}>
        <Center w="full" h="240px" justifyContent="space-between" py="6">
          <Center>
            <Text>CAPS</Text>
          </Center>
          <Center>
            <CoinText label="19.2371 CAPS" />
            <Text>$1.55</Text>
          </Center>
          <Center>
            <Text>Send</Text>
          </Center>
        </Center>
      </ImageBackground>
    </Box>
  )
}
