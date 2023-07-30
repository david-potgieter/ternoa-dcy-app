import { TransactionDetailModal } from '@/components/modal/transaction-detail-modal'
import { getKeychainGenericPassword } from '@/config/dot/polkadot-config'
import { QUERY_KEYS } from '@/config/query/query-config'
import { HomeNavigator } from '@/navigators/home-navigator'
import { OnboardingNavigator } from '@/navigators/onboarding-navigator'
import { WalletNavigator } from '@/navigators/wallet-navigator'
import { onBoardedAtom } from '@/state/atoms/onboarded-atom'
import { HomeRoutes, OnboardingRoutes, WalletRoutes } from '@/types/route-types'
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack'
import { useAtomValue } from 'jotai'
import { useQuery } from 'react-query'

const { Group, Screen, Navigator } = createStackNavigator()

export function RouteSwitch() {
  const onBoarded = useAtomValue(onBoardedAtom)
  const screenOptions = {
    headerShown: false,
    ...TransitionPresets.SlideFromRightIOS,
  }
  const { data, isLoading, isError, error } = useQuery(
    QUERY_KEYS.WALLET_CREDENTIALS,
    getKeychainGenericPassword,
  )

  console.log(!isLoading, onBoarded, data?.password)

  switch (true) {
    case !isLoading && !onBoarded:
      return (
        <Navigator
          initialRouteName={OnboardingRoutes.ONBOARDING_ROOT}
          screenOptions={screenOptions}>
          <Screen name={OnboardingRoutes.ONBOARDING_ROOT} component={OnboardingNavigator} />
        </Navigator>
      )

    case !isLoading && onBoarded && data?.password === undefined:
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

    case !isLoading && onBoarded && data?.password !== undefined:
      return (
        <Navigator initialRouteName={HomeRoutes.HOME_ROOT} screenOptions={screenOptions}>
          <Group>
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

    default:
      return null
  }
}

export function AppNavigator() {
  return <RouteSwitch />
}
// return (
//   <Navigator
//     initialRouteName={OnboardingRoutes.ONBOARDING_ROOT}
//     screenOptions={{
//       headerShown: false,
//       ...TransitionPresets.SlideFromRightIOS,
//     }}>
//     {!isLoading && !onBoarded ? (
//       <Screen name={OnboardingRoutes.ONBOARDING_ROOT} component={OnboardingNavigator} />
//     ) : null}
//     {!isLoading && onBoarded && data?.password === undefined ? (
//       <Screen name={WalletRoutes.WALLET_ROOT} component={WalletNavigator} />
//     ) : null}
//     {!isLoading && onBoarded && data?.password !== undefined ? (
//       <Fragment>
//         <Group>
//           <Screen name={HomeRoutes.HOME_ROOT} component={HomeNavigator} />
//         </Group>
//         <Group
//           screenOptions={{
//             headerShown: false,
//             gestureEnabled: true,
//             presentation: 'transparentModal',
//             cardOverlayEnabled: true,
//             ...TransitionPresets.ModalPresentationIOS,
//           }}>
//           <Screen
//             name={HomeRoutes.HOME_TRANSACTION_DETAILS_MODAL}
//             component={TransactionDetailModal}
//           />
//           <Screen name={HomeRoutes.HOME_SEND_MODAL} component={TransactionDetailModal} />
//           <Screen name={HomeRoutes.HOME_RECEIVE_MODAL} component={TransactionDetailModal} />
//         </Group>
//       </Fragment>
//     ) : null}
//   </Navigator>
// )
// return (
//   <Navigator
//     screenOptions={{
//       headerShown: false,
//       ...TransitionPresets.SlideFromRightIOS,
//     }}
//     initialRouteName={WalletRoutes.WALLET_ROOT}>
//     <Group>
//       <Screen name={OnboardingRoutes.ONBOARDING_ROOT} component={OnboardingNavigator} />
//       <Screen name={WalletRoutes.WALLET_ROOT} component={WalletNavigator} />
//       <Screen name={HomeRoutes.HOME_ROOT} component={HomeNavigator} />
//     </Group>
//     <Group
//       screenOptions={{
//         headerShown: false,
//         gestureEnabled: true,
//         presentation: 'transparentModal',
//         cardOverlayEnabled: true,
//         ...TransitionPresets.ModalPresentationIOS,
//       }}>
//       <Screen
//         name={HomeRoutes.HOME_TRANSACTION_DETAILS_MODAL}
//         component={TransactionDetailModal}
//       />
//       <Screen name={HomeRoutes.HOME_SEND_MODAL} component={TransactionDetailModal} />
//       <Screen name={HomeRoutes.HOME_RECEIVE_MODAL} component={TransactionDetailModal} />
//     </Group>
//   </Navigator>
// )
