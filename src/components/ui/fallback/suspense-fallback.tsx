import logo from '@/components/ui/image/images/logo.png'
import { Center, Image, Spinner } from 'native-base'

export function SuspenseFallback() {
  return (
    <Center w="full" h="full">
      <Image source={logo} alt="logo" size="lg" />
      <Spinner size="sm" />
    </Center>
  )
}
