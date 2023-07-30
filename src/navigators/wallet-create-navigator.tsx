import { HeaderLeft } from '@/components/nav/header-left'
import { HeaderSteppedTitle } from '@/components/nav/header-stepped-title'
import { extraStyle } from '@/providers/theme-provider'
import { WalletCreateConfirmScreen } from '@/screens/wallet/create/wallet-create-screen-confirm'
import { WalletCreatePermissionsScreen } from '@/screens/wallet/create/wallet-create-screen-permissions'
import { WalletCreateSecureScreen } from '@/screens/wallet/create/wallet-create-screen-secure'
import { WalletCreateStoreScreen } from '@/screens/wallet/create/wallet-create-screen-store'
import { WalletCreateSuccessScreen } from '@/screens/wallet/create/wallet-create-screen-success'
import { WalletRoutes } from '@/types/route-types'
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack'

const { Screen, Navigator } = createStackNavigator()

export function WalletCreateNavigator() {
  return (
    <Navigator
      initialRouteName={WalletRoutes.WALLET_CREATE_MNEMONIC_CONFIRM}
      screenOptions={{
        gestureEnabled: false,
        headerStyle: extraStyle.navHeader,
        ...TransitionPresets.ModalFadeTransition,
        headerLeft: () => <HeaderLeft />,
      }}>
      <Screen
        name={WalletRoutes.WALLET_CREATE_PERMISSIONS}
        component={WalletCreatePermissionsScreen}
        options={{
          headerTitle: props => <HeaderSteppedTitle {...props} step={0} />,
        }}
      />
      <Screen
        name={WalletRoutes.WALLET_CREATE_SECURE_START}
        component={WalletCreateSecureScreen}
        options={{
          headerTitle: props => <HeaderSteppedTitle {...props} step={1} />,
        }}
      />
      <Screen
        name={WalletRoutes.WALLET_CREATE_MNEMONIC_STORE}
        component={WalletCreateStoreScreen}
        options={{
          headerTitle: props => <HeaderSteppedTitle {...props} step={1} />,
        }}
      />
      <Screen
        name={WalletRoutes.WALLET_CREATE_MNEMONIC_CONFIRM}
        component={WalletCreateConfirmScreen}
        options={{
          headerTitle: props => <HeaderSteppedTitle {...props} step={2} />,
        }}
      />
      <Screen
        name={WalletRoutes.WALLET_CREATE_SUCCESS}
        component={WalletCreateSuccessScreen}
        options={{
          headerTitle: props => <HeaderSteppedTitle {...props} step={2} />,
        }}
      />
    </Navigator>
  )
}
