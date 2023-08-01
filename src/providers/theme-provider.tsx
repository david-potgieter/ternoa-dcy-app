import { Box, NativeBaseProvider, extendTheme } from 'native-base'

export const extraStyle = {
  baseButton: {
    height: 60,
    width: 'full',
    rounded: 'full',
    display: 'flex',
  },
  baseButtonText: {
    fontFamily: 'Archivo-Medium',
    fontWeight: '700',
    color: 'white',
    fontSize: 16,
  },
  baseContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'baseBg.500',
  },
  navHeader: {
    backgroundColor: '#080A0C',
    borderBottomColor: '#080A0C',
    shadowColor: 'transparent',
  },
}

export const theme = extendTheme({
  useSystemColorMode: true,
  colors: {
    primary: {
      500: '#3D8DFF',
    },
    baseBg: {
      500: '#080A0C',
    },
    tGray: {
      300: '#8FA2B7',
      400: '#6A84A0',
      500: '#384657',
      600: '#202832',
      700: '#181E25',
      800: '#101419',
      900: '#18191A',
    },
    tBlue: {
      200: '#8AD4EC',
      600: '#70A2FF',
      700: '#5F97FF',
    },
    tTeal: {
      500: '#54F0D1',
    },
    tGreen: {
      500: '#76E268',
    },
    tPurple: {
      500: '#EF96FF',
    },
    tPink: {
      500: '#FF56A9',
    },
    tOrange: {
      500: '#FFAA6C',
    },
    tRed: {
      500: '#EA3943',
    },
  },
  components: {
    Box: {
      baseStyle: {},
      variants: {
        container: () => extraStyle.baseContainer,
        onboardingImage: () => ({ marginBottom: 10 }),
      },
    },
    Button: {
      baseStyle: {
        ...extraStyle.baseButton,
        _text: {
          ...extraStyle.baseButtonText,
        },
      },
      variants: {
        secondary: () => ({ backgroundColor: 'tGray.600' }),
        disabled: () => ({ backgroundColor: 'tGray.800', _text: { color: 'tGray.500' } }),
        danger: () => ({ backgroundColor: 'red.400', _text: { color: 'white' } }),
      },
    },
    Center: {
      baseStyle: {},
      variants: {
        container: () => ({ ...extraStyle.baseContainer, paddingHorizontal: 6 }),
        fullWidth: () => ({ ...extraStyle.baseContainer }),
        onboardingText: () => ({
          width: 'full',
          marginBottom: 32,
        }),
      },
    },
    Image: {
      baseStyle: { resizeMode: 'contain' },
      variants: {
        onboarding: () => ({
          width: 295,
        }),
      },
    },
    Text: {
      baseStyle: {
        color: 'white',
      },
      variants: {
        primary: () => ({
          fontSize: '40px',
          fontWeight: '700',
          fontFamily: 'Archivo-Bold',
          lineHeight: '56px',
        }),
        secondary: () => ({
          fontSize: '40px',
          fontWeight: '400',
          fontFamily: 'Archivo-Regular',
          lineHeight: '42px',
        }),
        buttonText: () => ({ ...extraStyle.baseButtonText }),
        confirmed: () => ({ color: 'tGreen.500', textTransform: 'capitalize' }),
        pending: () => ({ color: 'primary.500', textTransform: 'capitalize' }),
        cancelled: () => ({ color: 'tRed.500', textTransform: 'capitalize' }),
        headerTitle: () => ({
          fontSize: '16px',
          fontWeight: '600',
          fontFamily: 'Archivo-Regular',
          lineHeight: '24px',
        }),
        blueText: () => ({
          fontSize: '40px',
          fontWeight: '400',
          fontFamily: 'Archivo-Regular',
          lineHeight: '44px',
        }),
      },
    },
  },
  fontConfig: {
    Archivo: {
      100: { normal: 'Archivo-ExtraLight' },
      200: { normal: 'Archivo-Light' },
      300: { normal: 'Archivo-Regular' },
      500: { normal: 'Archivo-Medium' },
      600: { normal: 'Archivo-SemiBold' },
      700: { normal: 'Archivo-Bold' },
      800: { normal: 'Archivo-ExtraBold' },
      900: { normal: 'Archivo-Black' },
    },
    AvenirNext: {
      100: { normal: 'Metropolis-ExtraLight' },
      200: { normal: 'Metropolis-Light' },
      300: { normal: 'Metropolis-Regular' },
      500: { normal: 'Metropolis-Medium' },
      600: { normal: 'Metropolis-SemiBold' },
      700: { normal: 'Metropolis-Bold' },
      800: { normal: 'Metropolis-ExtraBold' },
      900: { normal: 'Metropolis-Black' },
    },
  },
  fonts: {
    heading: 'Archivo',
    body: 'Archivo',
    mono: 'Archivo',
  },
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NativeBaseProvider theme={theme}>
      <Box variant="container">{children}</Box>
    </NativeBaseProvider>
  )
}
