import { TransactionDetailModal } from '@/components/modal/transaction-detail-modal'
import { HomeNavigator } from '@/navigators/home-navigator'
import { OnboardingNavigator } from '@/navigators/onboarding-navigator'
import { WalletNavigator } from '@/navigators/wallet-navigator'
import { HomeRoutes, OnboardingRoutes, WalletRoutes } from '@/types/route-types'
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack'

const { Group, Screen, Navigator } = createStackNavigator()

export function AppNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
      initialRouteName={HomeRoutes.HOME_ROOT}>
      <Group>
        <Screen name={OnboardingRoutes.ONBOARDING_ROOT} component={OnboardingNavigator} />
        <Screen name={WalletRoutes.WALLET_ROOT} component={WalletNavigator} />
        <Screen name={HomeRoutes.HOME_ROOT} component={HomeNavigator} />
      </Group>
      <Group
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          presentation: 'transparentModal',
          cardOverlayEnabled: true,
          ...TransitionPresets.ModalPresentationIOS,
        }}>
        <Screen
          name={HomeRoutes.HOME_TRANSACTION_DETAILS_MODAL}
          component={TransactionDetailModal}
        />
        <Screen name={HomeRoutes.HOME_SEND_MODAL} component={TransactionDetailModal} />
        <Screen name={HomeRoutes.HOME_RECEIVE_MODAL} component={TransactionDetailModal} />
      </Group>
    </Navigator>
  )
}
