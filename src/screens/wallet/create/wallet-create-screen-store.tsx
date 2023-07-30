import { GradientButton } from '@/components/ui/button/gradient-button'
import { NavParams, WalletRoutes } from '@/types/route-types'
import { BlurView } from '@react-native-community/blur'
import { useNavigation } from '@react-navigation/native'
import { Box, Button, Center, HStack, Text, VStack } from 'native-base'
import { Fragment, useState } from 'react'
import { Pressable, StyleSheet } from 'react-native'

export function mnemonicToArray(mnemonic: string) {
  const arr = mnemonic.split(' ')
  const half = Math.ceil(arr.length / 2)
  const firstHalf = arr.slice(0, half)
  const secondHalf = arr.slice(-half)
  return [firstHalf, secondHalf]
}

export function MnemonicWord({ word, index }: { word: string; index: number }) {
  return (
    <Center key={word} bgColor="tGray.600" p="1" rounded="lg">
      <Text>
        {index + 1}. {word}
      </Text>
    </Center>
  )
}

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 7,
    zIndex: 0,
  },
})

export function WalletCreateStoreScreen() {
  const [enabled, setEnabled] = useState(false)
  const navigation = useNavigation<NavParams>()
  const phrase = 'space bundle invite bear rate jaguar park around shell middle moat need'
  const [firstHalf, secondHalf] = mnemonicToArray(phrase)
  return (
    <Center safeArea variant="container" justifyContent="space-between" pb="10">
      <Box w="full">
        <Box>
          <Text>Write Down Your Seed Phrase</Text>
          <Text>
            This is your seed phrase. Write it down on a paper and keep it in a safe place. You'll
            be asked to re-enter this phrase (in order) on the next step.
          </Text>
        </Box>
        <Box mt="5">
          <HStack
            borderWidth="1"
            borderColor="tGray.300"
            borderRadius="lg"
            w="full"
            p="6"
            space="8">
            <VStack w="1/2" space="5" mx="-2">
              {firstHalf.map((word, index) => (
                <MnemonicWord word={word} index={index} />
              ))}
            </VStack>

            <VStack w="1/2" space="5" mx="-2">
              {secondHalf.map((word, index) => (
                <MnemonicWord word={word} index={index + 6} />
              ))}
            </VStack>
          </HStack>

          {!enabled ? (
            <Fragment>
              <Center position="absolute" zIndex="10" w="full" h="full">
                <Pressable onPress={() => setEnabled(!enabled)}>
                  <Box>hello</Box>
                </Pressable>
              </Center>
              <BlurView
                style={styles.absolute}
                blurType="dark"
                blurAmount={10}
                reducedTransparencyFallbackColor="black"
              />
            </Fragment>
          ) : null}
        </Box>
      </Box>
      <Box w="full">
        {!enabled ? (
          <Button variant="disabled" disabled>
            Next
          </Button>
        ) : (
          <GradientButton
            label="Next"
            action={() => navigation.navigate(WalletRoutes.WALLET_CREATE_MNEMONIC_CONFIRM)}
          />
        )}
      </Box>
    </Center>
  )
}
