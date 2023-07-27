import { OnboardingScreen } from '@/screens/onboarding/onboarding-screen'
import { OnboardingRoutes } from '@/types/route-types'
import { createStackNavigator } from '@react-navigation/stack'

const { Screen, Navigator } = createStackNavigator()

export function OnboardingNavigator() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={OnboardingRoutes.ONBOARDING_CAROUSEL} component={OnboardingScreen} />
    </Navigator>
  )
}
