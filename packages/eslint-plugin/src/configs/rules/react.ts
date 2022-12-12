import { defineRules } from '../../utils'

export default defineRules({
  // Prevent usage of button elements without an explicit type attribute
  // 禁止使用没有明确的 type 属性的 button 元素
  'react/button-has-type': 'off',
  // Prevent missing displayName in a React component definition
  // 禁止在 React 组件定义中丢失 displayName
  'react/display-name': ['error', { ignoreTranspilerName: false }],
  // Prevent extraneous defaultProps on components
  // 禁止在组件上额外的 defaultProps
  'react/default-props-match-prop-types': 'error',
  // Forbid foreign propTypes; forbids using another component's prop types unless they are explicitly imported/exported
  // 禁止使用外部的 propTypes；禁止使用除非它们被显式导入/导出之外的另一个组件的 prop 类型
  'react/forbid-foreign-prop-types': 'error',
  // Forbid certain propTypes
  // 禁止某些 propTypes
  'react/forbid-prop-types': ['error', { forbid: ['array'] }],
  // Standardize the way function component get defined
  // 标准化函数组件的定义方式
  'react/function-component-definition': [
    'error',
    { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
  ],
  // Enforce using <> instead of <React.Fragment> for fragments
  // 强制使用 <> 而不是 <React.Fragment> 作为片段
  'react/jsx-fragments': ['error', 'syntax'],
  // Prevent using this.state within a this.setState
  // 禁止在 this.setState 中使用 this.state
  'react/no-access-state-in-setstate': 'error',
  // Prevent using Array index in key prop
  // 禁止在 key prop 中使用数组索引
  'react/no-array-index-key': 'error',
  // Prevent usage of setState in componentDidUpdate
  // 禁止在 componentDidUpdate 中使用 setState
  'react/no-did-update-set-state': 'error',
  // Prevent usage of shouldComponentUpdate when extending React.PureComponent
  // 禁止在扩展 React.PureComponent 时使用 shouldComponentUpdate
  'react/no-redundant-should-component-update': 'error',
  // Prevent this from being used in stateless functional components
  // 禁止在无状态函数组件中使用 this
  'react/no-this-in-sfc': 'error',
  // Prevent common casing typos
  // 禁止常见的大小写错误
  'react/no-typos': 'error',
  // Prevent usage of UNSAFE_ methods
  // 禁止使用 UNSAFE_ 方法
  'react/no-unsafe': ['error', { checkAliases: true }],
  // Prevent definitions of unused prop types
  // 禁止定义未使用的 prop 类型
  'react/no-unused-prop-types': 'error',
  // Attempts to discover all state fields in a React component and warn if any of them are never read.
  // 尝试发现 React 组件中的所有状态字段，并在其中任何一个从未被读取时发出警告。
  'react/no-unused-state': 'error',
  // Prevent usage of setState in componentWillUpdate
  // 禁止在 componentWillUpdate 中使用 setState
  'react/no-will-update-set-state': 'error',
  // Enforce ES5 or ES6 class for React Components
  // 强制使用 ES5 或 ES6 class 作为 React 组件
  'react/prefer-es6-class': 'error',
  // Enforce stateless React Components to be written as a pure function
  // 强制无状态的 React 组件被写为纯函数
  'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
  // Prevent extra closing tags for components without children
  // 禁止为没有子组件的组件添加额外的闭合标签
  'react/self-closing-comp': 'error',
  // Enforce state initialization style
  // 强制 state 初始化风格
  'react/state-in-constructor': ['error', 'never'],
  // Enforce style prop value being an object
  // 强制 style 属性值为对象
  'react/style-prop-object': 'error',
  // Prevent void DOM elements (e.g. <img />, <br />) from receiving children
  // 禁止 void DOM 元素（例如 <img />、<br />）接收 children
  'react/void-dom-elements-no-children': 'error',

  // JSX

  // Enforce a new line after jsx elements and expressions
  // 强制在 jsx 元素和表达式之后使用新行
  'react/jsx-newline': 'off',
  // Prevent usage of javascript: in URLs
  // 禁止在 URL 中使用 javascript:
  'react/jsx-no-script-url': 'error',
  // Prevent react contexts from taking non-stable values
  // 禁止 react 上下文接收非稳定的值
  'react/jsx-no-constructed-context-values': 'error',
  // Enforce boolean attributes notation in JSX
  // 强制在 JSX 中使用布尔属性符号
  'react/jsx-boolean-value': 'error',
  // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
  // 强制或禁止在 JSX 属性和表达式中的大括号内使用空格
  'react/jsx-child-element-spacing': 'error',
  // Validate closing bracket location in JSX
  // 验证 JSX 中的闭合括号位置
  'react/jsx-closing-bracket-location': ['error', { location: 'tag-aligned' }],
  // Validate closing tag location in JSX
  // 验证 JSX 中的闭合标签位置
  'react/jsx-closing-tag-location': 'error',
  // Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children
  // 强制在 JSX 属性和/或子组件中使用大括号或禁止不必要的大括号
  'react/jsx-curly-brace-presence': ['error', { propElementValues: 'always' }],
  // Enforce or disallow spaces inside of curly braces in JSX attributes
  // 强制或禁止在 JSX 属性中的大括号内使用空格
  'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],
  // Enforce or disallow spaces around equal signs in JSX attributes
  // 强制或禁止在 JSX 属性中的等号周围使用空格
  'react/jsx-equals-spacing': ['error', 'never'],
  // Restrict file extensions that may contain JSX
  // 限制可能包含 JSX 的文件扩展名
  'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
  // Validate props indentation in JSX
  // 验证 JSX 中的 props 缩进
  'react/jsx-indent-props': 'off',
  // Validate JSX indentation
  // 验证 JSX 缩进
  'react/jsx-indent': 'off',
  'react/jsx-key': [
    'error',
    {
      checkFragmentShorthand: true,
      checkKeyMustBeforeSpread: true,
    },
  ],
  // Enforce position of the first prop in JSX
  // 强制第一个 prop 在 JSX 中的位置
  'react/jsx-first-prop-new-line': ['error', 'multiline'],
  // Limit maximum of props on a single line in JSX
  // 限制 JSX 中单行上的最大 props 数量
  'react/jsx-max-props-per-line': ['error', { maximum: { single: 5, multi: 1 } }],
  // Disallow unnecessary fragments
  // 禁止不必要的 fragments
  'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
  // Limits every line in JSX to one expression each
  // 限制每行 JSX 中的表达式数量
  'react/jsx-one-expression-per-line': 'off',
  // Enforce PascalCase for user-defined JSX components
  // 强制为用户定义的 JSX 组件使用 PascalCase
  'react/jsx-pascal-case': [
    'error',
    {
      allowNamespace: true,
      allowLeadingUnderscore: true,
    },
  ],
  // Disallow multiple spaces between inline JSX props (fixable)
  // 禁止在内联 JSX 属性之间使用多个空格（可修复）
  'react/jsx-props-no-multi-spaces': 'error',
  // Validate whitespace in and around the JSX opening and closing brackets
  // 验证 JSX 开始和结束括号周围的空白
  'react/jsx-tag-spacing': 'error',
  // Prevent missing parentheses around multilines JSX
  // 禁止在多行 JSX 中缺少括号
  'react/jsx-wrap-multilines': 'error',
})
