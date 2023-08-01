import { storage } from '@/state/atoms/storage-helper'
import { Contact } from '@/types/wallet-types'
import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export const contactStorageAtom = atomWithStorage('contacts', [], storage)
export const contactsAtom = atom(
  get => get(contactStorageAtom),
  async (get, set, newContact: Contact) => {
    const contacts = (await get(contactStorageAtom)) as Contact[]
    const temp = [...contacts]
    temp.push(newContact)
    set(contactStorageAtom, temp)
  },
)
