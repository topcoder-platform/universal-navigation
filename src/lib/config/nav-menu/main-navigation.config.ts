import type { NavMenuItem } from "../../functions/nav-menu-item.model";

import { allNavItems } from "./all-nav-items.config";

export const mainNavigationItems: NavMenuItem[] = [
  {
    ...allNavItems.customer,
    children: [
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
          allNavItems.partners,
          allNavItems.security,
          allNavItems.successStories,
        ]
      },
      allNavItems.fullService,
      {
        ...allNavItems.selfService,
        children: [
          allNavItems.dataAdvisory,
          allNavItems.findMeData,
          allNavItems.dataExploration,
          allNavItems.websiteDesign,
        ]
      },
      allNavItems.topCrowd,
      allNavItems.talkToAnExpert,
      allNavItems.bookADemo,
    ]
  },
  {
    ...allNavItems.talent,
    children: [
      allNavItems.talentTheCommunity,
      {
        ...allNavItems.learn,
        children: [
          allNavItems.topcoderAcademyApp,
          {
            ...allNavItems.articles,
            url: `${allNavItems.articles.url}?navTool=marketing`
          },
        ]
      },
      {
        ...allNavItems.earn,
        children: [
          allNavItems.challenges,
          allNavItems.gigs,
        ]
      },
      {
        ...allNavItems.compete,
        children: [
          allNavItems.marathonMatches,
          allNavItems.rapidDevMatches,
          allNavItems.singleRoundMatches,
        ]
      },
      {
        ...allNavItems.connect,
        children: [
          allNavItems.announcements,
          allNavItems.events,
          allNavItems.topcoderOpen,
          allNavItems.discord,
          allNavItems.timeline,
        ]
      },
      {
        ...allNavItems.benefits,
        children: [
          allNavItems.healthcare,
          allNavItems.careerGrowth,
        ]
      }
    ]
  }
]
