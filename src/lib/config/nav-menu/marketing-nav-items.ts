import type { NavMenuItem } from "../../functions/nav-menu-item.model";

import { allNavItems } from "./all-nav-items.config";
import { mainNavigationItems } from "./main-navigation.config";

export const marketingNavItems: NavMenuItem = {
    children: [
        ...mainNavigationItems,
    ]
}

export const marketingRightItems: NavMenuItem[] = [
  allNavItems.login,
]
