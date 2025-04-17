import type { UnpluginInstance } from 'unplugin'
import type { Options } from './types'
import { createRollupPlugin } from 'unplugin'
import { unpluginFactory } from '.'

export default createRollupPlugin(unpluginFactory) as UnpluginInstance<Options>['rollup']
