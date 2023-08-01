import { TransactionDetailModal } from '@/components/modal/transaction-detail-modal'
import { TransactionSendModal } from '@/components/modal/transaction-send-modal'
import { QUERY_KEYS } from '@/config/query/query-config'
import { HomeNavigator } from '@/navigators/home-navigator'
import { OnboardingNavigator } from '@/navigators/onboarding-navigator'
import { WalletNavigator } from '@/navigators/wallet-navigator'
import { onBoardedAtom } from '@/state/atoms/onboarded-atom'
import { getCurrentAuth } from '@/state/queries/use-queries'
import { HomeRoutes, OnboardingRoutes, WalletRoutes } from '@/types/route-types'
import { TransitionPresets } from '@react-navigation/stack'
import { useAtomValue } from 'jotai'
import { useQuery } from 'react-query'

import { TransactionReceiveModal } from '@/components/modal/transaction-receive-modal'
import { SuspenseFallback } from '@/components/ui/fallback/suspense-fallback'
import { createStackNavigator } from '@react-navigation/stack'

const { Group, Screen, Navigator } = createStackNavigator()

export function RouteSwitch() {
  const onBoarded = useAtomValue(onBoardedAtom)

  const screenOptions = {
    headerShown: false,
    ...TransitionPresets.SlideFromRightIOS,
  }

  const { data, isLoading, isError, error } = useQuery(
    QUERY_KEYS.WALLET_CREDENTIALS,
    getCurrentAuth,
  )

  if (isError) console.log(error)

  const hasAuth = data && typeof data === 'object' && 'password' in data

  switch (true) {
    case !isLoading && !onBoarded:
      return (
        <Navigator
          initialRouteName={OnboardingRoutes.ONBOARDING_ROOT}
          screenOptions={screenOptions}>
          <Screen name={OnboardingRoutes.ONBOARDING_ROOT} component={OnboardingNavigator} />
        </Navigator>
      )

    case !isLoading && onBoarded && !hasAuth:
      return (
        <Navigator
          initialRouteName={WalletRoutes.WALLET_ROOT}
          screenOptions={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
          }}>
          <Screen name={WalletRoutes.WALLET_ROOT} component={WalletNavigator} />
        </Navigator>
      )

    case !isLoading && onBoarded && hasAuth:
      return (
        <Navigator initialRouteName={HomeRoutes.HOME_ROOT} screenOptions={screenOptions}>
          <Group>
            <Screen
              name={HomeRoutes.HOME_ROOT}
              component={HomeNavigator}
              initialParams={{ ...data }}
            />
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
              initialParams={{ ...data }}
            />
            <Screen
              name={HomeRoutes.HOME_SEND_MODAL}
              component={TransactionSendModal}
              initialParams={{ ...data }}
            />
            <Screen
              name={HomeRoutes.HOME_RECEIVE_MODAL}
              component={TransactionReceiveModal}
              initialParams={{ ...data }}
            />
          </Group>
        </Navigator>
      )

    default:
      return <SuspenseFallback />
  }
}
