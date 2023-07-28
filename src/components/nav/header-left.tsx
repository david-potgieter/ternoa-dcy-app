import SVGImg from '@/components/ui/image/icons/chevron_left.svg'
import { NavParams } from '@/types/route-types'
import { useNavigation } from '@react-navigation/native'
import { Center, Pressable } from 'native-base'

export function HeaderLeft() {
  const navigation = useNavigation<NavParams>()
  return (
    <Pressable onPress={() => navigation.popToTop()}>
      <Center h="10" w="6">
        <SVGImg width={30} height="100%" />
      </Center>
    </Pressable>
  )
}
