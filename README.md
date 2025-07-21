
<div align="right">
  <details>
    <summary >🌐 Language</summary>
    <div>
      <div align="center">
        <a href="https://openaitx.github.io/view.html?user=unplugin&project=unplugin-starter&lang=en">English</a>
        | <a href="https://openaitx.github.io/view.html?user=unplugin&project=unplugin-starter&lang=zh-CN">简体中文</a>
        | <a href="https://openaitx.github.io/view.html?user=unplugin&project=unplugin-starter&lang=zh-TW">繁體中文</a>
        | <a href="https://openaitx.github.io/view.html?user=unplugin&project=unplugin-starter&lang=ja">日本語</a>
        | <a href="https://openaitx.github.io/view.html?user=unplugin&project=unplugin-starter&lang=ko">한국어</a>
        | <a href="https://openaitx.github.io/view.html?user=unplugin&project=unplugin-starter&lang=hi">हिन्दी</a>
        | <a href="https://openaitx.github.io/view.html?user=unplugin&project=unplugin-starter&lang=th">ไทย</a>
        | <a href="https://openaitx.github.io/view.html?user=unplugin&project=unplugin-starter&lang=fr">Français</a>
        | <a href="https://openaitx.github.io/view.html?user=unplugin&project=unplugin-starter&lang=de">Deutsch</a>
        | <a href="https://openaitx.github.io/view.html?user=unplugin&project=unplugin-starter&lang=es">Español</a>
        | <a href="https://openaitx.github.io/view.html?user=unplugin&project=unplugin-starter&lang=it">Italiano</a>
        | <a href="https://openaitx.github.io/view.html?user=unplugin&project=unplugin-starter&lang=ru">Русский</a>
        | <a href="https://openaitx.github.io/view.html?user=unplugin&project=unplugin-starter&lang=pt">Português</a>
        | <a href="https://openaitx.github.io/view.html?user=unplugin&project=unplugin-starter&lang=nl">Nederlands</a>
        | <a href="https://openaitx.github.io/view.html?user=unplugin&project=unplugin-starter&lang=pl">Polski</a>
        | <a href="https://openaitx.github.io/view.html?user=unplugin&project=unplugin-starter&lang=ar">العربية</a>
        | <a href="https://openaitx.github.io/view.html?user=unplugin&project=unplugin-starter&lang=fa">فارسی</a>
        | <a href="https://openaitx.github.io/view.html?user=unplugin&project=unplugin-starter&lang=tr">Türkçe</a>
        | <a href="https://openaitx.github.io/view.html?user=unplugin&project=unplugin-starter&lang=vi">Tiếng Việt</a>
        | <a href="https://openaitx.github.io/view.html?user=unplugin&project=unplugin-starter&lang=id">Bahasa Indonesia</a>
      </div>
    </div>
  </details>
</div>

# unplugin-starter

[![NPM version](https://img.shields.io/npm/v/unplugin-starter?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-starter)

Starter template for [unplugin](https://github.com/unjs/unplugin).

## Template Usage

To use this template, clone it down using:

```bash
npx degit unplugin/unplugin-starter my-unplugin
```

And do a global replacement of `unplugin-starter` with your plugin name.

Then you can start developing your unplugin 🔥

To test your plugin, run: `pnpm run dev`
To release a new version, run: `pnpm run release`

## Install

```bash
npm i unplugin-starter
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import Starter from 'unplugin-starter/vite'

export default defineConfig({
  plugins: [
    Starter({ /* options */ }),
  ],
})
```

Example: [`playground/`](./playground/)

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import Starter from 'unplugin-starter/rollup'

export default {
  plugins: [
    Starter({ /* options */ }),
  ],
}
```

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-starter/webpack')({ /* options */ })
  ]
}
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.js
export default defineNuxtConfig({
  modules: [
    ['unplugin-starter/nuxt', { /* options */ }],
  ],
})
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-starter/webpack')({ /* options */ }),
    ],
  },
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'
import Starter from 'unplugin-starter/esbuild'

build({
  plugins: [Starter()],
})
```

<br></details>
