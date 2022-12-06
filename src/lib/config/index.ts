// https://vitejs.dev/guide/env-and-mode.html
// use `import.meta.env` to access env variables
// use VITE_ prefix in .env to expose variable to the app
export const DEFAULT_HOST_URL: string = import.meta.env.VITE_DEFAULT_HOST_URL ?? 'https://topcoder.com'
export const TC_API_V5_HOST: string = import.meta.env.TC_API_V5_HOST ?? 'https://api.topcoder-dev.com/v5'
