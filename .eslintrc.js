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
    }
  ]
};
