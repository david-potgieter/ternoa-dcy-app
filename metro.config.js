// eslint-disable-next-line @typescript-eslint/no-var-requires
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */

const existingConfig = getDefaultConfig(__dirname)

const config = {
  transformer: {
    ...existingConfig.transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    ...existingConfig.resolver,
    assetExts: existingConfig.resolver.assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...existingConfig.resolver.sourceExts, 'svg'],
  },
}

module.exports = mergeConfig(existingConfig, config)
