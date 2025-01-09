import { getWordpressUrl } from "lib/utils/paths";
import type { NavMenuItem } from "../../functions/nav-menu-item.model";

import { allNavItems } from "./all-nav-items.config";

export const footerNavItems: NavMenuItem = {
    children: [
        {
            label: 'For Clients',
            children: [
              {
                label: 'How it Works',
                url: getWordpressUrl('/how-it-works'),
              },
              {
                label: 'The Talent',
                url: getWordpressUrl('/talent'),
              },
              {
                label: 'Customer Stories',
                url: getWordpressUrl('/customer-stories'),
              },
            ]
        },
        {
            label: 'For Freelancers',
            children: [
              {
                label: 'I\'m a Freelancer',
                url: getWordpressUrl('/freelancer'),
              },
            ]
        },
        {
            label: 'Resources',
            children: [
              allNavItems.support,
              {
                label: 'Terms and Conditions',
                url: getWordpressUrl('/community/how-it-works/terms')
              },
              {
                label: 'Privacy Policy',
                url: getWordpressUrl('/privacy')
              },
            ]
        },
    ]
}
