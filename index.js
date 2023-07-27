import { AppRegistry, LogBox } from 'react-native'
import { name as appName } from './app.json'
import App from './src/App'

const IGNORED = [
  'In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.',
  'initialScrollIndex "-1" is not valid',
]

LogBox.ignoreLogs(IGNORED)

if (__DEV__) {
  const withoutIgnored =
    logger =>
    (...args) => {
      const output = args.join(' ')

      if (!IGNORED.some(log => output.includes(log))) {
        logger(...args)
      }
    }

  console.log = withoutIgnored(console.log)
  console.info = withoutIgnored(console.info)
  console.warn = withoutIgnored(console.warn)
  console.error = withoutIgnored(console.error)
}

AppRegistry.registerComponent(appName, () => App)
