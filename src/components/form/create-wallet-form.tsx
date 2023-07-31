import { GradientButton } from '@/components/ui/button/gradient-button'
import { BlueText } from '@/components/ui/text/blue-text'
import { useCreate } from '@/state/queries/use-queries'
import { WalletCreateFormValues, createWalletFormSchema } from '@/types/form-types'
import { NavParams, WalletRoutes } from '@/types/route-types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigation } from '@react-navigation/native'
import { Box, Button, Center, Text, VStack } from 'native-base'
import { useForm } from 'react-hook-form'
import { InputWithVisibleToggle } from './input/base-text-input'

export function CreateWalletForm() {
  const navigation = useNavigation<NavParams>()
  const { mutate, isLoading, isError, error } = useCreate()

  if (isError) console.log(error)

  const fields = [
    {
      name: 'password',
      multiline: false,
      placeholder: 'Password',
      type: 'password',
    },
    {
      name: 'confirmPassword',
      multiline: false,
      placeholder: 'Confirm Password',
      type: 'password',
    },
  ]

  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      password: 'Tester099',
      confirmPassword: 'Tester099',
    },
    resolver: zodResolver(createWalletFormSchema),
  })

  async function onSubmit(data: WalletCreateFormValues) {
    const enabled = true
    if (enabled) {
      mutate({ password: data.password })
      navigation.navigate(WalletRoutes.WALLET_CREATE_SECURE_START)
    }
  }

  function ButtonSwitch() {
    switch (true) {
      case isValid && !isSubmitting && !isLoading:
        return <GradientButton label="Create Password" action={handleSubmit(onSubmit)} />

      default:
        return (
          <Button variant="disabled" disabled>
            {isLoading ? 'Please Wait' : 'Create Password'}
          </Button>
        )
    }
  }

  return (
    <VStack w="full" h="full" space="4" justifyContent="space-between">
      <VStack w="full" space="4">
        <BlueText label="Create Password" size="20px" />
        <Center px="10" pb="8">
          <Text
            textAlign="center"
            fontFamily="body"
            fontWeight="400"
            fontSize="14"
            color="tGray.400">
            This password will secure your wallet on this device{' '}
          </Text>
        </Center>
        {fields.map(field => (
          <InputWithVisibleToggle<WalletCreateFormValues>
            key={field.name}
            control={control}
            type={field.type as 'text' | 'password'}
            placeholder={field.placeholder}
            name={field.name as keyof WalletCreateFormValues}
            multiline={field.multiline}
          />
        ))}
      </VStack>
      <Box w="full">
        <ButtonSwitch />
      </Box>
    </VStack>
  )
}
