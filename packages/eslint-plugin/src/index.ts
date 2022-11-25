import core from './configs/core'
import esnext from './configs/esnext'
import react from './configs/react'
import next from './configs/next'
import json from './configs/json'
import vue from './configs/vue'
import yml from './configs/yml'
import markdown from './configs/markdown'
import typescript from './configs/typescript'
import typescriptTypeChecking from './configs/typescript-type-checking'
import { definePlugin } from './utils'

const plugin = definePlugin({
  rules: {},
  configs: {
    // basic
    core,
    esnext,
    // frameworks
    vue,
    react,
    next,
    // ts
    typescript,
    typescriptTypeChecking,
    // config format
    yml,
    json,
    // docs
    markdown,
  },
})

const { rules, configs } = plugin

export {
  rules,
  configs,
}
