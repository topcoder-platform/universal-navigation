import { getWordpressUrl } from "lib/utils/paths";
import type { NavMenuItem } from "../../functions/nav-menu-item.model";

import { allNavItems } from "./all-nav-items.config";

export const footerNavItems: NavMenuItem = {
    children: [
        {
            label: 'Info',
            children: [
              {
                label: 'Customer Stories',
                url: getWordpressUrl('/customer/success-stories'),
              },
              {
                label: 'Blog',
                url: getWordpressUrl('/blog'),
              },
              {
                label: 'Release Notes',
                url: getWordpressUrl('/releasenotes'),
              },
              {
                label: 'Privacy Policy',
                url: getWordpressUrl('/policy'),
              },
              {
                label: 'Terms & Conditions',
                url: getWordpressUrl('/terms-conditions'),
              },
            ]
        },
        {
            label: 'Solutions',
            children: [
              {
                label: 'Product',
                url: getWordpressUrl('/customer/product'),
              },
              {
                label: 'Innovation Challenges',
                url: getWordpressUrl('/innovation-challenges'),
              },
              {
                label: 'Expertise',
                url: getWordpressUrl('/ai'),
              },
              allNavItems.talent,
            ]
        },
        {
            label: 'Contact Us',
            children: [
              allNavItems.talkToAnExpert,
              allNavItems.bookADemo,
            ]
        },
    ]
}
