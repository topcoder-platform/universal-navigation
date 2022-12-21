import * as navItems from "./nav-items";

export const marketingNavItems = {
    children: [{
        ...navItems.businessMenuItem,
        children: [{
            ...navItems.whyTopcoderMenuItem,
            children: [
                navItems.theCommunityMenuItem,
                {
                    ...navItems.expertiseMenuItem,
                    children: [
                        navItems.dataScienceMenuItem,
                        navItems.designMenuItem,
                        navItems.developmentMenuItem,
                        navItems.qaMenuItem
                    ]
                },
                {
                    ...navItems.industriesMenuItem,
                    children: [
                        navItems.bfsiMenuItem,
                        navItems.communicationsMenuItem,
                        navItems.energyUtilitiesMenuItem,
                        navItems.healthPharmaMenuItem,
                        navItems.publicSectorMenuItem,
                        navItems.retailMenuItem,
                        navItems.technologyMenuItem,
                    ]
                },
                navItems.partnersMenuItem,
                navItems.securityMenuItem,
                navItems.successStoriesMenuItem,
            ]
        },
        {
            ...navItems.productsMenuItem,
            children: [
                navItems.fullServiceMenuItem,
                navItems.topcrowdMenuItem,
                {
                    ...navItems.selfServiceChallengesMenuItem,
                    children: [
                        navItems.dataAdvisoryMenuItem,
                        navItems.findMeDataMenuItem,
                        navItems.dataExplorationMenuItem,
                        navItems.websiteDesignMenuItem,
                    ]
                }
            ]
        },
        navItems.talkToAnExpertMenuItem,
        navItems.bookADemoMenuItem,
        ]
    },
    {
        ...navItems.communityMenuItem,
        children: [{
            ...navItems.learnMenuItem,
            children: [
                navItems.topcoderAcademyMenuItem,
                navItems.articlesMenuItem
            ]
        },
        {
            ...navItems.earnMenuItem,
            children: [
                navItems.challengesMenuItem,
                navItems.gigsMenuItem
            ]
        },
        {
            ...navItems.competeMenuItem,
            children: [
                navItems.marathonMatchesMenuItem,
                navItems.rapidDevMatchesMenuItem,
                navItems.singleRoundMatchesMenuItem
            ]
        },
        {
            ...navItems.connectMenuItem,
            children: [
                navItems.announcementsMenuItem,
                navItems.eventsMenuItem,
                navItems.topcoderOpenMenuItem,
                navItems.discordMenuItem,
                navItems.timelineMenuItem,
            ]
        },
        {
            ...navItems.benefitsMenuItem,
            children: [
                navItems.healthCareMenuItem,
                navItems.careerGrowthMenuItem,
            ]
        }
        ]
    }
    ]
}
