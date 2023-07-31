import { GradientButton } from '@/components/ui/button/gradient-button'
import { useImport } from '@/state/queries/use-queries'
import { WalletImportFormValues, importWalletFormSchema } from '@/types/form-types'
import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Button, VStack } from 'native-base'
import { useForm } from 'react-hook-form'
import { InputWithVisibleToggle } from './input/base-text-input'

export function ImportWalletForm() {
  const { mutate, isLoading, isError, error } = useImport()

  if (isError) console.log(error)

  const fields = [
    {
      name: 'seedPhrase',
      multiline: true,
      placeholder: 'Seed Phrase',
      type: 'text',
    },
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
      seedPhrase: 'invite kiwi space upset around shell middle sing bundle rate jaguar need',
      password: 'Tester099',
      confirmPassword: 'Tester099',
    },
    resolver: zodResolver(importWalletFormSchema),
  })

  function onSubmit(data: WalletImportFormValues) {
    const enabled = true
    if (enabled) {
      mutate({ mnemonic: data.seedPhrase, password: data.password })
    }
  }

  function ButtonSwitch() {
    switch (true) {
      case isValid && !isSubmitting && !isLoading:
        return <GradientButton label="Import" action={handleSubmit(onSubmit)} />

      default:
        return (
          <Button variant="disabled" disabled>
            {isLoading ? 'Please Wait' : 'Import'}
          </Button>
        )
    }
  }

  return (
    <VStack w="full" h="full" space="4" justifyContent="space-between">
      <VStack w="full" space="4">
        {fields.map(field => (
          <InputWithVisibleToggle<WalletImportFormValues>
            key={field.name}
            control={control}
            type={field.type as 'text' | 'password'}
            placeholder={field.placeholder}
            name={field.name as keyof WalletImportFormValues}
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
