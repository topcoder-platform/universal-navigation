// https://vitejs.dev/guide/env-and-mode.html
// use `import.meta.env` to access env variables
// use VITE_ prefix in .env to expose variable to the app

import { getEnvValue } from "./env-vars"

export const CHAMELEON_KEY_ID: string = getEnvValue('VITE_CHAMELEON_KEY_ID', '')
export const USERFLOW_ENVIRONMENT_TOKEN: string = getEnvValue('VITE_USERFLOW_ENVIRONMENT_TOKEN')
export const USERFLOW_TC_SIGNATURE: string = getEnvValue('VITE_USERFLOW_TC_SIGNATURE')

export * from './hosts'
