import type { NavItemConfig } from './nav-item-config.model'
import { navItemsConfigDev } from './nav-items.dev.config'
import { navItemsConfigProd } from './nav-items.prod.config'

export const navItems: NavItemConfig = APP_IS_PROD ? navItemsConfigProd : navItemsConfigDev
