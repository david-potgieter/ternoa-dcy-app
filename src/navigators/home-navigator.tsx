import { HomeTabs } from '@/components/nav/home-tabs'
import { HomeSettingsNavigator } from '@/navigators/home-settings-navigator'
import { HomeSwapScreen } from '@/screens/home/home-swap-screen'
import { HomeWalletScreen } from '@/screens/home/home-wallet-screen'
import { HomeRoutes } from '@/types/route-types'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const { Screen, Navigator } = createBottomTabNavigator()

export function HomeNavigator() {
  return (
    <Navigator
      initialRouteName={HomeRoutes.HOME_WALLET}
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        headerTitle: '',
      }}
      tabBar={props => <HomeTabs {...props} />}>
      <Screen name={HomeRoutes.HOME_WALLET} component={HomeWalletScreen} />
      <Screen name={HomeRoutes.HOME_SWAPS} component={HomeSwapScreen} />
      <Screen name={HomeRoutes.HOME_SETTINGS_ROOT} component={HomeSettingsNavigator} />
    </Navigator>
  )
}
