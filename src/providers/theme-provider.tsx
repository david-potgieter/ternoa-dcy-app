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
    paddingHorizontal: 6,
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
  },
  components: {
    Box: {
      baseStyle: {},
      variants: {
        container: () => extraStyle.baseContainer,
        onboardingImage: () => ({ marginBottom: 10 }),
      },
    },
    Center: {
      baseStyle: {},
      variants: {
        container: () => extraStyle.baseContainer,
        onboardingText: () => ({
          width: 'full',
          marginBottom: 32,
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
        headerTitle: () => ({
          fontSize: '16px',
          fontWeight: '600',
          fontFamily: 'Archivo-Regular',
          lineHeight: '24px',
        }),
      },
    },
    // Box: {
    //   variants: {
    //     textInput: () => ({
    //       width: '100%',
    //       maxHeight: 105,
    //     }),
    //     screen: () => ({
    //       width: '100%',
    //       height: '100%',
    //       padding: 4,
    //       _light: { backgroundColor: '#F9FAFE' },
    //       _dark: { backgroundColor: '#111111' },
    //     }),
    //     card: () => ({
    //       rounded: '2xl',
    //       shadowRadius: 5,
    //       shadowOpacity: 0.1,
    //       shadowColor: '#111111',
    //       shadowOffset: { width: 0, height: 4 },
    //       _light: { backgroundColor: 'white' },
    //       _dark: { backgroundColor: '#1C1C20' },
    //     }),
    //   },
    // },
    Button: {
      baseStyle: {
        ...extraStyle.baseButton,
        _text: {
          ...extraStyle.baseButtonText,
        },
      },
      variants: {
        secondary: () => ({
          backgroundColor: 'tGray.600',
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
    // Center: {
    //   variants: {
    //     error: () => ({
    //       backgroundColor: 'red.500',
    //     }),
    //     success: () => ({
    //       backgroundColor: 'green.500',
    //     }),
    //   },
    // },
    // Text: {
    //   baseStyle: {
    //     // fontFamily: 'NunitoSans-Regular',
    //     _light: { color: 'baseDark.500' },
    //     _dark: { color: 'baseLight.500' },
    //   },
    //   variants: {
    //     cardCaveat: () => ({
    //       fontSize: 'xl',
    //       fontFamily: 'Caveat-Regular',
    //       color: 'primary.500',
    //       _dark: { color: 'primary.500' },
    //     }),
    //     primaryButton: () => ({
    //       //   fontFamily: 'NunitoSans-Bold',
    //     }),
    //   },
    // },
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
