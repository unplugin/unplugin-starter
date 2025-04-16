import type { Options } from './types'
import { createWebpackPlugin } from 'unplugin'
import { unpluginFactory } from '.'

export default createWebpackPlugin(unpluginFactory) as ReturnType<typeof createWebpackPlugin<Options | undefined>>
