import { avatarName } from '@/helpers/avatar-name'
import { Box, Center, HStack, Text, VStack } from 'native-base'

export function WalletContact({
  name,
  label,
  extra,
}: {
  name: string
  label: string
  extra?: string
}) {
  return (
    <HStack justifyContent="space-between" alignItems="center" my="4" px="4">
      <Box justifyContent="flex-start" flexDir="row">
        <Center w="10" h="10" bgColor="primary.500" rounded="full">
          {avatarName(name)}
        </Center>
        <VStack ml="4">
          <HStack>
            <Text>{name}</Text>
            {extra ? (
              <Text fontSize="xs" color="tGray.400" ml="2">
                {extra}
              </Text>
            ) : null}
          </HStack>
          <Text fontSize="xs" color="tGray.400">
            {label}
          </Text>
        </VStack>
      </Box>
      <Box />
    </HStack>
  )
}
