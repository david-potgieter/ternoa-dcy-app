import TrashSVG from '@/components/ui/image/icons/trash.svg'
import { contactStorageAtom } from '@/state/atoms/contacts-atom'
import { onBoardedAtom } from '@/state/atoms/onboarded-atom'
import { useLogout } from '@/state/queries/use-queries'
import { NavParams } from '@/types/route-types'
import { useNavigation } from '@react-navigation/native'
import { useSetAtom } from 'jotai'
import { RESET } from 'jotai/utils'
import { Button, Center } from 'native-base'

export function HomeSettingsLandingScreen() {
  const { mutate, isLoading } = useLogout()
  const navigation = useNavigation<NavParams>()
  const setContacts = useSetAtom(contactStorageAtom)
  const setOnboarded = useSetAtom(onBoardedAtom)

  async function handleClearContacts() {
    setContacts(RESET)
    navigation.goBack()
  }

  async function handleClearOnboarded() {
    setOnboarded(RESET)
    navigation.goBack()
  }

  async function handleLogOut() {
    setContacts(RESET)
    setOnboarded(RESET)
    mutate()
  }

  return (
    <Center variant="container">
      <TrashSVG width="200" height="200" color="white" />
      <Button mt="10" variant="danger" onPress={handleClearOnboarded} disabled={isLoading}>
        {isLoading ? 'Please Wait' : 'Restart Onboarding'}
      </Button>
      <Button mt="10" variant="danger" onPress={handleClearContacts} disabled={isLoading}>
        {isLoading ? 'Please Wait' : 'Clear Contacts'}
      </Button>
      <Button mt="10" variant="danger" onPress={handleLogOut} disabled={isLoading}>
        {isLoading ? 'Please Wait' : 'Clear All and Destroy Wallet'}
      </Button>
    </Center>
  )
}
