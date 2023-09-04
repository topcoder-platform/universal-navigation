import type { NavMenuItem } from "../../functions/nav-menu-item.model";

import { allNavItems } from "./all-nav-items.config";
import { mainNavigationItems } from "./main-navigation.config";

export const toolNavItems: NavMenuItem = {
    children: [
      ...mainNavigationItems,
    ],
}

export const toolCtaNavItems: NavMenuItem[] = [
  allNavItems.talkToAnExpert,
  allNavItems.bookADemo,
]
