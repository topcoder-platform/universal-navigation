import type { NavMenuItem } from "../../functions/nav-menu-item.model";

import { allNavItems } from "./all-nav-items.config";

export const footerNavItems: NavMenuItem = {
    children: [
        allNavItems.aboutTopcoder,
        {
            ...allNavItems.expertise,
            children: [
                { ...allNavItems.innovationChallenges, label: 'AI' },
                allNavItems.dataScience,
                allNavItems.design,
                allNavItems.development,
                allNavItems.qa,
            ]
        },
        {
            ...allNavItems.product,
            children: [
                {
                ...allNavItems.product,
                  label: 'Topcoder Platform',
                },
                allNavItems.jiraApp,
                allNavItems.innovationChallenges,
                allNavItems.whyTopcoder,
                allNavItems.challengeModel,
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
                allNavItems.statistics,
                allNavItems.gettingPaid,
                allNavItems.gigs,
                allNavItems.topcoderOpen,
                allNavItems.faq,
            ]
        },
        {
            label: "Contact",
            children: [
                {
                  ...allNavItems.talkToAnExpert,
                  label: 'Talk to Sales',
                },
                allNavItems.bookADemo,
                allNavItems.support,
                allNavItems.reportABug,
            ]
        },
        {
            label: "Legal",
            children: [
                allNavItems.privacyPolicy,
                allNavItems.imagePolicy,
            ]
        }
    ]
}
