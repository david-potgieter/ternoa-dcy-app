import { ThemeProvider } from '@/providers/theme-provider'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler'

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <NavigationContainer>{children}</NavigationContainer>
    </ThemeProvider>
  )
}
