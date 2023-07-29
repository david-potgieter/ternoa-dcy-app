import { ThemeProvider } from '@/providers/theme-provider'
import { NavigationContainer } from '@react-navigation/native'
import RNBootSplash from 'react-native-bootsplash'
import 'react-native-gesture-handler'

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <NavigationContainer onReady={() => RNBootSplash.hide()}>{children}</NavigationContainer>
    </ThemeProvider>
  )
}
