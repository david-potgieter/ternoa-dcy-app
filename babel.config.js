module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-tsconfig-paths',
      {
        relative: true,
        extensions: ['.ts', '.tsx', '.json'],
        rootDir: '.',
        tsconfig: 'tsconfig.json',
        transformFunctions: [
          'require',
          'require.resolve',
          'System.import',
          'jest.genMockFromModule',
          'jest.mock',
          'jest.unmock',
          'jest.doMock',
          'jest.dontMock',
          'jest.setMock',
          'require.requireActual',
          'require.requireMock',
        ],
      },
    ],
    //reanimated **SHOULD** always be last
    'react-native-reanimated/plugin',
  ],
}
