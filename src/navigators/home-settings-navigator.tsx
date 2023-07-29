import { HomeSettingsLandingScreen } from '@/screens/home/settings/home-settings-landing-screen'
import { HomeRoutes } from '@/types/route-types'
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack'

const { Screen, Navigator } = createStackNavigator()

export function HomeSettingsNavigator() {
  return (
    <Navigator
      initialRouteName={HomeRoutes.HOME_SETTINGS_LANDING}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        ...TransitionPresets.ModalFadeTransition,
      }}>
      <Screen name={HomeRoutes.HOME_SETTINGS_LANDING} component={HomeSettingsLandingScreen} />
    </Navigator>
  )
}
