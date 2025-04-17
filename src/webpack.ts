import type { UnpluginInstance } from 'unplugin'
import type { Options } from './types'
import { createWebpackPlugin } from 'unplugin'
import { unpluginFactory } from '.'

export default createWebpackPlugin(unpluginFactory) as UnpluginInstance<Options | undefined>['webpack']
