import { Center, HStack, Pressable, Text } from 'native-base'
import { SvgProps } from 'react-native-svg'

export function GenericActionButton({
  label,
  icon: Icon,
  action,
}: {
  label: string
  icon: React.FC<SvgProps>
  action: () => void
}) {
  return (
    <Pressable onPress={action}>
      <Center py="2" px="3" bgColor="tGray.600" rounded="full">
        <HStack space="1" alignItems="center">
          <Icon width="20" height="20" color="#3D8DFF" />
          <Text fontSize="sm">{label}</Text>
        </HStack>
      </Center>
    </Pressable>
  )
}
