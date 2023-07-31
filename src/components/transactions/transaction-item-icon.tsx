import SendSVG from '@/components/ui/image/icons/send.svg'
import WalletSVG from '@/components/ui/image/icons/wallet2.svg'

export function TransactionItemIcon({ type }: { type: string }) {
  switch (type) {
    case 'send':
      return <SendSVG width="35" height="35" fill="white" />

    case 'receive':
      return <WalletSVG width="35" height="35" fill="white" />

    default:
      return null
  }
}
