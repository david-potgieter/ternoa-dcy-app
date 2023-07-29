import { TabIcon } from '@/components/nav/tab-icon'
import SwapSVG from '@/components/ui/image/icons/exchange2.svg'
import SettingsSVG from '@/components/ui/image/icons/setting.svg'
import WalletSVG from '@/components/ui/image/icons/wallet2.svg'
import { HomeRoutes } from '@/types/route-types'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { Center, HStack, Pressable } from 'native-base'

export function HomeTabs(props: BottomTabBarProps) {
  const { state, navigation } = props
  const config = {
    [String(HomeRoutes.HOME_WALLET)]: { Icon: WalletSVG },
    [String(HomeRoutes.HOME_SWAPS)]: { Icon: SwapSVG },
    [String(HomeRoutes.HOME_SETTINGS_ROOT)]: { Icon: SettingsSVG },
  }

  return (
    <HStack space="3" justifyContent="space-between" px="4" bgColor="baseBg.500" pb="4">
      {state.routes.map((route, index) => {
        const isActive = state.index === index
        const Icon = config[route.name].Icon

        function buttonPressHandler() {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          switch (true) {
            case !event.defaultPrevented:
              navigation.navigate(route.name)
              break

            default:
              break
          }
        }

        return (
          <Pressable onPress={buttonPressHandler} key={route.key}>
            <Center p="4" rounded="2xl">
              <TabIcon label={route.name} isActive={isActive}>
                <Icon width="25" height="25" fill="#8FA2B7" />
              </TabIcon>
            </Center>
          </Pressable>
        )
      })}
    </HStack>
  )
}
