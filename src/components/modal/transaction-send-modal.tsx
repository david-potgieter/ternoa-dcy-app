import { CreateContactForm } from '@/components/form/create-contact-form'
import XMark from '@/components/ui/image/icons/x_mark.svg'
import { WalletContact } from '@/components/wallet/wallet-contact'
import { shorten } from '@/helpers/shorten-string'
import { contactStorageAtom } from '@/state/atoms/contacts-atom'
import { NavParams, RouteParams } from '@/types/route-types'
import { Contact, Wallet } from '@/types/wallet-types'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useAtomValue } from 'jotai'
import { Box, HStack, Pressable, Text } from 'native-base'

export function TransactionSendModal() {
  const route = useRoute<RouteParams>()
  const navigation = useNavigation<NavParams>()
  const contacts = useAtomValue(contactStorageAtom) as Contact[]
  const wallet = route?.params
  const {
    name,
    address,
    balance: { balance, token },
  } = wallet as Wallet

  return (
    <Box h="full" w="full" justifyContent="flex-end" safeAreaTop>
      <Box bgColor="baseBg.500" h="full" roundedTop="xl" p="6">
        <HStack justifyContent="space-between" alignItems="center">
          <Box />
          <Text>Send To</Text>
          <Pressable onPress={() => navigation.goBack()}>
            <Box>
              <XMark width="20" height="20" color="white" />
            </Box>
          </Pressable>
        </HStack>
        <Text fontSize="sm" fontWeight="600">
          From
        </Text>
        <WalletContact
          name={name}
          extra={shorten(address)}
          label={`Balance ${balance ? balance.toFixed(3) : ''} ${token}`}
        />
        <Text fontSize="sm" fontWeight="600">
          To
        </Text>
        <Box mt="2">
          <CreateContactForm />
        </Box>

        <Text fontSize="sm" fontWeight="600" color="tGray.400">
          Recent
        </Text>
        {contacts.map(contact => (
          <WalletContact
            key={contact.address}
            name={contact.name}
            label={shorten(contact.address)}
          />
        ))}
      </Box>
    </Box>
  )
}
