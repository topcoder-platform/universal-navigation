import { getMarketingUrl } from "../../utils/paths";
import type { NavMenuItem } from "../../functions/nav-menu-item.model";

import {
    CHALLENGE_HOST,
    COMMUNITY_HOST,
    CONNECT_HOST,
    COPILOT_PORTAL_HOST,
    ONLINE_REVIEW_HOST,
    TALENT_SEARCH_HOST,
    TCACADEMY_HOST,
    PLATFORM_APP_HOST,
    WALLETAPP_HOST,
    WORK_MANAGER_HOST,
    AUTH0_AUTHENTICATOR_URL,
} from '..';

export const allNavItems: {[key: string]: NavMenuItem} = {
    login: {
      label: 'Login',
      url: `${AUTH0_AUTHENTICATOR_URL}?retUrl=${encodeURIComponent(getMarketingUrl('/home'))}`
    },
    freelancer: {
      label: 'I\'m a Freelancer',
      marketingPathname: '/freelancer',
      url: getMarketingUrl('/freelancer'),
    },
    community: {
      label: 'Community',
    },
    solutions: {
      label: 'Solutions',
    },
    resources: {
      label: 'Resources',
    },
    opportunities: {
      label: 'Opportunities',
      url: `${CHALLENGE_HOST}/challenges`,
    },
    mmTournament: {
      label: 'Marathon Match Tournament',
      icon: 'mm-tournament',
      description: 'Join the Excitement',
      marketingPathname: '/marathon-match-tournament',
      url: getMarketingUrl('/marathon-match-tournament'),
    },
    aiHub: {
      label: 'AI Hub',
      icon: 'ai-hub',
      description: 'Collaborate, Compete, Create',
      marketingPathname: '/ai-hub',
      url: getMarketingUrl('/ai-hub'),
    },
    copilotPortal: {
      label: 'Copilot Portal',
      // Icon will be changed later once the actual icon is 
      // is provided by design team
      icon: 'connect',
      url: COPILOT_PORTAL_HOST,
    },
    howItWorks: {
      label: 'How it works',
      marketingPathname: '/how-it-works',
      url: getMarketingUrl('/how-it-works'),
    },
    statistics: {
      label: 'Statistics',
      url: `${COMMUNITY_HOST}/community/statistics`,
    },
    demo: {
      label: 'Demo',
      marketingPathname: '/customer/demo',
      url: getMarketingUrl('/customer/demo'),
    },
    product: {
      label: 'Product',
      marketingPathname: '/customer/product',
      url: getMarketingUrl('/customer/product'),
    },
    support: {
      label: 'Support',
      url: 'https://help.topcoder.com/hc/en-us/requests/new',
    },

    ai360Platform: {
      label: 'Wipro’s Lab45 AI Platform',
      url: `${PLATFORM_APP_HOST}/talent-routes/ai-chat`,
      description: 'FREE access',
      icon: 'ai-chat',
    },

    articles: {
        label: 'Articles',
        icon: 'articles',
        description: 'Get insights and tips about Topcoder',
        url: `${COMMUNITY_HOST}/thrive`,
    },
    bookADemo: {
        label: 'Book a Demo',
        description: 'See a demo of how Topcoder can best provide for your business.',
        type: 'cta',
        url: 'https://join.topcoder.com/lets-chat',
    },
    challengesApp: {
        label: 'Opportunities',
        url: `${COMMUNITY_HOST}/challenges?tracks%5BDS%5D=true&tracks%5BDes%5D=true&tracks%5BDev%5D=true&tracks%5BQA%5D=true&types%5B%5D=CH&types%5B%5D=F2F&types%5B%5D=TSK`,
        icon: 'challenges',
        description: 'Compete and earn money',
    },
    discordApp: {
        label: 'Discord',
        url: 'https://discord.com/invite/topcoder',
        icon: 'discord',
        description: 'Chat live with members',
    },
    home: {
        label: 'Home',
        marketingPathname: '/',
        url: getMarketingUrl('/'),
    },
    marathonMatchesApp: {
        label: 'Marathon Matches',
        url: `${CHALLENGE_HOST}/challenges?search=marathon%20match&tracks%5BDS%5D=true&tracks%5BDes%5D=true&tracks%5BDev%5D=true&tracks%5BQA%5D=true&types%5B%5D=CH&types%5B%5D=F2F&types%5B%5D=TSK`,
        icon: 'mm',
        description: 'Solve hard algorithm problems',
    },
    payments: {
        label: 'Wallet',
        url: WALLETAPP_HOST,
        icon: 'payments',
        description: 'Get paid',
    },
    practice: {
        label: 'Practice',
        icon: 'practice',
        url: `${CHALLENGE_HOST}/challenges?search=practice&tracks%5BDS%5D=true&tracks%5BDes%5D=true&tracks%5BDev%5D=true&tracks%5BQA%5D=true&types%5B%5D=CH&types%5B%5D=F2F&types%5B%5D=TSK`,
        description: 'Learn to compete',
    },
    review: {
        label: 'Review',
        url: ONLINE_REVIEW_HOST,
        icon: 'review',
        description: 'Review submissions',
    },
    communityHome: {
        label: 'Community Home',
        description: 'Recent challenges and news.',
        icon: 'topcrowd',
        url: `${COMMUNITY_HOST}/home`,
    },
    talentSearchApp: {
        label: 'Meet our Talent',
        icon: 'talent-search',
        description: 'Find skilled talent for your next project',
        url: TALENT_SEARCH_HOST,
    },
    talkToAnExpert: {
        label: 'Talk to an Expert',
        description: 'Speak with a Topcoder expert to get started.',
        type: 'cta',
        url: 'https://join.topcoder.com/lets-chat',
    },
    topcoderAcademyApp: {
        label: 'Topcoder Academy',
        url: TCACADEMY_HOST,
        icon: 'tcacademy',
        description: 'Learn new skills',
    },
    workManager: {
        label: 'Work Manager',
        icon: 'work-manager',
        description: 'Work Manager App',
        url: `${WORK_MANAGER_HOST}`,
    },
    staffConnect: {
        label: 'Connect',
        icon: 'connect',
        description: 'Connect App',
        url: `${CONNECT_HOST}`,
    },
    bugHunt: {
        label: 'Bug Hunt',
        marketingPathname: '/customer/product/bughunt',
        url: getMarketingUrl('/customer/product/bughunt'),
    },
    platform: {
        label: 'Platform',
        marketingPathname: '/customer/product',
        url: getMarketingUrl('/customer/product'),
    },
    innovationChallenges: {
      label: 'Innovation Challenges',
      marketingPathname: '/innovation-challenges',
      url: getMarketingUrl('/innovation-challenges'),
    },
    tcSolutions: {
      label: 'Topcoder Solutions',
      marketingPathname: '/customer-stories/topcoder-offering',
      url: getMarketingUrl('/customer-stories/topcoder-offering'),
    },
    projectLifecycle: {
      label: 'Project Lifecycle',
      marketingPathname: '/customer-stories/project-lifecycle',
      url: getMarketingUrl('/customer-stories/project-lifecycle'),
    },
    customerStories: {
      label: 'Customer Stories',
      marketingPathname: '/customer-stories',
      url: getMarketingUrl('/customer-stories'),
    },
    talent: {
      label: 'The Talent',
      marketingPathname: '/talent',
      url: getMarketingUrl('/talent'),
    },
}
