import { Text } from 'native-base'
import { Pressable, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const styles = StyleSheet.create({
  linearGradient: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: '100%',
    borderRadius: 60,
  },
})

export function GradientButton({ label, action }: { label: string; action: () => void }) {
  return (
    <Pressable onPress={action}>
      <LinearGradient
        start={{ x: -0.05, y: 0 }}
        end={{ x: 0.9, y: 0 }}
        colors={['#8AD4EC', '#EF96FF', '#FF56A9', '#FFAA6C']}
        style={styles.linearGradient}>
        <Text variant="buttonText">{label}</Text>
      </LinearGradient>
    </Pressable>
  )
}
