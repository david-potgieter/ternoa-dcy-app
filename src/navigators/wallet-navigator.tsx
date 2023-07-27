import { WalletScreen } from '@/screens/wallet/wallet-screens'
import { WalletRoutes } from '@/types/route-types'
import { createStackNavigator } from '@react-navigation/stack'

const { Screen, Navigator } = createStackNavigator()

export function WalletNavigator() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={WalletRoutes.WALLET_ROOT} component={WalletScreen} />
    </Navigator>
  )
}
