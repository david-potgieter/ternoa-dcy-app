module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'never'],
    curly: ['off'],
    'react/no-unstable-nested-components': ['off'],
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'prettier/prettier': 'error',
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false,
        },
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '[iI]gnored',
        varsIgnorePattern: '[iI]gnored',
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: { project: './' },
    },
  },
}
