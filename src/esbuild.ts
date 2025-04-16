import type { Options } from './types'
import { createEsbuildPlugin } from 'unplugin'
import { unpluginFactory } from '.'

export default createEsbuildPlugin(unpluginFactory) as ReturnType<typeof createEsbuildPlugin<Options | undefined>>
