// https://vitejs.dev/guide/env-and-mode.html
// use `import.meta.env` to access env variables
// use VITE_ prefix in .env to expose variable to the app

import { getEnvValue } from "./env-vars"

export const SPRIG_ID: string = getEnvValue('VITE_SPRIG_ID', '')
export const CHAMELEON_KEY_ID: string = getEnvValue('VITE_CHAMELEON_KEY_ID', '')

export * from './hosts'
