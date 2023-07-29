import { HeaderTitleProps } from '@react-navigation/elements'
import { Center, Text } from 'native-base'
import { Dimensions, Platform } from 'react-native'

export function HeaderTitleBasic(props: { title: string } & HeaderTitleProps) {
  const { OS } = Platform
  const { width } = Dimensions.get('window')

  return (
    <Center w={OS === 'android' ? width - 90 : '100%'}>
      <Text variant="headerTitle">{props?.title}</Text>
    </Center>
  )
}
