import type { UnpluginInstance } from 'unplugin'
import type { Options } from './types'
import { createFarmPlugin } from 'unplugin'
import { unpluginFactory } from '.'

export default createFarmPlugin(unpluginFactory) as UnpluginInstance<Options>['farm']
