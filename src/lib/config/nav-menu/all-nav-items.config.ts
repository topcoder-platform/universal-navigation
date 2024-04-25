import { getWordpressUrl } from "../../utils/paths";
import type { NavMenuItem } from "../../functions/nav-menu-item.model";

import {
    CHALLENGE_HOST,
    COMMUNITY_HOST,
    CONNECT_HOST,
    DEV_CENTER_HOST,
    FORUM_HOST,
    ONLINE_REVIEW_HOST,
    SELF_SERVICE_HOST,
    TALENT_SEARCH_HOST,
    TCACADEMY_HOST,
    THRIVE_HOST,
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

    aboutTopcoder: {
        label: 'About',
        children: [
            {
                label: 'About Topcoder',
                url: getWordpressUrl('/about-us'),
            }
        ],
    },
    announcements: {
        label: 'Announcements',
        description: 'Important announcements to the Topcoder community.',
        url: `${COMMUNITY_HOST}/community/programs-and-events`,
    },
    articles: {
        label: 'Articles',
        icon: 'articles',
        description: 'Get insights and tips about Topcoder',
        url: `${THRIVE_HOST}/thrive`,
    },
    bfsi: {
        label: 'BFSI',
        description: 'BFSI solutions, how Topcoder excels, including case studies.',
        url: getWordpressUrl('/customer/bfsi'),
    },
    bookADemo: {
        label: 'Book a Demo',
        description: 'See a demo of how Topcoder can best provide for your business.',
        type: 'cta',
        url: 'https://join.topcoder.com/book-a-demo',
    },
    careers: {
        label: 'Careers',
        children: [
            {
                label: 'Work at Topcoder',
                url: getWordpressUrl('/jobs'),
            }
        ]
    },
    challenges: {
        label: 'Challenges',
        description: 'Compete with others to solve challenges and earn money.',
        url: `${COMMUNITY_HOST}/community/practice`,
    },
    challengesApp: {
        label: 'Challenges',
        url: `${COMMUNITY_HOST}/challenges?tracks%5BDS%5D=true&tracks%5BDes%5D=true&tracks%5BDev%5D=true&tracks%5BQA%5D=true&types%5B%5D=CH&types%5B%5D=F2F&types%5B%5D=TSK`,
        icon: 'challenges',
        description: 'Compete and earn money',
    },
    challengeModel: {
        label: 'Challenge Model',
        url: getWordpressUrl('/customer/challenge-model'),
        description: 'Topcoder’s Transformative Approach to Problem Solving.',
    },
    communications: {
        label: 'Communications',
        description: 'Communications solutions, how Topcoder excels, including case studies.',
        url: getWordpressUrl('/customer/communications'),
    },
    compete: {
        label: 'Compete',
        description: 'Competitive programming for fun and to grow your skills & ranking at Topcoder.',
        url: getWordpressUrl('/talent/compete'),
    },
    connect: {
        label: 'Connect',
        description: 'Connect with others at Topcoder.',
        url: getWordpressUrl('/talent/connect'),
    },
    customer: {
        label: 'Customer',
        description: 'Learn how Topcoder can help your business get work done.',
        url: getWordpressUrl('/customer'),
    },
    customerFaq: {
        label: 'FAQ',
        url: getWordpressUrl('/customer/faq'),
    },
    dataAdvisory: {
        label: 'Data Advisory',
        description: 'Submit work to get advice on how to use data science to improve your business.',
        url: getWordpressUrl('/customer/data-advisory'),
    },
    dataExploration: {
        label: 'Data Exploration',
        description: 'Submit work to gain insights from your data.',
        url: getWordpressUrl('/customer/data-exploration'),
    },
    dataScience: {
        label: 'Data Science',
        description: 'See how Topcoder has delivered Data Science solutions.',
        url: getWordpressUrl('/customer/data-science'),
    },
    design: {
        label: 'Design',
        description: 'See how Topcoder has delivered Design solutions.',
        url: getWordpressUrl('/customer/design'),
    },
    development: {
        label: 'Development',
        description: 'See how Topcoder has delivered Development solutions.',
        url: getWordpressUrl('/customer/development'),
    },
    devCenter: {
        label: 'Dev Center',
        icon: 'dev-center',
        url: DEV_CENTER_HOST,
        description: 'Get help for Topcoder tools',
    },
    discord: {
        label: 'Discord',
        description: 'Chat with others in the community.',
        url: getWordpressUrl('/talent/discord'),
    },
    discordApp: {
        label: 'Discord',
        url: 'https://discord.com/invite/topcoder',
        icon: 'discord',
        description: 'Chat live with members',
    },
    earn: {
        label: 'Earn',
        description: 'Get Started with Challenges.',
        url: getWordpressUrl('/talent/earn'),
    },
    energyUtilities: {
        label: 'Energy / Utilities',
        description: 'Energy / utilities solutions, how Topcoder excels, including case studies.',
        url: getWordpressUrl('/customer/energy-utilities'),
    },
    events: {
        label: 'Events',
        description: 'Upcoming Topcoder events.',
        url: `${COMMUNITY_HOST}/community/events`,
    },
    expertise: {
        label: 'Expertise',
        description: 'The areas in which Topcoder delivers successful solutions.',
        url: getWordpressUrl('/customer/expertise'),
    },
    findMeData: {
        label: 'Find Me Data',
        description: 'Submit work to find data sources that can help your business.',
        url: getWordpressUrl('/customer/find-me-data'),
    },
    faq: {
        label: 'FAQ',
        url: `${THRIVE_HOST}/thrive/tracks?track=Topcoder&tax=FAQ&ref=navb`,
    },
    forums: {
        label: 'Forums',
        url: FORUM_HOST,
        icon: 'forums',
        description: 'Discuss challenges or questions',
    },
    assistedWork: {
      label: 'Assisted Work',
      description: 'Fully assisted work, at any scale, from start to finish.',
      url: getWordpressUrl('/customer/full-service'),
  },
    gettingPaid: {
        label: 'Getting Paid',
        url: `${THRIVE_HOST}/thrive/tracks?track=Topcoder&tax=Getting%20Paid`,
    },
    gigs: {
        label: 'Gigs',
        description: 'Work directly with customers via time-based contracts.',
        url: `${COMMUNITY_HOST}/community/gig-resources`,
    },
    gigsApp: {
        label: 'Gigs',
        url: 'https://www.topcoder.com/gigs',
        icon: 'gigs',
        description: 'Find freelance gigs',
    },
    healthPharma: {
        label: 'Health / Pharma',
        description: 'Health / pharma solutions, how Topcoder excels, including case studies.',
        url: getWordpressUrl('/customer/health-pharma'),
    },
    home: {
        label: 'Home',
        url: getWordpressUrl(''),
    },
    industries: {
        label: 'Industries',
        description: 'The industries in which Topcoder delivers successful solutions.',
        url: getWordpressUrl('/customer/industries'),
    },
    browseInnovationChallenges: {
      label: 'Innovation Challenges',
      description: 'Targeted Challenges aimed at elevating pivotal technology skills.',
      url: `${COMMUNITY_HOST}/challenges?bucket=openForRegistration&isInnovationChallenge=true`,
    },
    innovationChallenges: {
      label: 'Innovation Challenges',
      description: 'Large-scale challenge series focused on AI innovation.',
      url: getWordpressUrl('/innovation-challenges'),
    },
    learn: {
        label: 'Learn',
        description: 'Learning opportunities provided to Topcoder\'s members.',
        url: getWordpressUrl('/talent/learn'),
    },
    experienceChallenges: {
        label: 'Experience Challenges',
        description: 'Build experience, boost skills, and earn bragging rights with these exciting challenges.',
        url: getWordpressUrl('/talent/experience-challenges'),
    },
    marathonMatches: {
        label: 'Marathon Matches',
        description: 'Competitions that span days or weeks.',
        url: getWordpressUrl('/talent/marathon-matches'),
    },
    marathonMatchesApp: {
        label: 'Marathon Matches',
        url: `${CHALLENGE_HOST}/challenges?search=marathon%20match&tracks%5BDS%5D=true&tracks%5BDes%5D=true&tracks%5BDev%5D=true&tracks%5BQA%5D=true&types%5B%5D=CH&types%5B%5D=F2F&types%5B%5D=TSK`,
        icon: 'mm',
        description: 'Solve hard algorithm problems',
    },
    media: {
        label: 'Media',
        children: [
            {
                label: 'Blog',
                url: getWordpressUrl('/blog'),
            },
            {
                label: 'Newsletter',
                url: 'https://join.topcoder.com/newsletter',
                target: '_blank',
            },
            {
                label: 'Press Room',
                url: getWordpressUrl('/resources'),
            },
            {
                label: 'Videos',
                url: getWordpressUrl('/videos'),
            },
            {
                label: 'Whitepapers',
                url: getWordpressUrl('/white-papers'),
            },
            {
                label: 'Releases',
                url: getWordpressUrl('/releases'),
            },
            {
                label: 'Changelog',
                url: getWordpressUrl('/changelog'),
            },
        ]
    },
    partners: {
        label: 'Partners',
        description: 'Companies Topcoder partners with to deliver high quality solutions.',
        url: getWordpressUrl('/customer/partners'),
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
    privacyPolicy: {
        label: 'Privacy Policy',
        url: 'https://www.topcoder.com/policy'
    },
    publicSector: {
        label: 'Public Sector',
        description: 'Public sector solutions, how Topcoder excels, including case studies.',
        url: getWordpressUrl('/customer/public-sector'),
    },
    qa: {
        label: 'QA',
        description: 'See how Topcoder has delivered QA solutions.',
        url: getWordpressUrl('/customer/qa'),
    },
    rapidDevMatches: {
        label: 'Rapid Development Matches',
        description: 'Quick competitions you can complete in less than one day.',
        url: getWordpressUrl('/talent/rapid-dev-matches'),
    },
    rapidDevMatchesApp: {
        label: 'Rapid Dev Matches',
        url: `${CHALLENGE_HOST}/challenges?bucket=openForRegistration&search=Rapid%20Development%20Match&tracks%5BDS%5D=true&tracks%5BDes%5D=true&tracks%5BDev%5D=true&tracks%5BQA%5D=true`,
        icon: 'rdm',
        description: 'Join fast, fun competitions',
    },
    retail: {
        label: 'Retail',
        description: 'Retail solutions, how Topcoder excels, including case studies.',
        url: getWordpressUrl('/customer/retail'),
    },
    review: {
        label: 'Review',
        url: ONLINE_REVIEW_HOST,
        icon: 'review',
        description: 'Review submissions',
    },
    security: {
        label: 'Security',
        description: 'How your IP is protected at Topcoder.',
        url: getWordpressUrl('/customer/security'),
    },
    webApp: {
      label: 'Topcoder Web App',
      description: 'Define work with AI. Launch to our Talent Network. Choose solutions.',
      url: getWordpressUrl('/customer/product'),
    },
    selfServiceApp: {
        label: 'Self Service Challenges',
        url: SELF_SERVICE_HOST,
        icon: 'self-service',
        description: 'Launch and manage work',
    },
    singleRoundMatches: {
        label: 'Single Round Matches',
        description: 'Multi-problem algorithmic competitions where you go head-to-head in an arena.',
        url: getWordpressUrl('/talent/single-round-matches'),
    },
    singleRoundMatchesApp: {
        label: 'SRMs (Arena)',
        url: 'https://www.topcoder.com/community/arena?ref=nav',
        icon: 'srm',
        description: 'Start competitive programming',
    },
    statistics: {
        label: 'Statistics',
        url: `${COMMUNITY_HOST}/community/statistics?tracks[All-pills]=0&tracks[General]=0`,
    },
    successStories: {
        label: 'Customer Stories',
        description: 'Browse case studies for solutions Topcoder has successfully delivered.',
        url: getWordpressUrl('/customer/success-stories'),
    },
    support: {
        action: 'uninav:modals:support',
        label: 'Support',
        url: 'mailto:support@topcoder.com',
    },
    reportABug: {
        action: 'uninav:modals:bug',
        label: 'Report a Bug',
        url: 'mailto:support@topcoder.com',
    },
    talent: {
        authenticatedUrl: getWordpressUrl('/home'),
        label: 'Talent',
        description: 'Learn how you can learn, earn, and connect with others in the Topcoder community.',
        url: getWordpressUrl('/talent'),
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
    technology: {
        label: 'Technology',
        description: 'Technology solutions, how Topcoder excels, including case studies.',
        url: getWordpressUrl('/customer/technology'),
    },
    theCommunity: {
        label: 'Talent Network',
        description: 'How the Topcoder community provides value to your business.',
        url: getWordpressUrl('/customer/the-community'),
    },
    timeline: {
        label: 'Timeline',
        description: 'An interactive timeline wall showing Topcoder\'s history.',
        url: `${COMMUNITY_HOST}/community/timeline-wall`,
    },
    topcoderAcademy: {
        label: 'Topcoder Academy',
        description: 'Take courses, earn certificates, and grow your proven skillset to earn at Topcoder.',
        url: getWordpressUrl('/talent/learn'),
    },
    topcoderAcademyApp: {
        label: 'Topcoder Academy',
        url: TCACADEMY_HOST,
        icon: 'tcacademy',
        description: 'Learn new skills',
    },
    topcoderOpen: {
      label: 'Topcoder Open',
      description: 'The ultimate competitive tournament - the big event!',
      url: `${COMMUNITY_HOST}/community/member-programs/topcoder-open`,
    },
    topCrowdApp: {
        description: 'Engage and reward your workforce',
        icon: 'topcrowd',
        label: 'Topcoder Platform',
        url: 'https://topcrowd.net',
    },
    websiteDesign: {
        label: 'Website Design',
        description: 'Work directly with the Topcoder community to design your website.',
        url: getWordpressUrl('/customer/website-design'),
    },
    whyTopcoder: {
        label: 'Why Topcoder',
        description: 'How Topcoder provides hiqh quality, secure solutions.',
        url: getWordpressUrl('/customer/why-topcoder'),
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
    imagePolicy: {
      label: 'Image Policy',
      url: 'http://join.topcoder.com/image-policy',
    }
}
