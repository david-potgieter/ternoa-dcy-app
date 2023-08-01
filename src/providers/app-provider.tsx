import { QueryProvider } from '@/providers/query-provider'
import { SuspenseProvider } from '@/providers/susense-provider'
import { ThemeProvider } from '@/providers/theme-provider'
import { NavigationContainer } from '@react-navigation/native'
import RNBootSplash from 'react-native-bootsplash'
import 'react-native-gesture-handler'

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <SuspenseProvider>
        <QueryProvider>
          <NavigationContainer onReady={() => RNBootSplash.hide()}>{children}</NavigationContainer>
        </QueryProvider>
      </SuspenseProvider>
    </ThemeProvider>
  )
}
