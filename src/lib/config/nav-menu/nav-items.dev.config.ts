import type { NavItemConfig } from "./nav-item-config.model";

export const navItemsConfigDev: NavItemConfig = {
    about: {
        label: "About",
        children: [
            {
                label: "About Topcoder",
                url: "https://uninav.topcoder.com/customer"
            }
        ],
    },
    aboutUs: {
        label: "About Us",
        description: "",
        url: "https://uninav.topcoder.com/about-us"
    },
    announcements: {
        label: 'Announcements',
        description: 'Important announcements to the Topcoder community.',
        url: 'https://www.topcoder.com/community/programs-and-events', // Need Dev
    },
    articles: {
        label: 'Articles',
        icon: "articles",
        description: "Get inspired",
        url: 'https://www.topcoder.com/thrive', // Need Dev
    },
    benefits: {
        label: 'Benefits',
        description: 'Benefits members receive at Topcoder.',
        url: 'https://uninav.topcoder.com/talent/benefits',
    },
    bfsi: {
        label: 'BFSI',
        description: 'BFSI solutions, how Topcoder excels, including case studies.',
        url: 'https://uninav.topcoder.com/customer/bfsi',
    },
    bookADemo: {
        label: 'Book a demo',
        description: 'See a demo of how Topcoder can best provide for your business.',
        type: 'cta',
        url: 'https://uninav.topcoder.com/customer/demo',
    },
    careerGrowth: {
        label: 'Career Growth',
        description: 'Topcoder\'s profile captures your proven skills increasing employment opportunities.',
        url: 'https://uninav.topcoder.com/talent/career-growth',
    },
    careers: {
        label: "Careers",
        children: [
            {
                label: "Work at Topcoder",
                url: "https://uninav.topcoder.com/jobs"
            }
        ]
    },
    challenges: {
        label: 'Challenges',
        description: 'Compete with others to solve challenges and earn money.',
        url: 'https://www.topcoder.com/community/practice', // Need Dev
    },
    challengesApp: {
        label: "Challenges",
        url: "https://www.topcoder-dev.com/challenges?tracks%5BDS%5D=true&tracks%5BDes%5D=true&tracks%5BDev%5D=true&tracks%5BQA%5D=true&types%5B%5D=CH&types%5B%5D=F2F&types%5B%5D=TSK",
        icon: "challenges",
        description: "Compete and earn money",
    },
    challengeModel: {
        label: "Challenge Model",
        url: "https://uninav.topcoder-dev.com/customer/challenge-model",
        description: "What makes our challenge model a success",
    },
    communications: {
        label: 'Communications',
        description: 'Communications solutions, how Topcoder excels, including case studies.',
        url: 'https://uninav.topcoder.com/customer/communications',
    },
    compete: {
        label: 'Compete',
        description: 'Competitive programming for fun and to grow your skills & ranking at Topcoder.',
        url: 'https://uninav.topcoder.com/talent/compete',
    },
    connect: {
        label: 'Connect',
        description: 'Connect with others at Topcoder.',
        url: 'https://uninav.topcoder.com/talent/connect',
    },
    customer: {
        label: 'Customer',
        description: 'Learn how Topcoder can help your business get work done.',
        url: 'https://uninav.topcoder.com/customer',
    },
    customerFaq: {
      label: 'FAQ',
      description: '',
      url: 'https://uninav.topcoder.com/customer/faq'
    },
    dataAdvisory: {
        label: 'Data Advisory',
        description: 'Submit work to get advice on how to use data science to improve your business.',
        url: 'https://uninav.topcoder.com/data-science/data-advisory',
    },
    dataExploration: {
        label: 'Data Exploration',
        description: 'Submit work to gain insights from your data.',
        url: 'https://uninav.topcoder.com/data-science/data-exploration',
    },
    dataScience: {
        label: 'Data Science',
        description: 'See how Topcoder has delivered Data Science solutions.',
        url: 'https://uninav.topcoder.com/customer/data-science',
    },
    demo: {
        label: 'Book a demo',
        url: "http://go.topcoder.com/lets-talk/?interest=A%20Demo%20of%20Topcoder", // Need Dev
        type: "cta"
    },
    design: {
        label: 'Design',
        description: 'See how Topcoder has delivered Design solutions.',
        url: 'https://uninav.topcoder.com/customer/website-design',
    },
    development: {
        label: 'Development',
        description: 'See how Topcoder has delivered Development solutions.',
        url: 'https://uninav.topcoder.com/customer/development',
    },
    devCenter: {
        label: "Dev Center",
        icon: "dev-center",
        url: "http://platform-ui.topcoder-dev.com/dev-center",
        description: "Get help for Topcoder tools"
    },
    discord: {
        label: 'Discord',
        description: 'Chat with others in the community.',
        url: 'https://uninav.topcoder.com/talent/discord',
    },
    discordApp: {
        label: "Discord",
        url: "http://discord.com/invite/topcoder", // Need Dev
        icon: "discord",
        description: "Chat live with members"
    },
    earn: {
        label: 'Earn',
        description: 'How to earn money at Topcoder.',
        url: 'https://uninav.topcoder.com/talent/earn',
    },
    energyUtilities: {
        label: 'Energy / Utilities',
        description: 'Energy / utilities solutions, how Topcoder excels, including case studies.',
        url: 'https://uninav.topcoder.com/customer/energy-utilities',
    },
    events: {
        label: 'Events',
        description: 'Upcoming Topcoder events.',
        url: 'https://www.topcoder.com/community/events', // Need Dev
    },
    expertise: {
        label: 'Expertise',
        description: 'The areas in which Topcoder delivers successful solutions.',
        url: 'https://uninav.topcoder.com/customer/expertise',
    },
    findMeData: {
        label: 'Find Me Data',
        description: 'Submit work to find data sources that can help your business.',
        url: 'https://uninav.topcoder.com/customer/find-me-data',
    },
    faq: {
        label: "FAQ",
        url: "https://www.topcoder.com/thrive/tracks?track=Topcoder&tax=FAQ&ref=navb", // Need Dev
    },
    forums: {
        label: "Forums",
        url: "https://vanilla.topcoder-dev.com",
        icon: "forums",
        description: "Discuss challenges or questions"
    },
    fullService: {
        label: 'Full Service',
        description: 'Work with Topcoder experts to craft the exact solution you need.',
        url: 'https://uninav.topcoder.com/customer/full-service',
    },
    gettingPaid: {
        label: "Getting Paid",
        url: "https://www.topcoder.com/thrive/tracks?track=Topcoder&tax=Getting%20Paid", // Need Dev
    },
    gigs: {
        label: 'Gigs',
        description: 'Work directly with customers via time-based contracts.',
        url: 'https://www.topcoder.com/community/gig-resources', // Need Dev
    },
    gigsApp: {
        label: "Gigs",
        url: "https://www.topcoder.com/gigs", // Need Dev
        icon: "gigs",
        description: "Find freelance gigs"
    },
    healthCare: {
        label: 'Health care',
        description: 'International (non-US) healthcare.',
        url: 'https://www.topcoder.com/community/safetywing', // Need Dev
    },
    healthPharma: {
        label: 'Health / Pharma',
        description: 'Health / pharma solutions, how Topcoder excels, including case studies.',
        url: 'https://uninav.topcoder.com/customer/health-pharma',
    },
    industries: {
        label: 'Industries',
        description: 'The industries in which Topcoder delivers successful solutions.',
        url: 'https://uninav.topcoder.com/customer/industries',
    },
    learn: {
        label: 'Learn',
        description: 'Learning opportunities provided to Topcoder\'s members.',
        url: 'https://uninav.topcoder.com/talent/topcoder-academy',
    },
    marathonMatches: {
        label: 'Marathon Matches',
        description: 'Competitions that span days or weeks.',
        url: 'https://uninav.topcoder.com/talent/marathon-matches',
    },
    marathonMatchesApp: {
        label: "Marathon Matches",
        url: "https://www.topcoder-dev.com/challenges?search=marathon%20match&tracks%5BDS%5D=true&tracks%5BDes%5D=true&tracks%5BDev%5D=true&tracks%5BQA%5D=true&types%5B%5D=CH&types%5B%5D=F2F&types%5B%5D=TSK",
        icon: "mm",
        description: "Solve hard algorithm problems"
    },
    media: {
        label: "Media",
        children: [
            {
                label: "Blog",
                url: "https://uninav.topcoder.com/blog"
            },
            {
                label: "Newsletter",
                url: "http://go.topcoder.com/newsletter", // Need Dev
            },
            {
                label: "Press Room",
                url: "https://www.topcoder.com/resources" // Need Dev
            },
            {
                label: "Videos",
                url: "https://www.topcoder.com/videos" // Need Dev
            },
            {
                label: "Whitepapers",
                url: "https://uninav.topcoder.com/white-papers"
            },
            {
                label: "Releases",
                url: "https://uninav.topcoder.com/releases"
            }
        ]
    },
    partners: {
        label: 'Partners',
        description: 'Companies Topcoder partners with to deliver high quality solutions.',
        url: 'https://uninav.topcoder.com/customer/partners',
    },
    payments: {
        label: "Payments",
        url: "http://community.topcoder-dev.com/PactsMemberServlet?module=PaymentHistory",
        icon: "payments",
        description: "Get paid"
    },
    practice: {
        label: "Practice",
        icon: "practice",
        url: "https://www.topcoder.com/challenges?search=practice&tracks%5BDS%5D=true&tracks%5BDes%5D=true&tracks%5BDev%5D=true&tracks%5BQA%5D=true&types%5B%5D=CH&types%5B%5D=F2F&types%5B%5D=TSK", // Need Dev
        description: "Learn to compete"
    },
    privacyPolicy: {
        label: "Privacy Policy",
        url: "https://www.topcoder.com/policy" // Need Dev
    },
    products: {
        label: 'Products',
        description: 'How you will engage with the products Topcoder offers.',
        url: 'https://uninav.topcoder.com',
    },
    publicSector: {
        label: 'Public Sector',
        description: 'Public sector solutions, how Topcoder excels, including case studies.',
        url: 'https://uninav.topcoder.com/customer/public-sector',
    },
    qa: {
        label: 'QA',
        description: 'See how Topcoder has delivered QA solutions.',
        url: 'https://uninav.topcoder.com/customer/qa',
    },
    rapidDevMatches: {
        label: 'Rapid Dev Matches',
        description: 'Quick competitions you can complete in less than one day.',
        url: 'https://uninav.topcoder.com/talent/rapid-dev-matches',
    },
    rapidDevMatchesApp: {
        label: "Rapid Dev Matches",
        url: "https://www.topcoder-dev.com/challenges?bucket=openForRegistration&search=Rapid%20Development%20Match&tracks%5BDS%5D=true&tracks%5BDes%5D=true&tracks%5BDev%5D=true&tracks%5BQA%5D=true", // Need Dev
        icon: "rdm",
        description: "Join fast, fun competitions"
    },
    retail: {
        label: 'Retail',
        description: 'Retail solutions, how Topcoder excels, including case studies.',
        url: 'https://uninav.topcoder.com/customer/retail',
    },
    review: {
        label: "Review",
        url: "http://software.topcoder-dev.com",
        icon: "review",
        description: "Review submissions"
    },
    security: {
        label: 'Security',
        description: 'How your IP is protected at Topcoder.',
        url: 'https://uninav.topcoder.com/customer/security',
    },
    selfService: {
        label: 'Self Service',
        description: 'Submit work directly to Topcoder and get results without having to talk to anyone.',
        url: 'https://uninav.topcoder.com/customer/self-service',
    },
    selfServiceApp: {
        label: "Self Service Challenges",
        url: "http://platform-ui.topcoder-dev.com/work",
        icon: "self-service",
        description: "Launch and manage work",
    },
    singleRoundMatches: {
        label: 'Single Round Matches',
        description: 'Multi-problem algorithmic competitions where you go head-to-head in an arena.',
        url: 'https://uninav.topcoder.com/talent/single-round-matches',
    },
    singleRoundMatchesApp: {
        label: "SRMs (Arena)",
        url: "https://www.topcoder.com/community/arena?ref=nav", // Need Dev
        icon: "srm",
        description: "Start competitive programming",
    },
    statistics: {
        label: "Statistics",
        url: "https://www.topcoder.com/community/statistics?tracks[All-pills]=0&tracks[General]=0", // Need Dev
    },
    successStories: {
        label: 'Success Stories',
        description: 'Browse case studies for solutions Topcoder has successfully delivered.',
        url: 'https://uninav.topcoder.com/customer/success-stories',
    },
    support: {
        action: "uninav:modals:support",
        label: 'Support',
        url: "mailto:support@topcoder.com"
    },
    talent: {
        authenticatedUrl: 'https://www.topcoder.com/home',
        label: 'Talent',
        description: 'Learn how you can learn, earn, and connect with others in the Topcoder community.',
        url: 'https://uninav.topcoder.com/talent',
    },
    talkToAnExpert: {
        label: 'Talk to an expert',
        description: 'Speak with a Topcoder expert to get started.',
        type: 'cta',
        url: 'https://go.topcoder.com/lets-talk', // Need Dev
    },
    talkToSales: {
        label: 'Talk to Sales',
        description: 'Speak with a Topcoder expert to get started.',
        type: 'cta',
        url: 'https://uninav.topcoder.com/customer/talk-to-an-expert', // Need Dev
    },
    technology: {
        label: 'Technology',
        description: 'Technology solutions, how Topcoder excels, including case studies.',
        url: 'https://uninav.topcoder.com/customer/technology',
    },
    theCommunity: {
        label: 'The Community',
        description: 'How the Topcoder community provides value to your business.',
        url: 'https://uninav.topcoder.com/customer/the-community',
    },
    timeline: {
        label: 'Timeline',
        description: 'An interactive timeline wall showing Topcoder\'s history.',
        url: 'https://www.topcoder.com/community/timeline', // This page doesn't exist
    },
    topcoderAcademy: {
        label: 'Topcoder Academy',
        description: 'Take courses, earn certificates, and grow your proven skillset to earn at Topcoder.',
        url: 'https://uninav.topcoder.com/talent/topcoder-academy',
    },
    topcoderAcademyApp: {
        label: "Topcoder Academy",
        url: "http://platform-ui.topcoder-dev.com/learn",
        icon: "tcacademy",
        description: "Learn new skills"
    },
    topcoderOpen: {
        label: 'Topcoder Open',
        description: 'The ultimate competitive tournament - the big event!',
        url: 'https://www.topcoder.com/community/member-programs/topcoder-open', // Need Dev
    },
    topCrowd: {
        description: 'Register your own employees in Topcoder to maximize productivity.',
        icon: 'topcrowd',
        label: 'TopCrowd',
        url: 'https://uninav.topcoder.com/customer/topcrowd',
    },
    websiteDesign: {
        label: 'Website Design',
        description: 'Work directly with the Topcoder community to design your website.',
        url: 'https://uninav.topcoder.com/customer/design',
    },
    whyTopcoder: {
        label: 'Why Topcoder',
        description: 'How Topcoder provides hiqh quality, secure solutions.',
        url: 'https://uninav.topcoder.com/customer/why-topcoder',
    }
}
