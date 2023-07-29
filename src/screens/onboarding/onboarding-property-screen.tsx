import selectorImage from '@/components/ui/image/images/selector.png'
import { PrimaryText } from '@/components/ui/text/primary-text'
import { SecondaryText } from '@/components/ui/text/secondary-text'
import { Box, Center, Image } from 'native-base'

export function PropertyScreen() {
  return (
    <Center variant="container">
      <Box variant="onboardingImage">
        <Image variant="onboarding" source={selectorImage} alt="Property & Diversity" />
      </Box>
      <Center variant="onboardingText">
        <SecondaryText label="Property" />
        <PrimaryText label="Diversity" />
      </Center>
    </Center>
  )
}
