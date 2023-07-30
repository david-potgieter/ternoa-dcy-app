import { GradientButton } from '@/components/ui/button/gradient-button'
import { NavParams, WalletRoutes } from '@/types/route-types'
import { useNavigation } from '@react-navigation/native'
import { Box, Button, Center, HStack, Pressable, Text, VStack } from 'native-base'
import { useState } from 'react'

export function WalletCreateConfirmScreen() {
  const navigation = useNavigation<NavParams>()

  const mnemonic = 'one two three four five six seven eight nine ten eleven twelve'

  const correctSequence = mnemonic.split(' ')

  const randomSequence = [...correctSequence]
  randomSequence.sort(() => Math.random() - 0.5)
  const [currentWord, setCurrentWord] = useState('')
  const [userSequence, setUserSequence] = useState([])
  const [remainingWords, setRemainingWords] = useState(randomSequence)
  const sequenceComplete = userSequence.length === correctSequence.length
  const section = Math.ceil((userSequence.length + 1) / 4)

  function handleWordClick(word, index) {
    // Set the current word
    setCurrentWord(word)

    const newRemainingWords = [...remainingWords]
    newRemainingWords.splice(index, 1)
    setRemainingWords(newRemainingWords)

    setTimeout(() => {
      setUserSequence([...userSequence, word])
      setCurrentWord('')
    }, 100)
  }

  console.log('userSequence')

  return (
    <Center safeArea variant="container" justifyContent="space-between" pb="10">
      <Box>
        <Box>Confirm Seed Phrase</Box>
        <Box>
          {sequenceComplete ? (
            <Text>All done</Text>
          ) : (
            <Text>
              {userSequence.length + 1}. {currentWord}
            </Text>
          )}
        </Box>
        <HStack mt="10" space="2">
          {[0, 1, 2].map(number => (
            <Box
              key={number}
              bgColor={section > number ? 'primary.500' : 'tGray.800'}
              w="10"
              h="1"
              rounded="xl"
            />
          ))}
        </HStack>
        <VStack space="2">
          {remainingWords.map((word, index) => (
            <Pressable key={index} onPress={() => handleWordClick(word, index)}>
              <Text>{word}</Text>
            </Pressable>
          ))}
        </VStack>
      </Box>
      <Box w="full">
        {!sequenceComplete ? (
          <Button variant="disabled" disabled>
            Next
          </Button>
        ) : (
          <GradientButton
            label="Next"
            action={() => navigation.navigate(WalletRoutes.WALLET_CREATE_SUCCESS)}
          />
        )}
      </Box>
    </Center>
  )
}
