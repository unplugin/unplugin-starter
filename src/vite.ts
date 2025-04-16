import type { Options } from './types'
import { createVitePlugin } from 'unplugin'
import { unpluginFactory } from '.'

export default createVitePlugin(unpluginFactory) as ReturnType<typeof createVitePlugin<Options | undefined>>
