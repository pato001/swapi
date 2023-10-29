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
      'domains/list/**/*.ts',
      'domains/list/**/*.tsx',
      'domains/list/**/*.js',
      'domains/list/**/*.jsx'
    ],
    rules: {}
  },
  {
    files: ['domains/list/**/*.ts', 'domains/list/**/*.tsx'],
    rules: {}
  },
  {
    files: ['domains/list/**/*.js', 'domains/list/**/*.jsx'],
    rules: {}
  }
]
