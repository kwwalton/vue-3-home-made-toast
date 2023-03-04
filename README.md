# vue-3-plugin-attempt

This demonstrates how to make your own toast plugin without using a package. It's simple and effective. We start with adding a wrapper div, then each time the plugin is called, we pass in an object with the configuration options for each new toast. Then we add a new div inside that wrapper div and create new Vue instance in there with the ToastMessage component. This uses composition api, so in a <script setup> tag we can access the plugin using const $toast = getCurrentInstance().appContext.config.globalProperties.$toast;

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
