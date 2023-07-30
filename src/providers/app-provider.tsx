import { QueryProvider } from '@/providers/query-provider'
import { ThemeProvider } from '@/providers/theme-provider'
import { NavigationContainer } from '@react-navigation/native'
import RNBootSplash from 'react-native-bootsplash'
import 'react-native-gesture-handler'

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <QueryProvider>
        <NavigationContainer onReady={() => RNBootSplash.hide()}>{children}</NavigationContainer>
      </QueryProvider>
    </ThemeProvider>
  )
}
