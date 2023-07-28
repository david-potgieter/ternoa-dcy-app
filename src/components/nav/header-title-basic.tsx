import { HeaderTitleProps } from '@react-navigation/elements'
import { Text } from 'native-base'

export function HeaderTitleBasic(props: { title: string } & HeaderTitleProps) {
  return <Text variant="headerTitle">{props?.title}</Text>
}
