import { GradientButton } from '@/components/ui/button/gradient-button'
import { BlueText } from '@/components/ui/text/blue-text'
import { MnemonicWordSelector } from '@/components/ui/text/mnemonic-word'
import { NavParams, WalletRoutes } from '@/types/route-types'
import { useNavigation } from '@react-navigation/native'
import { Box, Button, Center, HStack, Pressable, Text, VStack } from 'native-base'
import { useEffect, useState } from 'react'

export function ConfirmButtonSwitch({
  currentWord,
  sequenceComplete,
  nextAction,
  doneAction,
}: {
  currentWord: string
  sequenceComplete: boolean
  nextAction: () => void
  doneAction: () => void
}) {
  switch (true) {
    case currentWord && !sequenceComplete:
      return <GradientButton label="Next" action={nextAction} />

    case currentWord && sequenceComplete:
      return <GradientButton label="Finish" action={doneAction} />

    default:
      return (
        <Button variant="disabled" disabled>
          Next
        </Button>
      )
  }
}

export function WalletCreateConfirmScreen() {
  const navigation = useNavigation<NavParams>()

  const mnemonic = 'one two three four five six seven eight nine ten eleven twelve'

  const correctSequence = mnemonic.split(' ')

  const [userSequence, setUserSequence] = useState<string[] | []>([])
  const [currentWord, setCurrentWord] = useState('')
  const [currentStep, setCurrentStep] = useState(0)
  const [wordOptions, setWordOptions] = useState<string[] | []>([])
  const section = Math.ceil((userSequence.length + 1) / 4)
  const sequenceComplete = userSequence.length === correctSequence.length - 1
  const topWords = wordOptions.slice(0, 3)
  const bottomWords = wordOptions.slice(3, 6)

  useEffect(() => {
    const options = [correctSequence[currentStep]]
    while (options.length < 6) {
      const randomWord = correctSequence[Math.floor(Math.random() * correctSequence.length)]
      if (!options.includes(randomWord)) {
        options.push(randomWord)
      }
    }
    options.sort(() => Math.random() - 0.5)
    setWordOptions(options)
    setCurrentWord('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep])

  function handleWordClick(word: string) {
    setCurrentWord(word)
  }

  function handleNextClick() {
    setUserSequence([...userSequence, currentWord])
    setCurrentWord('')
    setCurrentStep(currentStep + 1)
  }

  function handleFinish() {
    if (JSON.stringify(userSequence) === JSON.stringify(correctSequence)) {
      console.log('You have entered the correct sequence!')
      navigation.navigate(WalletRoutes.WALLET_CREATE_SUCCESS)
    } else {
      console.log('The sequence you entered is incorrect. Please try again.')
      setUserSequence([])
      setCurrentStep(0)
    }
  }

  return (
    <Center safeArea variant="container" justifyContent="space-between" pb="10">
      <Box w="full">
        <Box>
          <BlueText label="Confirm Seed Phrase" size="16px" />
          <Center px="10">
            <Text fontSize="sm" color="white" textAlign="center">
              Select each word in the order it was presented to you.
            </Text>
          </Center>
        </Box>
        <Box mt="10">
          <HStack>
            <BlueText label={`${userSequence.length + 1}. ${currentWord}`} size="40px" />
          </HStack>
        </Box>
        <Center w="full">
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
        </Center>
        <VStack space="3" mt="12" borderColor="tGray.800" borderWidth="1" rounded="lg" p="8" m="10">
          <Center w="full">
            <HStack space="2">
              {topWords.map((word, index) => (
                <Pressable key={index} onPress={() => handleWordClick(word)}>
                  <MnemonicWordSelector key={word} word={word} />
                </Pressable>
              ))}
            </HStack>
          </Center>
          <Center w="full">
            <HStack space="2">
              {bottomWords.map((word, index) => (
                <Pressable key={index} onPress={() => handleWordClick(word)}>
                  <MnemonicWordSelector key={word} word={word} />
                </Pressable>
              ))}
            </HStack>
          </Center>
        </VStack>
      </Box>
      <Box w="full">
        <ConfirmButtonSwitch
          currentWord={currentWord}
          sequenceComplete={sequenceComplete}
          nextAction={() => handleNextClick()}
          doneAction={() => handleFinish()}
        />
      </Box>
    </Center>
  )
}
