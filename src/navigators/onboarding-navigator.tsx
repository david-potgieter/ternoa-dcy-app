import { OnboardingPagination } from '@/components/ui/onboarding/onboarding-pagination'
import { ConvenienceScreen } from '@/screens/onboarding/onboarding-convenience-screen'
import { PropertyScreen } from '@/screens/onboarding/onboarding-property-screen'
import { SafetyScreen } from '@/screens/onboarding/onboarding-safety-screen'
import { OnboardingRoutes } from '@/types/route-types'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const { Screen, Navigator } = createBottomTabNavigator()

export function OnboardingNavigator() {
  return (
    <Navigator
      initialRouteName={OnboardingRoutes.ONBOARDING_PROPERTY}
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        headerTitle: '',
      }}
      tabBar={props => <OnboardingPagination {...props} />}>
      <Screen name={OnboardingRoutes.ONBOARDING_PROPERTY} component={PropertyScreen} />
      <Screen name={OnboardingRoutes.ONBOARDING_SAFETY} component={SafetyScreen} />
      <Screen name={OnboardingRoutes.ONBOARDING_CONVENIENCE} component={ConvenienceScreen} />
    </Navigator>
  )
}
