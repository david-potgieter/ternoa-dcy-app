import { Center } from 'native-base'
import { Dimensions } from 'react-native'

export function OnBoardingContainer({ children }: { children: React.ReactNode }) {
  const { width, height } = Dimensions.get('window')
  return (
    <Center w={width} h={height} bgColor="yellow.200">
      {children}
    </Center>
  )
}
