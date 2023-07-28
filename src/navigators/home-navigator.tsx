import { HomeWalletScreen } from '@/screens/home/home-wallet-screen'
import { HomeRoutes } from '@/types/route-types'
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Box } from 'native-base'

const { Screen, Navigator } = createBottomTabNavigator()

export function HomeTabs(props: BottomTabBarProps) {
  console.log(props)
  return <Box bgColor="red.400">TABS</Box>
}

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
    </Navigator>
  )
}
