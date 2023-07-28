import { HeaderLeft } from '@/components/nav/header-left'
import { HeaderTitleBasic } from '@/components/nav/header-title-basic'
import { extraStyle } from '@/providers/theme-provider'
import { WalletImportPermissionsScreen } from '@/screens/wallet/import/wallet-import-screen-permissions'
import { WalletImportSuccessScreen } from '@/screens/wallet/import/wallet-import-screen-success'
import { WalletRoutes } from '@/types/route-types'
import { createStackNavigator } from '@react-navigation/stack'

const { Screen, Navigator } = createStackNavigator()

export function WalletImportNavigator() {
  return (
    <Navigator
      initialRouteName={WalletRoutes.WALLET_IMPORT_PERMISSIONS}
      screenOptions={{
        gestureEnabled: false,
        headerStyle: extraStyle.navHeader,
        headerLeft: () => <HeaderLeft />,
      }}>
      <Screen
        name={WalletRoutes.WALLET_IMPORT_PERMISSIONS}
        component={WalletImportPermissionsScreen}
        options={{
          headerTitle: props => <HeaderTitleBasic {...props} title="Import From Seed" />,
        }}
      />
      <Screen
        name={WalletRoutes.WALLET_IMPORT_SUCCESS}
        component={WalletImportSuccessScreen}
        options={{
          headerTitle: props => <HeaderTitleBasic {...props} title="Success" />,
        }}
      />
    </Navigator>
  )
}
