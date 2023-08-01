import { SuspenseFallback } from '@/components/ui/fallback/suspense-fallback'
import { Suspense } from 'react'

export function SuspenseProvider({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<SuspenseFallback />}>{children}</Suspense>
}
