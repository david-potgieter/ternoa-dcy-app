import { AppTextInput } from '@/components/form/input/app-text-input'
import { GradientButton } from '@/components/ui/button/gradient-button'
import { WalletImportFormValues, importWalletFormSchema } from '@/types/form-types'
import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Button, VStack } from 'native-base'
import { Controller, useForm } from 'react-hook-form'

export function ImportWalletForm() {
  const isLoading = false
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      seedPhrase: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(importWalletFormSchema),
  })

  function onSubmit(data: WalletImportFormValues) {
    console.log(data)
    // handleSubmit
  }

  return (
    <VStack w="full" h="full" space="4">
      <Controller
        control={control}
        render={({ field }) => (
          <AppTextInput
            error={errors.seedPhrase}
            type="text"
            field={field}
            placeholder="Seed Phrase"
            multiline
          />
        )}
        name="seedPhrase"
      />
      <Controller
        control={control}
        render={({ field }) => (
          <AppTextInput
            error={errors.password}
            type="password"
            field={field}
            placeholder="Password"
          />
        )}
        name="password"
      />
      <Controller
        control={control}
        render={({ field }) => (
          <AppTextInput
            error={errors.confirmPassword}
            type="password"
            field={field}
            placeholder="Confirm Password"
          />
        )}
        name="confirmPassword"
      />
      <Box w="full">
        {!isValid ? (
          <Button variant="disabled" disabled>
            Import
          </Button>
        ) : (
          <GradientButton
            label={isLoading ? 'Loading' : 'Import'}
            action={handleSubmit(onSubmit)}
          />
        )}
      </Box>
    </VStack>
  )
}
