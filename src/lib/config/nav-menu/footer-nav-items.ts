import type { NavMenuItem } from "../../functions/nav-menu-item.model";

import { allNavItems } from "./all-nav-items.config";

export const footerNavItems: NavMenuItem = {
    children: [
        allNavItems.aboutTopcoder,
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
            ...allNavItems.customer,
            children: [
                allNavItems.whyTopcoder,
                allNavItems.challengeModel,
                allNavItems.fullService,
                allNavItems.selfService,
                allNavItems.topCrowd,
                allNavItems.successStories,
                allNavItems.partners,
                allNavItems.security,
                allNavItems.customerFaq,
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
        allNavItems.media,
        {
            ...allNavItems.talent,
            children: [
                allNavItems.learn,
                allNavItems.earn,
                allNavItems.compete,
                allNavItems.connect,
                allNavItems.benefits,
                allNavItems.statistics,
                allNavItems.gettingPaid,
                allNavItems.faq,
            ]
        },
        {
            label: "Contact",
            children: [
                allNavItems.talkToSales,
                allNavItems.bookADemo,
                allNavItems.support,
                allNavItems.reportABug,
            ]
        },
        allNavItems.careers,
        {
            label: "Legal",
            children: [
                allNavItems.privacyPolicy,
            ]
        }
    ]
}
