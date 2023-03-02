import type { NavMenuItem } from "../../functions/nav-menu-item.model";

import { allNavItems } from "./all-nav-items.config"

export const toolSelectorNavItems: NavMenuItem = {
  children: [
    {
      label: "Customer",
      children: [
        {
          children: [
            allNavItems.topCrowdApp,
            allNavItems.selfServiceApp,
          ]
        },
        {
          children: [
            allNavItems.talkToAnExpert,
            allNavItems.demo,
          ]
        }
      ]
    },
    {
      label: "Talent",
      children: [
        {
          label: "Learn",
          groupOrder: 1,
          children: [
            allNavItems.topcoderAcademyApp,
            allNavItems.devCenter,
            allNavItems.practice,
          ]
        },
        {
          label: "Compete",
          groupOrder: 3,
          children: [
            allNavItems.marathonMatchesApp,
            allNavItems.rapidDevMatchesApp,
            allNavItems.singleRoundMatchesApp,
          ]
        },
        {
          label: "Earn",
          groupOrder: 2,
          children: [
            allNavItems.challengesApp,
            allNavItems.gigsApp,
            allNavItems.review,
            allNavItems.payments
          ]
        },
        {
          label: "Connect",
          groupOrder: 4,
          children: [
            allNavItems.forums,
            {
              ...allNavItems.articles,
              url: `${allNavItems.articles.url}?navTool=tool`
            },
            allNavItems.discordApp,
          ]
        }
      ]
    }
  ]
}
