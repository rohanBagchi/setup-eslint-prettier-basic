/* eslint-disable */
module.exports = {
  env: {
    es2021: true,
    browser: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  plugins: ['import', 'prettier', '@typescript-eslint', 'react'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:promise/recommended',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'jest/no-conditional-expect': 'off',
    'jest/expect-expect': [
      'error',
      {
        assertFunctionNames: ['expect*']
      }
    ],
    'no-prototype-builtins': 'off',
    'promise/always-return': 'off',
    'promise/catch-or-return': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'dayjs',
            message: "Please import from '@/common/dayjs' instead."
          },
          {
            name: 'antd',
            importNames: ['notification'],
            message: "Please import 'notification' from '@/appSwitch/CustomNotification' instead."
          },
          {
            name: 'react-intl',
            importNames: ['useIntl'],
            message: "Please import 'intlRef' from '@/appSwitch/Intl' instead."
          }
        ],
        patterns: [
          {
            group: ['src/*'],
            message:
              "Please import from '@/' instead. Example: import { getStore } from '@/store/store'"
          }
        ]
      }
    ],
    'prettier/prettier': ['warn'],
    'no-console': 'error'
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
      }
    }
  },
  overrides: [
    {
      files: ['*.test.{ts,tsx}'],
      parserOptions: {
        project: 'tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
        tsconfigRootDir: __dirname
      }
    },
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/no-anonymous-default-export': 'off'
      }
    }
  ]
};
