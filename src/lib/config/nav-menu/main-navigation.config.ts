import type { NavMenuItem } from "../../functions/nav-menu-item.model";

import { allNavItems } from "./all-nav-items.config";

export const mainNavigationItems: NavMenuItem[] = [
  {
    ...allNavItems.product,
    children: [
      allNavItems.webApp,
      allNavItems.jiraApp,
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
  // {
  //   ...allNavItems.talent,
  //   children: [
  //     allNavItems.talentTheCommunity,
  //     {
  //       ...allNavItems.learn,
  //       children: [
  //         allNavItems.topcoderAcademyApp,
  //         {
  //           ...allNavItems.articles,
  //           url: `${allNavItems.articles.url}?navTool=marketing`
  //         },
  //       ]
  //     },
  //     {
  //       ...allNavItems.earn,
  //       children: [
  //         allNavItems.challenges,
  //       ]
  //     },
  //     {
  //       ...allNavItems.compete,
  //       children: [
  //         { ...allNavItems.challengesApp, label: 'All Challenges' },
  //         allNavItems.browseInnovationChallenges,
  //         allNavItems.experienceChallenges,
  //       ]
  //     },
  //     {
  //       ...allNavItems.connect,
  //       children: [
  //         allNavItems.events,
  //         allNavItems.discord,
  //       ]
  //     },
  //   ]
  // }
]
