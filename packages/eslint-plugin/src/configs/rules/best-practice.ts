import { defineRules } from '../../utils'

export default defineRules({
  // best-practice
  'block-scoped-var': 'error',
  'eqeqeq': ['error', 'smart'],
  'no-alert': 'warn',
  'vars-on-top': 'error',
  'no-eval': 'error',
})
