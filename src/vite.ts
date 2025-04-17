import type { UnpluginInstance } from 'unplugin'
import type { Options } from './types'
import { createVitePlugin } from 'unplugin'
import { unpluginFactory } from '.'

export default createVitePlugin(unpluginFactory) as UnpluginInstance<Options>['vite']
