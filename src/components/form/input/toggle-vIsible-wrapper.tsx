import EyeSVG from '@/components/ui/image/icons/eye.svg'
import EyeSlashSVG from '@/components/ui/image/icons/eye_slash.svg'
import { Box, HStack, Pressable, Text, VStack } from 'native-base'
import { FieldError } from 'react-hook-form'

export function ToggleVisibleWrapper({
  hidden,
  action,
  value,
  placeholder,
  error,
  children,
}: {
  hidden: boolean
  action: (val: boolean) => void
  value: string
  placeholder: string
  error?: FieldError
  children: React.ReactNode
}) {
  const hasValue = value.length > 0
  return (
    <Box
      justifyContent="center"
      p="4"
      borderWidth="1"
      borderColor={error ? 'red.300' : 'tGray.700'}
      borderRadius="2xl"
      minH="20">
      <HStack w="full">
        <VStack w="5/6">
          {hasValue ? (
            <Text fontSize="16" color="tGray.400" mb="2">
              {placeholder}
            </Text>
          ) : null}
          <Box mt="0">{children}</Box>
        </VStack>
        <Box justifyContent="flex-start" alignItems="flex-end" w="1/6">
          <Pressable onPress={() => action(!hidden)}>
            <Text>
              {hidden ? (
                <EyeSlashSVG width="25" height="25" color="white" />
              ) : (
                <EyeSVG width="25" height="25" color="white" />
              )}
            </Text>
          </Pressable>
        </Box>
      </HStack>
    </Box>
  )
}
