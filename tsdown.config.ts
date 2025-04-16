import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: [
    'src/*.ts',
  ],
  clean: true,
  format: ['cjs', 'esm'],
  dts: true,
  bundleDts: true,
  sourcemap: true,
})
