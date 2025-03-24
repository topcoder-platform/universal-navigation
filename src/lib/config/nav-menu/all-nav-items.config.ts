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
    AUTH0_AUTHENTICATOR_URL,
} from '..';

export const allNavItems: {[key: string]: NavMenuItem} = {
    login: {
      label: 'Login',
      url: `${AUTH0_AUTHENTICATOR_URL}?retUrl=${encodeURIComponent(getWordpressUrl('/home'))}`
    },
    freelancer: {
      label: 'I\'m a Freelancer',
      url: getWordpressUrl('/freelancer'),
    },
    community: {
      label: 'Community',
    },
    opportunities: {
      label: 'Opportunities',
      url: getWordpressUrl('/challenges'),
    },
    mmTournament: {
      label: 'Marathon Match Tournament',
      icon: 'mm-tournament',
      description: 'Join the Excitement',
      url: getWordpressUrl('/marathon-match-tournament'),
    },
    aiHub: {
      label: 'AI Hub',
      icon: 'ai-hub',
      description: 'Collaborate, Compete, Create',
      url: getWordpressUrl('/ai-hub'),
    },
    howItWorks: {
      label: 'How it works',
      url: getWordpressUrl('/how-it-works'),
    },
    statistics: {
      label: 'Statistics',
      url: getWordpressUrl('/community/statistics'),
    },
    demo: {
      label: 'Demo',
      url: getWordpressUrl('/customer/demo'),
    },
    product: {
      label: 'Product',
      url: getWordpressUrl('/customer/product'),
    },
    customerStories: {
      label: 'Customer Stories',
      url: getWordpressUrl('/customer-stories'),
    },
    talent: {
      label: 'The Talent',
      url: getWordpressUrl('/talent'),
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
        url: getWordpressUrl('/thrive'),
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
        url: getWordpressUrl('/customer/product/bughunt'),
    },
    platform: {
        label: 'Platform',
        url: getWordpressUrl('/customer/product'),
    },
    innovationChallenges: {
      label: 'Innovation Challenges',
      url: getWordpressUrl('/innovation-challenges'),
    }
}
