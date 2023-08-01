import { InputContactToggle } from '@/components/form/input/base-text-input'
import { randomName } from '@/helpers/random-name'
import { contactsAtom } from '@/state/atoms/contacts-atom'
import { ContactCreateFormValues, createContactFormSchema } from '@/types/form-types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSetAtom } from 'jotai'
import { VStack } from 'native-base'
import { useForm } from 'react-hook-form'

export function CreateContactForm() {
  const newContact = useSetAtom(contactsAtom)

  const fields = [
    {
      name: 'contactAddress',
      multiline: false,
      placeholder: 'Enter Wallet Address',
      type: 'text',
    },
  ]

  const { control, handleSubmit, reset } = useForm({
    mode: 'onChange',
    defaultValues: { contactAddress: '' },
    resolver: zodResolver(createContactFormSchema),
  })

  function onSubmit(data: ContactCreateFormValues) {
    const enabled = true
    if (enabled) {
      newContact({ name: randomName(), address: data.contactAddress })
      reset()
    }
  }

  return (
    <VStack w="full" h="20" space="4" justifyContent="space-between">
      <VStack w="full" space="4">
        {fields.map(field => (
          <InputContactToggle<ContactCreateFormValues>
            key={field.name}
            control={control}
            type={field.type as 'text' | 'password'}
            placeholder={field.placeholder}
            name={field.name as keyof ContactCreateFormValues}
            multiline={field.multiline}
            action={handleSubmit(onSubmit)}
          />
        ))}
      </VStack>
    </VStack>
  )
}
