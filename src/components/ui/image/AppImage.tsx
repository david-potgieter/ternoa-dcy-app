import { Center, Image } from 'native-base'

export function AppImage({ source }) {
  return (
    <Center>
      <Image source={source} alt="Welcome!" size="2xl" w="500" resizeMode="contain" />
    </Center>
  )
}

export function SelectorImage({ source }) {
  return (
    <Center>
      <Image source={source} alt="Welcome!" size="2xl" w="500" resizeMode="contain" />
    </Center>
  )
}
