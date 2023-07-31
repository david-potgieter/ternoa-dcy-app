import { Center, Text } from 'native-base'

export function MnemonicWord({ word, index }: { word: string; index: number }) {
  return (
    <Center key={word} bgColor="tGray.600" p="1" rounded="lg">
      <Text>
        {index + 1}. {word}
      </Text>
    </Center>
  )
}

export function MnemonicWordSelector({ word }: { word: string }) {
  return (
    <Center key={word} bgColor="tGray.700" px="4" py="2" rounded="lg">
      <Text>{word}</Text>
    </Center>
  )
}
