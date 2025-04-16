import type { Options } from './types'
import { createRspackPlugin } from 'unplugin'
import { unpluginFactory } from '.'

export default createRspackPlugin(unpluginFactory) as ReturnType<typeof createRspackPlugin<Options | undefined>>
