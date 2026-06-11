import type { NavMenuItem } from "../../functions/nav-menu-item.model";

import { allNavItems } from "./all-nav-items.config";

export const mainNavigationItems: NavMenuItem[] = [
  allNavItems.howItWorks,
  {
    ...allNavItems.solutions,
    children: [
      allNavItems.tcSolutions,
      allNavItems.projectLifecycle,
      allNavItems.customerStories,
      allNavItems.talent,
    ],
  },
  allNavItems.opportunities,
  {
    ...allNavItems.community,
    children: [
      allNavItems.freelancer,
      allNavItems.mmTournament,
      allNavItems.aiHub,
      allNavItems.statistics,
      allNavItems.discordApp,
    ]
  },
  {
    ...allNavItems.resources,
    children: [
      allNavItems.blog,
      allNavItems.articles,
    ],
  },
]
