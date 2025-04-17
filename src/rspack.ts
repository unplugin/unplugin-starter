import type { UnpluginInstance } from 'unplugin'
import type { Options } from './types'
import { createRspackPlugin } from 'unplugin'
import { unpluginFactory } from '.'

export default createRspackPlugin(unpluginFactory) as UnpluginInstance<Options>['rspack']
