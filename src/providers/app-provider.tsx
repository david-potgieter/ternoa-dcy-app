import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import 'react-native-gesture-handler'

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <NativeBaseProvider>
      <NavigationContainer>{children}</NavigationContainer>
    </NativeBaseProvider>
  )
}
