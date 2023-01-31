import { navItems } from "./nav-items.config";

export const footerNavItems = {
    children: [
        navItems.aboutTopcoder,
        {
            ...navItems.expertise,
            children: [
                navItems.dataScience,
                navItems.design,
                navItems.development,
                navItems.qa,
            ]
        },
        {
            ...navItems.customer,
            children: [
                navItems.whyTopcoder,
                navItems.challengeModel,
                navItems.fullService,
                navItems.selfService,
                navItems.topCrowd,
                navItems.successStories,
                navItems.partners,
                navItems.security,
                navItems.customerFaq,
            ]
        },
        {
            ...navItems.industries,
            children: [
                navItems.bfsi,
                navItems.communications,
                navItems.energyUtilities,
                navItems.healthPharma,
                navItems.publicSector,
                navItems.retail,
                navItems.technology,
            ]
        },
        navItems.media,
        {
            ...navItems.talent,
            children: [
                navItems.learn,
                navItems.earn,
                navItems.compete,
                navItems.connect,
                navItems.benefits,
                navItems.statistics,
                navItems.gettingPaid,
                navItems.faq,
            ]
        },
        {
            label: "Contact",
            children: [
                navItems.talkToSales,
                navItems.bookADemo,
                navItems.support,
            ]
        },
        // navItems.careers,
        {
            label: "Legal",
            children: [
                navItems.privacyPolicy
            ]
        }
    ]
}
