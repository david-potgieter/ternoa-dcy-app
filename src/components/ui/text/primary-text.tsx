import MaskedView from '@react-native-masked-view/masked-view'
import { Box, Center, Text } from 'native-base'
import { StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export function PrimaryText({ label }: { label: string }) {
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
            <Text variant="primary">{label}</Text>
          </Center>
        }>
        <LinearGradient
          start={{ x: 0.25, y: 0 }}
          end={{ x: 0.65, y: 0 }}
          colors={['#8AD4EC', '#EF96FF', '#FF56A9', '#FFAA6C']}
          style={styles.linearGradient}
        />
      </MaskedView>
    </Box>
  )
}
