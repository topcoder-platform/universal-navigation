import {
  CONNECT_HOST,
  ONBOARDING_HOST,
  PROFILE_HOST,
  TALENT_SEARCH_HOST,
  WORK_MANAGER_HOST,
} from "lib/config/hosts";

export const NUDGES_DISABLED_HOSTS = [
  CONNECT_HOST,
  ONBOARDING_HOST,
  PROFILE_HOST,
  TALENT_SEARCH_HOST,
  WORK_MANAGER_HOST,
];

export interface ToastType {
  theme: 'bio' | 'education' | 'gigAvailability' | 'profilePicture' | 'skills' | 'verified' | 'workHistory'
  icon: string
  cover?: string
  type: 'animated' | 'static'
  title: string
  message: string
  ctaText: string
  ctaLink: (userhandle: string) => string
}

export const toastsMeta: {
  [key: string]: ToastType
} = {
  bio: {
    theme: 'bio',
    icon: 'bio',
    type: 'static',
    title: 'What makes you, you?',
    message: 'Share a little something about you. AI can help.',
    ctaText: 'Add Bio',
    ctaLink: (userhandle: string) => `${PROFILE_HOST}/${userhandle}?edit-mode=aboutMe`,
  },
  education: {
    theme: 'education',
    icon: 'education',
    cover: 'education.png',
    type: 'animated',
    title: 'Cool for school!',
    message: 'All that hard work, and so much to show.',
    ctaText: 'Add Education',
    ctaLink: (userhandle: string) => `${PROFILE_HOST}/${userhandle}?edit-mode=education`,
  },
  gigAvailability: {
    theme: 'gigAvailability',
    icon: 'gig-availability',
    cover: 'gig-availability.png',
    type: 'animated',
    title: 'Looking for work?',
    message: 'Set your availability so we can find you a sweet gig.',
    ctaText: 'Set Availability',
    ctaLink: (userhandle: string) => `${PROFILE_HOST}/${userhandle}?edit-mode=openForWork`,
  },
  profilePicture: {
    theme: 'profilePicture',
    icon: 'profile-picture',
    cover: 'profile-picture.png',
    type: 'animated',
    title: 'What\'s your vibe?',
    message: 'Represent your style with a headshot.',
    ctaText: 'Add Profile Pic',
    ctaLink: (userhandle: string) => `${PROFILE_HOST}/${userhandle}?edit-mode=photo`,
  },
  skills: {
    theme: 'skills',
    icon: 'skills',
    cover: 'skills.png',
    type: 'animated',
    title: 'Know your stuff?',
    message: 'Share your skills and get more eyes on your profile.',
    ctaText: 'Add Skills',
    ctaLink: (userhandle: string) => `${PROFILE_HOST}/${userhandle}?edit-mode=skills`,
  },
  verified: {
    theme: 'verified',
    icon: 'verified',
    cover: 'verified.png',
    type: 'animated',
    title: 'Are you real?',
    message: 'Prove you are not a robot by verifying a few details.',
    ctaText: 'Verify Me',
    ctaLink: (userhandle: string) => `${PROFILE_HOST}/${userhandle}?edit-mode=verified`,
  },
  workHistory: {
    theme: 'workHistory',
    icon: 'work-history',
    cover: 'work-history.png',
    type: 'animated',
    title: 'Experience says it all!',
    message: 'Show off all your hard work and amazing gigs.',
    ctaText: 'Add Experience',
    ctaLink: (userhandle: string) => `${PROFILE_HOST}/${userhandle}?edit-mode=workExperience`,
  },
}
