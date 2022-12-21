import type { NavMenuItem } from "lib/functions/nav-menu-item.model";

export const businessMenuItem: Partial<NavMenuItem> = {
  label: 'Customer',
  description: 'Learn how Topcoder can help your business get work done.',
  path: APP_IS_PROD ? '/' : '/',
};

export const whyTopcoderMenuItem: Partial<NavMenuItem> = {
  label: 'Why Topcoder',
  description: 'How Topcoder provides hiqh quality, secure solutions.',
  path: APP_IS_PROD ? '/customer/why-topcoder' : '/customer/why-topcoder',
};

export const theCommunityMenuItem: Partial<NavMenuItem> = {
  label: 'The Community',
  description: 'How the Topcoder community provides value to your business.',
  path: APP_IS_PROD ? '/customer/why-topcoder/the-community' : '/customer/why-topcoder/the-community',
};

export const expertiseMenuItem: Partial<NavMenuItem> = {
  label: 'Expertise',
  description: 'The areas in which Topcoder delivers successful solutions.',
  path: APP_IS_PROD ? '/customer/expertise' : '/customer/expertise',
};

export const dataScienceMenuItem: Partial<NavMenuItem> = {
  label: 'Data Science',
  description: 'See how Topcoder has delivered Data Science solutions.',
  path: APP_IS_PROD ? '/customer/data-science' : '/customer/data-science',
};

export const designMenuItem: Partial<NavMenuItem> = {
  label: 'Design',
  description: 'See how Topcoder has delivered Design solutions.',
  path: APP_IS_PROD ? '/customer/design' : '/customer/design',
};

export const developmentMenuItem: Partial<NavMenuItem> = {
  label: 'Development',
  description: 'See how Topcoder has delivered Development solutions.',
  path: APP_IS_PROD ? '/customer/development' : '/customer/development',
};

export const qaMenuItem: Partial<NavMenuItem> = {
  label: 'QA',
  description: 'See how Topcoder has delivered QA solutions.',
  path: APP_IS_PROD ? '/customer/qa' : '/customer/qa',
};

export const industriesMenuItem: Partial<NavMenuItem> = {
  label: 'Industries',
  description: 'The industries in which Topcoder delivers successful solutions.',
  path: APP_IS_PROD ? '/customer/industries' : '/customer/industries',
};

export const bfsiMenuItem: Partial<NavMenuItem> = {
  label: 'BFSI',
  description: 'BFSI solutions, how Topcoder excels, including case studies.',
  path: APP_IS_PROD ? '/bfsi' : '/bfsi',
};

export const communicationsMenuItem: Partial<NavMenuItem> = {
  label: 'Communications',
  description: 'Communications solutions, how Topcoder excels, including case studies.',
  path: APP_IS_PROD ? '/customer/communications' : '/customer/communications',
};

export const energyUtilitiesMenuItem: Partial<NavMenuItem> = {
  label: 'Energy / Utilities',
  description: 'Energy / utilities solutions, how Topcoder excels, including case studies.',
  path: APP_IS_PROD ? '/customer/energy-utilities' : '/customer/energy-utilities',
};

export const healthPharmaMenuItem: Partial<NavMenuItem> = {
  label: 'Health / Pharma',
  description: 'Health / pharma solutions, how Topcoder excels, including case studies.',
  path: APP_IS_PROD ? '/customer/health-pharma' : '/customer/health-pharma',
};

export const publicSectorMenuItem: Partial<NavMenuItem> = {
  label: 'Public Sector',
  description: 'Public sector solutions, how Topcoder excels, including case studies.',
  path: APP_IS_PROD ? '/customer/public-sector' : '/customer/public-sector',
};

export const retailMenuItem: Partial<NavMenuItem> = {
  label: 'Retail',
  description: 'Retail solutions, how Topcoder excels, including case studies.',
  path: APP_IS_PROD ? '/customer/retail' : '/customer/retail',
};

export const technologyMenuItem: Partial<NavMenuItem> = {
  label: 'Technology',
  description: 'Technology solutions, how Topcoder excels, including case studies.',
  path: APP_IS_PROD ? '/customer/technology' : '/customer/technology',
};

export const partnersMenuItem: Partial<NavMenuItem> = {
  label: 'Partners',
  description: 'Companies Topcoder partners with to deliver high quality solutions.',
  path: APP_IS_PROD ? '/customer/partners' : '/customer/partners',
};

export const securityMenuItem: Partial<NavMenuItem> = {
  label: 'Security',
  description: 'How your IP is protected at Topcoder.',
  path: APP_IS_PROD ? '/customer/security' : '/customer/security',
};

export const successStoriesMenuItem: Partial<NavMenuItem> = {
  label: 'Success Stories',
  description: 'Browse case studies for solutions Topcoder has successfully delivered.',
  path: APP_IS_PROD ? '/customer/success-stories' : '/customer/success-stories',
};

export const productsMenuItem: Partial<NavMenuItem> = {
  label: 'Products',
  description: 'How you will engage with the products Topcoder offers.',
  path: APP_IS_PROD ? '/customer/products' : '/customer/products',
};

export const fullServiceMenuItem: Partial<NavMenuItem> = {
  label: 'Full Service',
  description: 'Work with Topcoder experts to craft the exact solution you need.',
  path: APP_IS_PROD ? '/customer/full-service' : '/customer/full-service',
};

export const topcrowdMenuItem: Partial<NavMenuItem> = {
  label: 'TopCrowd',
  description: 'Register your own employees in Topcoder to maximize productivity.',
  path: APP_IS_PROD ? '/customer/topcrowd' : '/customer/topcrowd',
};

export const selfServiceChallengesMenuItem: Partial<NavMenuItem> = {
  label: 'Self Service Challenges',
  description: 'Submit work directly to Topcoder and get results without having to talk to anyone.',
  path: APP_IS_PROD ? '/customer/self-service-challenges' : '/customer/self-service-challenges',
};

export const dataAdvisoryMenuItem: Partial<NavMenuItem> = {
  label: 'Data Advisory',
  description: 'Submit work to get advice on how to use data science to improve your business.',
  path: APP_IS_PROD ? '/customer/data-advisory' : '/customer/data-advisory',
};

export const findMeDataMenuItem: Partial<NavMenuItem> = {
  label: 'Find Me Data',
  description: 'Submit work to find data sources that can help your business.',
  path: APP_IS_PROD ? '/customer/find-me-data' : '/customer/find-me-data',
};

export const dataExplorationMenuItem: Partial<NavMenuItem> = {
  label: 'Data Exploration',
  description: 'Submit work to gain insights from your data.',
  path: APP_IS_PROD ? '/customer/data-exploration' : '/customer/data-exploration',
};

export const websiteDesignMenuItem: Partial<NavMenuItem> = {
  label: 'Website Design',
  description: 'Work directly with the Topcoder community to design your website.',
  path: APP_IS_PROD ? '/customer/webside-design' : '/customer/webside-design',
};

export const talkToAnExpertMenuItem: Partial<NavMenuItem> = {
  label: 'Talk to an expert',
  description: 'Speak with a Topcoder expert to get started.',
  path: APP_IS_PROD ? '/customer/talks-to-expert' : '/customer/talks-to-expert',
  type: 'cta'
};

export const bookADemoMenuItem: Partial<NavMenuItem> = {
  label: 'Book a demo',
  description: 'See a demo of how Topcoder can best provide for your business.',
  path: APP_IS_PROD ? '/customer/demo' : '/customer/demo',
  type: 'cta'
};

export const communityMenuItem: Partial<NavMenuItem> = {
  label: 'Talent',
  description: 'Learn how you can learn, earn, and connect with others in the Topcoder community.',
  path: APP_IS_PROD ? '/the-community' : '/the-community',
  authenticatedPath: APP_IS_PROD ? '/home' : '/home',
};

export const learnMenuItem: Partial<NavMenuItem> = {
  label: 'Learn',
  description: 'Learning opportunities provided to Topcoder\'s members.',
  path: APP_IS_PROD ? '/talent/learn' : '/talent/learn',
};

export const topcoderAcademyMenuItem: Partial<NavMenuItem> = {
  label: 'Topcoder Academy',
  description: 'Take courses, earn certificates, and grow your proven skillset to earn at Topcoder.',
  path: APP_IS_PROD ? '/talent/topcoder-academy' : '/talent/topcoder-academy',
};

export const articlesMenuItem: Partial<NavMenuItem> = {
  label: 'Articles',
  description: 'Internal articles to help expand your knowledge.',
  path: APP_IS_PROD ? '/talent/learn/thrive' : '/talent/learn/thrive',
};

export const earnMenuItem: Partial<NavMenuItem> = {
  label: 'Earn',
  description: 'How to earn money at Topcoder.',
  path: APP_IS_PROD ? '/talent/earn' : '/talent/earn',
};

export const challengesMenuItem: Partial<NavMenuItem> = {
  label: 'Challenges',
  description: 'Compete with others to solve challenges and earn money.',
  path: APP_IS_PROD ? '/talent/challenges' : '/talent/challenges',
};

export const gigsMenuItem: Partial<NavMenuItem> = {
  label: 'Gigs',
  description: 'Work directly with customers via time-based contracts.',
  path: APP_IS_PROD ? '/talent/gigs' : '/talent/gigs',
};

export const competeMenuItem: Partial<NavMenuItem> = {
  label: 'Compete',
  description: 'Competitive programming for fun and to grow your skills & ranking at Topcoder.',
  path: APP_IS_PROD ? '/talent/compete' : '/talent/compete',
};

export const marathonMatchesMenuItem: Partial<NavMenuItem> = {
  label: 'Marathon Matches',
  description: 'Competitions that span days or weeks.',
  path: APP_IS_PROD ? '/talent/marathon-matches' : '/talent/marathon-matches',
};

export const rapidDevMatchesMenuItem: Partial<NavMenuItem> = {
  label: 'Rapid Dev Matches',
  description: 'Quick competitions you can complete in less than one day.',
  path: APP_IS_PROD ? '/talent/compete/rapid-dev-matches' : '/talent/compete/rapid-dev-matches',
};

export const singleRoundMatchesMenuItem: Partial<NavMenuItem> = {
  label: 'Single Round Matches',
  description: 'Multi-problem algorithmic competitions where you go head-to-head in an arena.',
  path: APP_IS_PROD ? '/talent/compete/single-round-matches' : '/talent/compete/single-round-matches',
};

export const connectMenuItem: Partial<NavMenuItem> = {
  label: 'Connect',
  description: 'Connect with others at Topcoder.',
  path: APP_IS_PROD ? '/talent/connect' : '/talent/connect',
};

export const announcementsMenuItem: Partial<NavMenuItem> = {
  label: 'Announcements',
  description: 'Important announcements to the Topcoder community.',
  path: APP_IS_PROD ? '/talent/announcements' : '/talent/announcements',
};

export const eventsMenuItem: Partial<NavMenuItem> = {
  label: 'Events',
  description: 'Upcoming Topcoder events.',
  path: APP_IS_PROD ? '/talent/events' : '/talent/events',
};

export const topcoderOpenMenuItem: Partial<NavMenuItem> = {
  label: 'Topcoder Open',
  description: 'The utlimate competitive tournament - the big event!',
  path: APP_IS_PROD ? '/talent/topcoder-open' : '/talent/topcoder-open',
};

export const discordMenuItem: Partial<NavMenuItem> = {
  label: 'Discord',
  description: 'Chat with others in the community.',
  path: APP_IS_PROD ? '/talent/discord' : '/talent/discord',
};

export const timelineMenuItem: Partial<NavMenuItem> = {
  label: 'Timeline',
  description: 'An interactive timeline wall showing Topcoder\'s history.',
  path: APP_IS_PROD ? '/talent/timeline' : '/talent/timeline',
};

export const benefitsMenuItem: Partial<NavMenuItem> = {
  label: 'Benefits',
  description: 'Benefits members receive at Topcoder.',
  path: APP_IS_PROD ? '/talent/benefits' : '/talent/benefits',
};

export const healthCareMenuItem: Partial<NavMenuItem> = {
  label: 'Health care',
  description: 'International (non-US) healthcare.',
  path: APP_IS_PROD ? '/talent/health-care' : '/talent/health-care',
};

export const careerGrowthMenuItem: Partial<NavMenuItem> = {
  label: 'Career Growth',
  description: 'Topcoder\'s profile captures your proven skills increasing employment opportunities.',
  path: APP_IS_PROD ? '/talent/career-growth' : '/talent/career-growth',
};

export const supportMenuItem: Partial<NavMenuItem> = {
  label: 'Support',
  action: "uninav:modals:support",
  url: "mailto:support@topcoder.com"
};
