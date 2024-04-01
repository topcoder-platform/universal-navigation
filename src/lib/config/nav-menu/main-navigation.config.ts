import type { NavMenuItem } from "../../functions/nav-menu-item.model";

import { allNavItems } from "./all-nav-items.config";

export const mainNavigationItems: NavMenuItem[] = [
  {
    ...allNavItems.product,
    children: [
      allNavItems.webApp,
      allNavItems.innovationChallenges,
      {
        ...allNavItems.whyTopcoder,
        children: [
          allNavItems.theCommunity,
          allNavItems.challengeModel,
          {
            ...allNavItems.expertise,
            children: [
              allNavItems.dataScience,
              allNavItems.design,
              allNavItems.development,
              allNavItems.qa,
            ]
          },
          {
            ...allNavItems.industries,
            children: [
              allNavItems.bfsi,
              allNavItems.communications,
              allNavItems.energyUtilities,
              allNavItems.healthPharma,
              allNavItems.publicSector,
              allNavItems.retail,
              allNavItems.technology,
            ]
          },
          allNavItems.successStories,
        ]
      },
      allNavItems.talkToAnExpert,
      allNavItems.bookADemo,
    ]
  },
]
