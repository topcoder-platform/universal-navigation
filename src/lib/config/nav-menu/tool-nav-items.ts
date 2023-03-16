import type { NavMenuItem } from "../../functions/nav-menu-item.model";

import { mainNavigationItems } from "./main-navigation.config";

export const toolNavItems: NavMenuItem = {
    children: [
      ...mainNavigationItems,
    ],
}
