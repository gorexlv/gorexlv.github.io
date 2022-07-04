import { defineUserConfig } from 'vuepress'
import { mixTheme } from 'vuepress-theme-mix'
export default defineUserConfig({
    lang: 'en-US',
    title: 'Hello VitePress',
    description: 'Just playing around',
    theme: mixTheme({})
})
