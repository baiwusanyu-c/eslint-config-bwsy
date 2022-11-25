import { defineRules } from '../../utils'

// see https://github.com/mysticatea/eslint-plugin-eslint-comments/tree/master/docs/rules#best-practices

export default defineRules({
  // Require a eslint-enable comment for every eslint-disable comment
  // 每个 eslint-disable 注释都需要一个 eslint-enable 注释
  'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
  // Disallow a eslint-enable comment for multiple eslint-disable comments
  // 不允许一个 eslint-enable 注释用于多个 eslint-disable 注释
  'eslint-comments/no-aggregating-enable': 'error',
  // Disallow duplicate eslint-disable comments
  // 不允许重复的 eslint-disable 注释
  'eslint-comments/no-duplicate-disable': 'error',
  // Disallow eslint-disable comments without rule names
  // 不允许没有规则名称的 eslint-disable 注释
  'eslint-comments/no-unlimited-disable': 'error',
  // Disallow unused eslint-disable comments
  // 不允许未使用的 eslint-disable 注释
  'eslint-comments/no-unused-disable': 'error',
  // Disallow unused eslint-enable comments
  // 不允许未使用的 eslint-enable 注释
  'eslint-comments/no-unused-enable': 'error',
  // Disallow eslint-disable comments about specific rules
  // 不允许特定规则的 eslint-disable 注释
  'eslint-comments/no-restricted-disable': 'off',
  // Disallow ESLint directive-comments entirely
  // 完全不允许 ESLint 指令注释
  'eslint-comments/no-use': 'off',
})
