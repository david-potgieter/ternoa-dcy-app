import { OnBoardingContainer } from '@/components/onboarding/onboarding-container'
import { Box, Center } from 'native-base'
import { useRef } from 'react'
import { SwiperFlatList } from 'react-native-swiper-flatlist'

export function OnboardingWelcome() {
  return (
    <Center bgColor="red.200" w="full" h="full">
      Welcome
    </Center>
  )
}

export function OnboardingWelcome2() {
  return (
    <Center bgColor="green.200" w="full" h="full">
      Welcome2
    </Center>
  )
}

const onboardingConfig = [
  { id: 0, Component: OnboardingWelcome, enabled: true },
  { id: 0, Component: OnboardingWelcome2, enabled: true },
]

export const onboardingSections = onboardingConfig.filter(section => section.enabled)

export function OnboardingScreen() {
  const scrollRef = useRef<SwiperFlatList>(null)
  return (
    <Box>
      <SwiperFlatList
        ref={scrollRef}
        index={0}
        showPagination
        disableGesture={false}
        PaginationComponent={props => <Box {...props} />}>
        {onboardingSections.map(({ Component }, index) => (
          <OnBoardingContainer key={index}>
            <Component />
          </OnBoardingContainer>
        ))}
      </SwiperFlatList>
    </Box>
  )
}
