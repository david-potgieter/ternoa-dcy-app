import MaskedView from '@react-native-masked-view/masked-view'
import { Box, Center, Text } from 'native-base'
import { StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export function BlueText({ label, size = '40px' }: { label: string; size?: string }) {
  const styles = StyleSheet.create({
    maskedView: { flex: 1, flexDirection: 'row', height: '100%' },
    linearGradient: { height: '100%', width: '100%' },
  })

  return (
    <Box w="full" h="56px">
      <MaskedView
        style={styles.maskedView}
        maskElement={
          <Center>
            <Text variant="blueText" fontSize={size}>
              {label}
            </Text>
          </Center>
        }>
        <LinearGradient
          start={{ x: 0.25, y: 0 }}
          end={{ x: 0.65, y: 0 }}
          colors={['#5F97FF', '#8AD4EC']}
          style={styles.linearGradient}
        />
      </MaskedView>
    </Box>
  )
}
