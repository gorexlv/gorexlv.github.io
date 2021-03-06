import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/rex/Workspace/github.com/gorexlv/gorexlv.github.io/node_modules/vuepress-theme-mix/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/Users/rex/Workspace/github.com/gorexlv/gorexlv.github.io/node_modules/vuepress-theme-mix/lib/client/layouts/Layout.vue")),
}
