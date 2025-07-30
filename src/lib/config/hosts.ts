import { getEnvValue } from "./env-vars"

export type HOST_ENV_TYPE = 'dev' | 'prod' | 'qa'

export const HOST_ENV = getEnvValue<HOST_ENV_TYPE>('VITE_APP_HOST_ENV')

export const TC_DOMAIN: string = {
  dev: 'topcoder-dev.com',
  prod: 'topcoder.com',
  qa: 'topcoder-qa.com',
}[HOST_ENV] || 'topcoder.com'


// export const WP_HOST_URL: string = `http://localhost:5173`;
export const MARKETING_HOST_URL: string = `https://www.${TC_DOMAIN}`;
export const CHALLENGE_HOST: string = `https://www.${TC_DOMAIN}`;
export const COMMUNITY_HOST: string = `https://www.${TC_DOMAIN}`;

export const THRIVE_HOST: string = {
  dev: `https://community-app.${TC_DOMAIN}`,
  qa: `https://community-app.${TC_DOMAIN}`,
  prod: `https://www.${TC_DOMAIN}`,
}[HOST_ENV] || `https://www.${TC_DOMAIN}`;

export const APP_AUTH_CONNECTOR: string = `https://accounts-auth0.${TC_DOMAIN}`;
export const ONLINE_REVIEW_HOST: string = `https://software.${TC_DOMAIN}`;
export const TCACADEMY_HOST: string = `https://academy.${TC_DOMAIN}`;
export const SELF_SERVICE_HOST: string = `https://work.${TC_DOMAIN}`;
export const TC_API_V5_HOST: string = `https://api.${TC_DOMAIN}/v5`;
export const CONNECT_HOST: string = `https://connect.${TC_DOMAIN}`;
export const WORK_MANAGER_HOST: string = `https://challenges.${TC_DOMAIN}`;
export const PROFILE_HOST: string = `https://profiles.${TC_DOMAIN}`;
export const ONBOARDING_HOST: string = `https://onboarding.${TC_DOMAIN}`;
export const TALENT_SEARCH_HOST: string = `https://talent-search.${TC_DOMAIN}`;
export const ACCOUNT_SETTINGS_HOST: string = `https://account-settings.${TC_DOMAIN}`;
export const WALLETAPP_HOST: string = `https://wallet.${TC_DOMAIN}`;
export const COPILOT_PORTAL_HOST: string = `https://copilot.${TC_DOMAIN}`;
