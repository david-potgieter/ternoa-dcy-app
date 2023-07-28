import { HomeNavigator } from '@/navigators/home-navigator'
import { OnboardingNavigator } from '@/navigators/onboarding-navigator'
import { WalletNavigator } from '@/navigators/wallet-navigator'
import { HomeRoutes, OnboardingRoutes, WalletRoutes } from '@/types/route-types'
import { createStackNavigator } from '@react-navigation/stack'

const { Screen, Navigator } = createStackNavigator()

export function AppNavigator() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName={WalletRoutes.WALLET_ROOT}>
      <Screen name={OnboardingRoutes.ONBOARDING_ROOT} component={OnboardingNavigator} />
      <Screen name={WalletRoutes.WALLET_ROOT} component={WalletNavigator} />
      <Screen name={HomeRoutes.HOME_ROOT} component={HomeNavigator} />
    </Navigator>
  )
}
