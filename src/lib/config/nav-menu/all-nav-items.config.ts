import { getWordpressUrl } from "../../utils/paths";
import type { NavMenuItem } from "../../functions/nav-menu-item.model";

import {
    CHALLENGE_HOST,
    COMMUNITY_HOST,
    CONNECT_HOST,
    ONLINE_REVIEW_HOST,
    SELF_SERVICE_HOST,
    TALENT_SEARCH_HOST,
    TCACADEMY_HOST,
    THRIVE_HOST,
    PLATFORM_APP_HOST,
    WALLETAPP_HOST,
    WORK_MANAGER_HOST,
} from '..';

export const allNavItems: {[key: string]: NavMenuItem} = {
    demo: {
      label: 'Demo',
      url: getWordpressUrl('/customer/demo'),
    },
    pricing: {
      label: 'Pricing',
      url: getWordpressUrl('/pricing'),
    },
    product: {
      label: 'Product',
      url: getWordpressUrl('/customer/product'),
    },
    talent: {
      label: 'Talent',
      url: getWordpressUrl('/about-talent'),
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
        url: `${THRIVE_HOST}/thrive`,
    },
    bookADemo: {
        label: 'Book a Demo',
        description: 'See a demo of how Topcoder can best provide for your business.',
        type: 'cta',
        url: 'https://join.topcoder.com/book-a-demo',
    },
    challengesApp: {
        label: 'Challenges',
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
        url: getWordpressUrl(''),
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
    selfServiceApp: {
        label: 'Self Service Challenges',
        url: SELF_SERVICE_HOST,
        icon: 'self-service',
        description: 'Launch and manage work',
    },
    singleRoundMatchesApp: {
        label: 'SRMs (Arena)',
        url: 'https://www.topcoder.com/community/arena?ref=nav',
        icon: 'srm',
        description: 'Start competitive programming',
    },
    communityHome: {
        label: 'Community Home',
        description: 'Recent challenges and news.',
        icon: 'topcrowd',
        url: getWordpressUrl('/home'),
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
        url: 'https://join.topcoder.com/lets-talk',
    },
    topcoderAcademyApp: {
        label: 'Topcoder Academy',
        url: TCACADEMY_HOST,
        icon: 'tcacademy',
        description: 'Learn new skills',
    },
    topCrowdApp: {
        description: 'Engage and reward your workforce',
        icon: 'topcrowd',
        label: 'Topcoder Platform',
        url: 'https://app.topcoder.com',
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
}
