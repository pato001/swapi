const { FlatCompat } = require('@eslint/eslintrc')
const baseConfig = require('../../eslint.config.js')
const js = require('@eslint/js')
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended
})
module.exports = [
  ...baseConfig,
  ...compat.extends('plugin:@nx/react'),
  {
    files: [
      'apps/swapi/**/*.ts',
      'apps/swapi/**/*.tsx',
      'apps/swapi/**/*.js',
      'apps/swapi/**/*.jsx'
    ],
    rules: {}
  },
  {
    files: ['apps/swapi/**/*.ts', 'apps/swapi/**/*.tsx'],
    rules: {}
  },
  {
    files: ['apps/swapi/**/*.js', 'apps/swapi/**/*.jsx'],
    rules: {}
  }
]
