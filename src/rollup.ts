import type { Options } from './types'
import { createRollupPlugin } from 'unplugin'
import { unpluginFactory } from '.'

export default createRollupPlugin(unpluginFactory) as ReturnType<typeof createRollupPlugin<Options | undefined>>
