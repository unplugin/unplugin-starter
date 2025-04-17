import type { UnpluginInstance } from 'unplugin'
import type { Options } from './types'
import { createEsbuildPlugin } from 'unplugin'
import { unpluginFactory } from '.'

export default createEsbuildPlugin(unpluginFactory) as UnpluginInstance<Options>['esbuild']
