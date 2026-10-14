import type { NavMenuItem } from "../../functions/nav-menu-item.model";
import { STAFF_ROUTE_GUARD, TALENT_ROUTE_GUARD } from "../auth"

import { allNavItems } from "./all-nav-items.config"

/**
 * App drawer (tool selector) menu.
 *
 * Structure: section (role guarded) -> columns -> groups -> nav items.
 * Each section renders its columns side by side on desktop and stacked on mobile,
 * so the groups listed in a column are displayed top to bottom in that column.
 */
export const toolSelectorNavItems: NavMenuItem = {
  children: [
    {
      label: "Talent",
      children: [
        {
          children: [
            {
              label: "Earn",
              children: [
                allNavItems.challengesApp,
                allNavItems.engagementsApp,
                allNavItems.copilotPortal,
                allNavItems.review,
                allNavItems.payments,
              ]
            },
            {
              label: "Compete",
              children: [
                allNavItems.marathonMatchesApp,
                allNavItems.mmTournament,
              ]
            },
          ]
        },
        {
          children: [
            {
              label: "AI",
              children: [
                allNavItems.aiHub,
              ]
            },
            {
              label: "Learn",
              children: [
                allNavItems.topcoderAcademyApp,
                {
                  ...allNavItems.articles,
                  url: `${allNavItems.articles.url}?navTool=tool`
                },
                allNavItems.archive,
              ]
            },
            {
              label: "Connect",
              children: [
                allNavItems.publicForums,
                allNavItems.discordApp,
              ]
            },
          ]
        },
      ],
      ...TALENT_ROUTE_GUARD,
    },
    {
      label: "Staff",
      children: [
        {
          children: [
            {
              label: "Delivery & Payments",
              children: [
                allNavItems.workApp,
                allNavItems.walletAdmin,
              ]
            },
            {
              label: "Sales & Customers",
              children: [
                allNavItems.customerPortal,
                allNavItems.salesforce,
                allNavItems.salesPipeline,
                allNavItems.procurement,
              ]
            },
            {
              label: "Insights",
              children: [
                allNavItems.analytics,
                allNavItems.reports,
              ]
            },
          ]
        },
        {
          children: [
            {
              label: "Community & Content",
              children: [
                allNavItems.supportApp,
                allNavItems.payloadCms,
                allNavItems.massEmail,
                allNavItems.campus,
              ]
            },
            {
              label: "Team & Platform",
              children: [
                allNavItems.leaveTracker,
                allNavItems.systemAdmin,
              ]
            },
          ]
        },
      ],
      ...STAFF_ROUTE_GUARD,
    },
  ]
}
