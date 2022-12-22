import { navItems } from "./nav-items.config";

export const footerNavItems = {
    children: [
        navItems.about,
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
                navItems.products,
                navItems.successStories,
                navItems.security,
                navItems.faq,
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
                navItems.communityFaq,
            ]
        },
        {
            label: "Contact",
            children: [
                navItems.talkToAnExpert,
                navItems.bookADemo,
                navItems.support,
            ]
        },
        navItems.careers,
        {
            label: "Legal",
            children: [
                navItems.privacyPolicy
            ]
        }
    ]
}
