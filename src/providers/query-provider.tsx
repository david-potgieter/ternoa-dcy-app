import { queryClient } from '@/config/query/query-config'
import { QueryClientProvider } from 'react-query'

export function QueryProvider({ children }: { children: React.ReactNode }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
