import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export enum OnboardingRoutes {
  ONBOARDING_ROOT = 'OnboardingRoot',
  ONBOARDING_PROPERTY = 'OnboardingProperty',
  ONBOARDING_SAFETY = 'OnboardingSafety',
  ONBOARDING_CONVENIENCE = 'OnboardingConvenience',
}

export enum WalletRoutes {
  WALLET_ROOT = 'WalletRoot',
  WALLET_LANDING = 'WalletLanding',
  WALLET_IMPORT_ROOT = 'WalletImportRoot',
  WALLET_IMPORT_PERMISSIONS = 'WalletImportPermissions',
  WALLET_IMPORT_SUCCESS = 'WalletImportSuccess',
  WALLET_CREATE_ROOT = 'WalletCreateRoot',
  WALLET_CREATE_PERMISSIONS = 'WalletCreatePermissions',
  WALLET_CREATE_SECURE_START = 'WalletCreateSecureStart',
  WALLET_CREATE_MNEMONIC_GENERATE = 'WalletCreateMnemonicGenerate',
  WALLET_CREATE_MNEMONIC_STORE = 'WalletCreateMnemonicStore',
  WALLET_CREATE_MNEMONIC_CONFIRM = 'WalletCreateMnemonicConfirm',
  WALLET_CREATE_SUCCESS = 'WalletCreateSuccess',
}

export enum HomeRoutes {
  HOME_ROOT = 'HomeRoot',
  HOME_WALLET = 'HomeWallet',
  HOME_SWAPS = 'HomeSwaps',
  HOME_SETTINGS = 'HomeSettings',
}

export enum SendRoutes {}

type OnboardingRouteParams = Record<OnboardingRoutes, undefined>
type WalletRouteParams = Record<WalletRoutes, undefined>
type HomeRouteParams = Record<HomeRoutes, undefined | { screen: string }>

export type NavParams = NativeStackNavigationProp<
  OnboardingRouteParams & WalletRouteParams & HomeRouteParams
>

// export type NavParamList = {
//   [OnboardingRoutes.ONBOARDING_ROOT]: undefined
//   [OnboardingRoutes.ONBOARDING_PROPERTY]: undefined
//   [OnboardingRoutes.ONBOARDING_SAFETY]: undefined
//   [OnboardingRoutes.ONBOARDING_CONVENIENCE]: undefined
//   [WalletRoutes.WALLET_ROOT]: undefined
//   [WalletRoutes.WALLET_LANDING]: undefined
//   [WalletRoutes.WALLET_IMPORT_ROOT]: undefined
//   [WalletRoutes.WALLET_IMPORT_SUCCESS]: undefined
//   [WalletRoutes.WALLET_IMPORT_PERMISSIONS]: undefined
//   [WalletRoutes.WALLET_CREATE_ROOT]: undefined
//   [WalletRoutes.WALLET_CREATE_PERMISSIONS]: undefined
//   [WalletRoutes.WALLET_CREATE_SECURE_START]: undefined
//   [WalletRoutes.WALLET_CREATE_MNEMONIC_GENERATE]: undefined
//   [WalletRoutes.WALLET_CREATE_MNEMONIC_STORE]: undefined
//   [WalletRoutes.WALLET_CREATE_MNEMONIC_CONFIRM]: undefined
//   [WalletRoutes.WALLET_CREATE_SUCCESS]: undefined
//   [HomeRoutes.HOME_ROOT]: { screen: string }
//   [HomeRoutes.HOME_WALLET]: undefined
//   [HomeRoutes.HOME_SWAPS]: undefined
//   [HomeRoutes.HOME_SETTINGS]: undefined
// }
