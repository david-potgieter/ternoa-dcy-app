import { BlurView } from '@react-native-community/blur'
import { useNavigation } from '@react-navigation/native'
import { Box, Center } from 'native-base'
import { Pressable, StyleSheet } from 'react-native'
// import QRSVG from 'src/assets/icons/qr.svg'

export function TransactionDetailModal() {
  const navigation = useNavigation()
  const enabled = false
  const styles = StyleSheet.create({
    absolute: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    overlay: {
      backgroundColor: 'rgba(0,0,0,0.7)',
    },
  })

  return (
    <Box h="full" w="full" justifyContent="flex-end">
      <Pressable onPress={() => navigation.goBack()}>
        <Box h="1/3" />
        {enabled ? (
          <BlurView
            style={styles.absolute}
            blurType="light"
            blurAmount={2}
            reducedTransparencyFallbackColor="white"
          />
        ) : null}
      </Pressable>
      <Box h="2/3">
        <Center pb="4">
          <Box w="12" h="1" bgColor="tGray.300" rounded="full" />
        </Center>
        <Box bgColor="baseBg.500" h="full">
          Detail
        </Box>
      </Box>
    </Box>
  )
}
