import { parseISO } from 'date-fns'
import { format, utcToZonedTime } from 'date-fns-tz'
import { Text } from 'native-base'

export function TransactionItemDate({ timestamp }: { timestamp: string }) {
  const utcTimestamp = parseISO(timestamp)
  const zonedDate = utcToZonedTime(utcTimestamp, 'UTC')
  return (
    <Text fontSize="sm" fontFamily="Archivo-Regular" fontWeight="400" color="tGray.400">
      {format(new Date(zonedDate), "MMM dd 'at' hh:mmaaa")}
    </Text>
  )
}
