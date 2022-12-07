import * as navItems from "./menu-item";

export const footerNavItems = {
  children: [
    {
      label: "About",
      children: [
        {
          label: "About Topcoder",
          path: "/business"
        }
      ]
    },
    {
      ...navItems.expertiseMenuItem,
      children: [
        navItems.dataScienceMenuItem,
        navItems.designMenuItem,
        navItems.developmentMenuItem,
        navItems.qaMenuItem,
      ]
    },
    {
      ...navItems.businessMenuItem,
      children: [
        navItems.whyTopcoderMenuItem,
        navItems.productsMenuItem,
        navItems.successStoriesMenuItem,
        navItems.securityMenuItem,
        {
          label: "FAQ",
          path: "/faqs",
          fullPath: "/faqs"
        }
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
    {
      label: "Media",
      children: [
        {
          label: "Blog",
          path: "/blog"
        },
        {
          label: "Newsletter",
          path: "/newsletter",
          host: "http://go.topcoder.com"
        },
        {
          label: "Press Room",
          path: "/resources"
        },
        {
          label: "Videos",
          path: "/videos"
        },
        {
          label: "Whitepapers",
          path: "/ebooks-white-papers"
        },
        {
          label: "Releases",
          path: "/releases"
        }
      ]
    },
    {
      ...navItems.communityMenuItem,
      children: [
        navItems.learnMenuItem,
        navItems.earnMenuItem,
        navItems.competeMenuItem,
        navItems.connectMenuItem,
        navItems.benefitsMenuItem,
        {
          label: "Statistics",
          path: "/community/statistics"
        },
        {
          label: "Getting Paid",
          path: "/thrive/tracks?track=Topcoder&tax=Getting%20Paid",
        },
        {
          label: "FAQ",
          path: "/thrive/tracks?track=Topcoder&tax=FAQ&ref=navb",
        }
      ]
    },
    {
      label: "Contact",
      children: [
        navItems.talkToAnExpertMenuItem,
        navItems.bookADemoMenuItem,
        navItems.supportMenuItem,
      ]
    },
    {
      label: "Careers",
      children: [
        {
          label: "Work at Topcoder",
          path: "/work-at-topcoder"
        }
      ]
    },
    {
      label: "Legal",
      children: [
        {
          label: "Privacy Policy",
          path: "/policy"
        }
      ]
    }
  ]
}
