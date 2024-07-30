import type { NavMenuItem } from "../../functions/nav-menu-item.model";

import { allNavItems } from "./all-nav-items.config";

export const mainNavigationItems: NavMenuItem[] = [
  {
    ...allNavItems.product,
    children: [
      allNavItems.bugHunt,
      allNavItems.platform,
    ],
  },
  allNavItems.pricing,
  allNavItems.demo,
  allNavItems.talent,
]
