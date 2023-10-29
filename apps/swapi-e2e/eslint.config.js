const { FlatCompat } = require('@eslint/eslintrc')
const baseConfig = require('../../eslint.config.js')
const js = require('@eslint/js')
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended
})
module.exports = [
  ...baseConfig,
  ...compat.extends('plugin:playwright/recommended'),
  {
    files: [
      'apps/swapi-e2e/**/*.ts',
      'apps/swapi-e2e/**/*.tsx',
      'apps/swapi-e2e/**/*.js',
      'apps/swapi-e2e/**/*.jsx'
    ],
    rules: {}
  },
  {
    files: ['apps/swapi-e2e/**/*.ts', 'apps/swapi-e2e/**/*.tsx'],
    rules: {}
  },
  {
    files: ['apps/swapi-e2e/**/*.js', 'apps/swapi-e2e/**/*.jsx'],
    rules: {}
  },
  {
    files: ['apps/swapi-e2e/src/**/*.{ts,js,tsx,jsx}'],
    rules: {}
  }
]
