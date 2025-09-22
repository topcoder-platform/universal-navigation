// https://vitejs.dev/guide/env-and-mode.html
// use `import.meta.env` to access env variables
// use VITE_ prefix in .env to expose variable to the app

import { getEnvValue } from "./env-vars"

export const PLATFORM_APP_HOST: string = getEnvValue(
  "VITE_PLATFORM_APP_HOST",
  "https://app.topcoder.com"
);

export const CUSTOMER_LOGIN: string = getEnvValue(
  "VITE_PLATFORM_APP_HOST",
  "https://app.topcoder.com"
);

export const CUSTOMER_SIGNUP: string = getEnvValue(
  "VITE_CUSTOMER_SIGNUP",
  "https://app.topcoder.com/signup"
);

export const AUTH0_AUTHENTICATOR_URL: string = getEnvValue(
  "VITE_AUTH0_AUTHENTICATOR_URL",
  "https://accounts-auth0.topcoder.com"
);

export * from './hosts'
