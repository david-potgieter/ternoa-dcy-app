import { Button, Text } from 'native-base'

export function SecondaryButton({ label, action }: { label: string; action: () => void }) {
  return (
    <Button variant="secondary" onPress={action}>
      <Text variant="buttonText">{label}</Text>
    </Button>
  )
}
