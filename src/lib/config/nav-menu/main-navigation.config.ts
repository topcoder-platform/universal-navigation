import type { NavMenuItem } from "../../functions/nav-menu-item.model";

import { allNavItems } from "./all-nav-items.config";

export const mainNavigationItems: NavMenuItem[] = [
  allNavItems.howItWorks,
  allNavItems.talent,
  allNavItems.customerStories,
  allNavItems.freelancer,
  {
    ...allNavItems.community,
    children: [
      allNavItems.opportunities,
      allNavItems.mmTournament,
      // allNavItems.aiHub,
      allNavItems.articles,
      allNavItems.statistics,
    ]
  },
]
