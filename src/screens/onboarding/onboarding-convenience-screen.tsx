import extraDot from '@/components/ui/image/images/ellip.png'
import rocketImage from '@/components/ui/image/images/rocket.png'
import { PrimaryText } from '@/components/ui/text/primary-text'
import { SecondaryText } from '@/components/ui/text/secondary-text'
import { Box, Center, Image } from 'native-base'

export function ConvenienceScreen() {
  return (
    <Center variant="container">
      <Box variant="onboardingImage">
        <Image source={extraDot} alt="Onboarding Stack" position="absolute" top="20" left="10" />
        <Image variant="onboarding" source={rocketImage} alt="Convenient & Transaction" />
      </Box>
      <Center variant="onboardingText">
        <PrimaryText label="Convenient" />
        <SecondaryText label="Transaction" />
      </Center>
    </Center>
  )
}
