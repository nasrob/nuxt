import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin(() => ({
  provide: {
    hello: (msg: string) => `Hello ${msg}!`
  }
}))
