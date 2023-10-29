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
      'domains/home/**/*.ts',
      'domains/home/**/*.tsx',
      'domains/home/**/*.js',
      'domains/home/**/*.jsx'
    ],
    rules: {}
  },
  {
    files: ['domains/home/**/*.ts', 'domains/home/**/*.tsx'],
    rules: {}
  },
  {
    files: ['domains/home/**/*.js', 'domains/home/**/*.jsx'],
    rules: {}
  }
]
