import { defineRules } from '../../utils'

export default defineRules({
  // unicorns
  // Pass error message when throwing errors
  // 抛出错误时传递错误消息
  'unicorn/error-message': 'error',
  // Uppercase regex escapes
  // 大写正则表达式转义
  'unicorn/escape-case': 'error',
  // Array.isArray instead of instanceof
  // 使用 Array.isArray 而不是 instanceof
  'unicorn/no-array-instanceof': 'error',
  // Prevent deprecated `new Buffer()`
  // 防止使用已弃用的 `new Buffer()`
  'unicorn/no-new-buffer': 'error',
  // Keep regex literals safe!
  // 保持正则表达式字面量安全！
  'unicorn/no-unsafe-regex': 'off',
  // Lowercase number formatting for octal, hex, binary (0x1'error' instead of 0X1'error')
  // 为八进制、十六进制、二进制小写数字格式化（0x1'error' 而不是 0X1'error'）
  'unicorn/number-literal-case': 'error',
  // ** instead of Math.pow()
  // 使用 ** 而不是 Math.pow()
  'unicorn/prefer-exponentiation-operator': 'error',
  // includes over indexOf when checking for existence
  // 检查存在时使用 includes 而不是 indexOf
  'unicorn/prefer-includes': 'error',
  // String methods startsWith/endsWith instead of more complicated stuff
  // 字符串方法 startsWith/endsWith 而不是更复杂的东西
  'unicorn/prefer-starts-ends-with': 'error',
  // textContent instead of innerText
  // 使用 textContent 而不是 innerText
  'unicorn/prefer-text-content': 'error',
  // Enforce throwing type error when throwing error while checking typeof
  // 在检查 typeof 时抛出错误时强制抛出类型错误
  'unicorn/prefer-type-error': 'error',
  // Use new when throwing error
  // 抛出错误时使用 new
  'unicorn/throw-new-error': 'error',
})
