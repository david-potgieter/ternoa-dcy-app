import { OnboardingNavigator } from '@/navigators/onboarding-navigator'
import { OnboardingRoutes, WalletRoutes } from '@/types/route-types'
import { createStackNavigator } from '@react-navigation/stack'

const { Screen, Navigator } = createStackNavigator()

export function AppNavigator() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={OnboardingRoutes.ONBOARDING_ROOT} component={OnboardingNavigator} />
      <Screen name={WalletRoutes.WALLET_ROOT} component={OnboardingNavigator} />
    </Navigator>
  )
}
