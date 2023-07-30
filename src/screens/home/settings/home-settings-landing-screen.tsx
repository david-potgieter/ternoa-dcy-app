import { destroyKeychainGenericPassword } from '@/config/dot/polkadot-config'
import { Button, Center } from 'native-base'

export function HomeSettingsLandingScreen() {
  return (
    <Center variant="container">
      <Button onPress={destroyKeychainGenericPassword}>Log Out</Button>
    </Center>
  )
}
