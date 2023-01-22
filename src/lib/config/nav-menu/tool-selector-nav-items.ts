import { navItems } from "./nav-items.config"

export const toolSelectorNavItems = {
    children: [
        {
            label: "Customer",
            children: [
                {
                    children: [
                        navItems.selfServiceApp,
                        // navItems.topcrowd,
                    ]
                },
                {
                    children: [
                        navItems.talkToAnExpert,
                        navItems.demo,
                    ]
                }
            ]
        },
        {
            label: "Talent",
            children: [
                {
                    label: "Learn",
                    groupOrder: 1,
                    children: [
                        navItems.topcoderAcademyApp,
                        navItems.devCenter,
                        navItems.practice,
                    ]
                },
                {
                    label: "Compete",
                    groupOrder: 3,
                    children: [
                        navItems.marathonMatchesApp,
                        navItems.rapidDevMatchesApp,
                        navItems.singleRoundMatchesApp,
                    ]
                },
                {
                    label: "Earn",
                    groupOrder: 2,
                    children: [
                        navItems.challengesApp,
                        navItems.gigsApp,
                        navItems.review,
                        navItems.payments
                    ]
                },
                {
                    label: "Connect",
                    groupOrder: 4,
                    children: [
                        navItems.forums,
                        {
                            ...navItems.articles,
                            url: `${navItems.articles.url}?navTool=tool`
                        },
                        navItems.discordApp,
                    ]
                }
            ]
        }
    ]
}
