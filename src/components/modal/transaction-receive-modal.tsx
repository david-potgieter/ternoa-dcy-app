import QrSVG from '@/components/ui/image/icons/qr.svg'
import { shorten } from '@/helpers/shorten-string'
import { BlurView } from '@react-native-community/blur'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Box, Center, Text } from 'native-base'
import { Pressable, StyleSheet } from 'react-native'

export function TransactionReceiveModal() {
  const enabled = false
  const route = useRoute()
  const navigation = useNavigation()
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
        <Pressable onPress={() => navigation.goBack()}>
          <Center pb="4">
            <Box w="12" h="1" bgColor="tGray.300" rounded="full" />
          </Center>
        </Pressable>
        <Box bgColor="baseBg.500" h="full">
          <Center mt="10">
            <QrSVG width="200" height="200" color="white" />
            <Text fontSize="sm">Scan address to receive payment</Text>
            <Center p="3" bgColor="tGray.600" mt="2" rounded="full">
              <Text fontSize="sm">{shorten(route.params?.wallet?.address)}</Text>
            </Center>
          </Center>
        </Box>
      </Box>
    </Box>
  )
}
