import { AppNavigator } from '@/navigators/app-navigator'
import { AppProvider } from '@/providers/app-provider'

export default function App(): JSX.Element {
  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  )
}
