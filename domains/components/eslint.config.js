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
      'domains/components/**/*.ts',
      'domains/components/**/*.tsx',
      'domains/components/**/*.js',
      'domains/components/**/*.jsx'
    ],
    rules: {}
  },
  {
    files: ['domains/components/**/*.ts', 'domains/components/**/*.tsx'],
    rules: {}
  },
  {
    files: ['domains/components/**/*.js', 'domains/components/**/*.jsx'],
    rules: {}
  }
]
