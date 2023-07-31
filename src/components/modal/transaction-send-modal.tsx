import XMark from '@/components/ui/image/icons/x_mark.svg'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Box, Center, HStack, Pressable, Text, VStack } from 'native-base'

export function WalletContact({ name, label }: { name: string; label: string }) {
  return (
    <HStack justifyContent="space-between" alignItems="center" my="4" px="4">
      <Box justifyContent="flex-start" flexDir="row">
        <Center w="10" h="10" bgColor="red.200" rounded="full">
          AV
        </Center>
        <VStack ml="4">
          <Text>{name}</Text>
          <Text>{label}</Text>
        </VStack>
      </Box>
      <Box />
    </HStack>
  )
}

export function TransactionSendModal() {
  const route = useRoute()
  const navigation = useNavigation()

  console.log(JSON.stringify(route, null, 2))

  const { token, balance } = route?.params?.wallet?.balance

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
        <Text>From</Text>
        <WalletContact name="Account 1" label={`Balance ${balance.toFixed(3)} ${token}`} />
        <Text>To</Text>
        <Box>INSERT FORM HERE</Box>
        <Box>Transfer between my accounts</Box>

        <Text>Recent</Text>
        <WalletContact name="Contact 1" label="0x3Dc...287dkj" />
        <WalletContact name="Contact 2" label="0x2Al...287dkj" />
        <WalletContact name="Contact 3" label="0x3Z1...287dkj" />
      </Box>
    </Box>
  )
}
