import TrashSVG from '@/components/ui/image/icons/trash.svg'
import { useLogout } from '@/state/queries/use-queries'
import { Button, Center } from 'native-base'

export function HomeSettingsLandingScreen() {
  const { mutate, isLoading } = useLogout()
  return (
    <Center variant="container">
      <TrashSVG width="200" height="200" color="white" />
      <Button mt="10" variant="danger" onPress={() => mutate()} disabled={isLoading}>
        {isLoading ? 'Please Wait' : 'Remove Wallet'}
      </Button>
    </Center>
  )
}
