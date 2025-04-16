import type { Options } from './types'
import { createFarmPlugin } from 'unplugin'
import { unpluginFactory } from '.'

export default createFarmPlugin(unpluginFactory) as ReturnType<typeof createFarmPlugin<Options | undefined>>
