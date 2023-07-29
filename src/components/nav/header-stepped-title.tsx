import { HeaderTitleProps } from '@react-navigation/elements'
import { Box, Center, HStack, ZStack } from 'native-base'
import { Dimensions, Platform } from 'react-native'

export function HeaderSteppedTitle(props: { step: number } & HeaderTitleProps) {
  const { OS } = Platform
  const { width } = Dimensions.get('window')

  const dots = [0, 1, 2]
  const linesConfig = [
    { id: 0, constraints: [1, 2] },
    { id: 1, constraints: [2, 3] },
  ]

  return (
    <Center w={OS === 'android' ? width - 90 : '100%'}>
      <ZStack w="200px" alignItems="center">
        <HStack
          h="full"
          w="full"
          justifyContent="space-between"
          alignItems="center"
          flexDir="row"
          zIndex="1">
          {dots.map(i => (
            <Box
              key={i}
              w="2"
              h="2"
              bgColor={props.step >= i ? 'primary.500' : 'tGray.600'}
              rounded="full"
            />
          ))}
        </HStack>
        <HStack w="full">
          {linesConfig.map(({ id, constraints }) => (
            <Box
              key={id}
              w="1/2"
              h="0.5"
              bgColor={constraints.includes(props.step) ? 'primary.500' : 'tGray.600'}
              mt="-0.8"
              zIndex="0"
            />
          ))}
        </HStack>
      </ZStack>
    </Center>
  )
}
