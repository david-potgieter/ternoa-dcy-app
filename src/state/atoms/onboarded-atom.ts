import { storage } from '@/state/atoms/storage-helper'
import { atomWithStorage } from 'jotai/utils'

export const onBoardedAtom = atomWithStorage('onBoarded', false, storage)
