import { Text } from 'native-base'

export function SecondaryText({ label, size = '40px' }: { label: string; size: string }) {
  return (
    <Text variant="secondary" fontSize={size}>
      {label}
    </Text>
  )
}
