import { getMarketingUrl } from "lib/utils/paths";
import type { NavMenuItem } from "../../functions/nav-menu-item.model";

import { allNavItems } from "./all-nav-items.config";

export const footerNavItems: NavMenuItem = {
    children: [
        {
            label: 'For Clients',
            children: [
              {
                label: 'How it Works',
                url: getMarketingUrl('/how-it-works'),
              },
              {
                label: 'The Talent',
                url: getMarketingUrl('/talent'),
              },
              {
                label: 'Customer Stories',
                url: getMarketingUrl('/customer-stories'),
              },
            ]
        },
        {
            label: 'For Freelancers',
            children: [
              {
                label: 'I\'m a Freelancer',
                url: getMarketingUrl('/freelancer'),
              },
              allNavItems.opportunities,
              allNavItems.mmTournament,
              allNavItems.aiHub,
              allNavItems.blog,
              allNavItems.articles,
              allNavItems.statistics,
            ]
        },
        {
            label: 'Resources',
            children: [
              allNavItems.support,
              {
                label: 'Terms and Conditions',
                url: getMarketingUrl('/community/how-it-works/terms')
              },
              {
                label: 'Privacy Policy',
                url: getMarketingUrl('/privacy')
              },
            ]
        },
    ]
}
