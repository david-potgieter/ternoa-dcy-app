# DCY Crypto App

DCY Crypto App demo for both iOS and Android platforms. This [**React Native**](https://reactnative.dev) app was bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## Scripts Overview

The project includes a variety of NPM scripts that aid with multiple development tasks:

- `yarn android` & `yarn ios`: Run the project on Android and iOS devices respectively.
- `yarn lint`: Maintain code quality by employing ESLint, a static code analysis tool.
- `yarn import:assets`: Import all necessary assets into the React Native project.
- `yarn generate:splash`: Automate the generation of a splash screen for both iOS and Android.
- `yarn pods`: Install any pod dependencies necessary for the iOS platform.
- `yarn start` & `yarn start:reset`: Initiate the React Native Metro Bundler, the `reset` version also includes cache clearing.

## Getting Started

Before running this project, ensure your environment is set up correctly. Follow the instructions provided in React Native's [official setup guide](https://reactnative.dev/docs/environment-setup).

1. Once set up, clone this repository
2. Install the dependencies and needed setup by executing `yarn get-started`.
3. This will install all the deps, and create a new `.env` for you. Please update as per the document shared.

## Key Dependencies

The project relies on several essential dependencies:

- `react` & `react-native`: The foundation for building native applications using JavaScript and React.
- `@polkadot/api`: Facilitates connection and interaction with Polkadot/Substrate-based blockchains.
- `react-native-bootsplash`: Handles the generation and management of the application's splash screen.
- `react-native-keychain`: Securely stores mnemonic and password using the device keychain.
- `react-query`: A data synchronization library simplifying fetching, caching, and state management.
- `zod`: Ensures data integrity within forms making sure they are correctly typed.
- `react-hook-form`: Assists with efficient form management in the app.
- `native-base`: A pre-built UI component library for accelerated and simplified app development.
- `jotai`: A flexible, straightforward state management library.
- `date-fns`: Manipulates JavaScript dates in a browser & Node.js, offering a comprehensive set of date/time functionalities.

The integration of these libraries equips the DCY Crypto App with a diverse feature set while promoting high code quality and efficiency. Dive into coding with us!

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
yarn start
```

## Step 2: Start the Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_. Run the following command to start a _Android_ or _iOS_ app:

### For Android

```bash
yarn android
```

### For iOS

```bash
yarn ios
```

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

# Demos:

### iOS
https://github.com/david-potgieter/ternoa-dcy-app/assets/2729962/db2306fd-8061-4539-ade0-86765ca4b89a



