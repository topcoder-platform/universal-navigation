import { navItems } from "./nav-items.config";

export const marketingNavItems = {
    children: [
        {
            ...navItems.customer,
            children: [
                {
                    ...navItems.whyTopcoder,
                    children: [
                        navItems.theCommunity,
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
                        navItems.partners,
                        navItems.security,
                        navItems.successStories,
                    ]
                },
                navItems.fullService,
                {
                    ...navItems.selfService,
                    children: [
                        navItems.dataAdvisory,
                        navItems.findMeData,
                        navItems.dataExploration,
                        navItems.websiteDesign,
                    ]
                },
                navItems.topCrowd,
                navItems.talkToAnExpert,
                navItems.bookADemo,
            ]
        },
        {
            ...navItems.talent,
            children: [
                {
                    ...navItems.learn,
                    children: [
                        navItems.topcoderAcademy,
                        navItems.articles,
                    ]
                },
                {
                    ...navItems.earn,
                    children: [
                        navItems.challenges,
                        navItems.gigs,
                    ]
                },
                {
                    ...navItems.compete,
                    children: [
                        navItems.marathonMatches,
                        navItems.rapidDevMatches,
                        navItems.singleRoundMatches,
                    ]
                },
                {
                    ...navItems.connect,
                    children: [
                        navItems.announcements,
                        navItems.events,
                        navItems.topcoderOpen,
                        navItems.discord,
                        navItems.timeline,
                    ]
                },
                {
                    ...navItems.benefits,
                    children: [
                        navItems.healthCare,
                        navItems.careerGrowth,
                    ]
                }
            ]
        }
    ]
}
