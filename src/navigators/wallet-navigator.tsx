import { WalletCreateNavigator } from '@/navigators/wallet-create-navigator'
import { WalletImportNavigator } from '@/navigators/wallet-import-navigator'
import { WalletScreen } from '@/screens/wallet/wallet-screen-welcome'
import { WalletRoutes } from '@/types/route-types'
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack'

const { Screen, Navigator } = createStackNavigator()

export function WalletNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
        gestureEnabled: false,
      }}>
      <Screen name={WalletRoutes.WALLET_LANDING} component={WalletScreen} />
      <Screen name={WalletRoutes.WALLET_IMPORT_ROOT} component={WalletImportNavigator} />
      <Screen name={WalletRoutes.WALLET_CREATE_ROOT} component={WalletCreateNavigator} />
    </Navigator>
  )
}
