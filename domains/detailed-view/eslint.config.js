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
      'domains/detailed-view/**/*.ts',
      'domains/detailed-view/**/*.tsx',
      'domains/detailed-view/**/*.js',
      'domains/detailed-view/**/*.jsx'
    ],
    rules: {}
  },
  {
    files: ['domains/detailed-view/**/*.ts', 'domains/detailed-view/**/*.tsx'],
    rules: {}
  },
  {
    files: ['domains/detailed-view/**/*.js', 'domains/detailed-view/**/*.jsx'],
    rules: {}
  }
]
