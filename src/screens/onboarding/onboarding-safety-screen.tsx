import shieldImage from '@/components/ui/image/images/checked_shield.png'
import { PrimaryText } from '@/components/ui/text/primary-text'
import { SecondaryText } from '@/components/ui/text/secondary-text'
import { Box, Center, Image } from 'native-base'

export function SafetyScreen() {
  return (
    <Center variant="container">
      <Box variant="onboardingImage">
        <Image variant="onboarding" source={shieldImage} alt="Safe & Security" />
      </Box>
      <Center variant="onboardingText">
        <SecondaryText label="Safe" />
        <PrimaryText label="Security" />
      </Center>
    </Center>
  )
}
