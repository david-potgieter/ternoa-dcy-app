import { SecondaryButton } from '@/components/ui/button/secondary-button'
import { onBoardedAtom } from '@/state/atoms/onboarded-atom'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { useSetAtom } from 'jotai'
import { Box, Center, HStack } from 'native-base'

export function OnboardingPagination(props: BottomTabBarProps) {
  const { state, navigation } = props
  const setOnBoarded = useSetAtom(onBoardedAtom)

  function handleNext() {
    const next = state.index + 1
    if (next < state.routes.length) {
      navigation.navigate(state.routes[next].name)
    } else {
      setOnBoarded(true)
    }
  }

  return (
    <Center position="absolute" bottom="5" p="4" zIndex="2" w="full">
      <HStack space={1}>
        {state.routes.map((_route, index) => (
          <Box
            key={index}
            w="2"
            h="2"
            rounded="full"
            bgColor={state.index === index ? 'primary.500' : 'tGray.700'}
          />
        ))}
      </HStack>
      <Box mt="7" w="full">
        <SecondaryButton action={handleNext} label="Get Started" />
      </Box>
    </Center>
  )
}
