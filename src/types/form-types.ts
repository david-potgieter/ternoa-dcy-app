import { z } from 'zod'

export const importWalletFormSchema = z
  .object({
    seedPhrase: z.string().min(48),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

export const createWalletFormSchema = z
  .object({
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

export const createContactFormSchema = z.object({
  contactAddress: z.string().min(20),
})

export type WalletImportFormValues = z.infer<typeof importWalletFormSchema>
export type WalletCreateFormValues = z.infer<typeof createWalletFormSchema>
export type ContactCreateFormValues = z.infer<typeof createContactFormSchema>
