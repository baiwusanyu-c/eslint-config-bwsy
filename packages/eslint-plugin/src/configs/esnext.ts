import { defineConfig } from '../utils'
import { resolverExtensions } from '../constants'
import unicornRules from './rules/unicorn'

export default defineConfig({
  env: {
    es6: true,
    browser: true,
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  extends: [
    'plugin:@baiwusanyu/core',
    'plugin:import/recommended',
    'plugin:promise/recommended',
  ],
  plugins: ['unicorn'],
  settings: {
    'import/resolver': {
      node: {
        extensions: resolverExtensions,
      },
    },
  },
  overrides: [
    {
      files: ['scripts/**/*'],
      rules: {
        'no-console': 'off',
      },
    },
    {
      files: ['*.test.ts', '*.test.js', '*.spec.ts', '*.spec.js'],
      rules: {
        'no-unused-expressions': 'off',
      },
    },
  ],
  rules: {
    'no-var': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'generator-star-spacing': ['error', { before: true, after: false }],

    // import
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'type',
        ],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '~/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['type'],
      },
    ],
    'import/first': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unresolved': 'off',
    'import/no-absolute-path': 'off',
    'import/no-named-as-default-member': 'off',

    // promise
    'promise/always-return': 'off',
    'promise/catch-or-return': 'off',
    'promise/no-nesting': 'off',
    'promise/no-callback-in-promise': 'off',

    'multiline-ternary': 'off',
    'no-irregular-whitespace': 'off',
    'no-cond-assign': 'off',
    'no-unmodified-loop-condition': 'off',
    'n/no-callback-literal': 'off',
    // unicorns
    ...unicornRules,
  },
})
