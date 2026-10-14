import { getMarketingUrl } from "../../utils/paths";
import type { NavMenuItem } from "../../functions/nav-menu-item.model";

import {
    CHALLENGE_HOST,
    COMMUNITY_HOST,
    COPILOT_PORTAL_HOST,
    REVIEW_APP_HOST,
    TCACADEMY_HOST,
    PLATFORM_APP_HOST,
    WALLETAPP_HOST,
    AUTH0_AUTHENTICATOR_URL,
    ENGAGEMENT_PORTAL_HOST,
    ARCHIVE_HOST,
    FORUMS_HOST,
    WORK_APP_HOST,
    WALLET_ADMIN_HOST,
    CUSTOMER_PORTAL_HOST,
    SALES_HOST,
    PROCUREMENT_HOST,
    ANALYTICS_HOST,
    REPORTS_HOST,
    SUPPORT_HOST,
    PAYLOAD_CMS_HOST,
    CONTACT_HOST,
    CAMPUS_HOST,
    CALENDAR_HOST,
    SYSTEM_ADMIN_HOST,
    SALESFORCE_URL,
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
      url: getMarketingUrl('/opportunities'),
    },
    mmTournament: {
      label: 'Marathon Match Tournament',
      icon: 'mm-tournament',
      description: 'Compete for the MM championship',
      marketingPathname: '/marathon-match-tournament',
      url: getMarketingUrl('/marathon-match-tournament'),
    },
    aiHub: {
      label: 'AI Hub',
      icon: 'ai-hub',
      description: 'Build and compete with AI',
      marketingPathname: '/ai-hub',
      url: getMarketingUrl('/ai-hub'),
    },
    copilotPortal: {
      label: 'Copilot Portal',
      icon: 'copilot-portal',
      description: 'Copilot opportunities',
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
        description: 'Tutorials and how-tos',
        url: `${COMMUNITY_HOST}/thrive`,
    },
    archive: {
        label: 'Archive',
        icon: 'archive',
        description: 'Past problems & TCO history',
        url: ARCHIVE_HOST,
    },
    blog: {
        label: 'Blog',
        url: getMarketingUrl('/blog'),
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
    engagementsApp: {
        label: 'Engagement Portal',
        url: ENGAGEMENT_PORTAL_HOST,
        icon: 'gigs',
        description: 'Work directly with clients',
    },
    discordApp: {
        label: 'Discord',
        url: 'https://discord.com/invite/topcoder',
        icon: 'discord',
        description: 'Chat live with members',
    },
    publicForums: {
        label: 'Public Forums',
        url: FORUMS_HOST,
        icon: 'forums',
        description: 'Q&A and discussions',
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
    review: {
        label: 'Review App',
        url: REVIEW_APP_HOST,
        icon: 'review',
        description: 'Review submissions',
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
    workApp: {
        label: 'Work App',
        icon: 'work-app',
        description: 'Launch and manage work',
        url: WORK_APP_HOST,
    },
    walletAdmin: {
        label: 'Wallet Admin',
        icon: 'wallet-admin',
        description: 'Manage member payouts',
        url: WALLET_ADMIN_HOST,
    },
    customerPortal: {
        label: 'Customer Portal',
        icon: 'customer-portal',
        description: 'Talent, stats & showcases',
        url: CUSTOMER_PORTAL_HOST,
    },
    salesforce: {
        label: 'Salesforce',
        icon: 'salesforce',
        description: 'Manage accounts & leads',
        url: SALESFORCE_URL,
    },
    salesPipeline: {
        label: 'Sales Pipeline',
        icon: 'sales-pipeline',
        description: 'Track deals by stage',
        url: SALES_HOST,
    },
    procurement: {
        label: 'Procurement',
        icon: 'procurement',
        description: 'Vendors and purchasing',
        url: PROCUREMENT_HOST,
    },
    analytics: {
        label: 'Analytics',
        icon: 'analytics',
        description: 'Platform and member data',
        url: ANALYTICS_HOST,
    },
    reports: {
        label: 'Reports',
        icon: 'reports',
        description: 'Pull data on demand',
        url: REPORTS_HOST,
    },
    supportApp: {
        label: 'Support',
        icon: 'support',
        description: 'Handle member tickets',
        url: SUPPORT_HOST,
    },
    payloadCms: {
        label: 'Payload CMS',
        icon: 'payload-cms',
        description: 'Edit site content',
        url: `${PAYLOAD_CMS_HOST}/admin`,
    },
    massEmail: {
        label: 'Mass Email',
        icon: 'mass-email',
        description: 'Email members at scale',
        url: CONTACT_HOST,
    },
    campus: {
        label: 'Campus',
        icon: 'campus',
        description: 'University programs',
        url: CAMPUS_HOST,
    },
    leaveTracker: {
        label: 'Leave Tracker',
        icon: 'leave-tracker',
        description: 'Plan and track time off',
        url: CALENDAR_HOST,
    },
    systemAdmin: {
        label: 'System Admin',
        icon: 'system-admin',
        description: 'Platform-wide admin tools',
        url: SYSTEM_ADMIN_HOST,
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
