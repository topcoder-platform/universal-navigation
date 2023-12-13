// https://vitejs.dev/guide/env-and-mode.html
// use `import.meta.env` to access env variables
// use VITE_ prefix in .env to expose variable to the app

import { getEnvValue } from "./env-vars"

export const DISABLE_USERFLOW: string = getEnvValue('VITE_DISABLE_USERFLOW', 'true')
export const USERFLOW_ENVIRONMENT_TOKEN: string = getEnvValue('VITE_USERFLOW_ENVIRONMENT_TOKEN')
export const USERFLOW_TC_SIGNATURE: string = getEnvValue('VITE_USERFLOW_TC_SIGNATURE')
export const USERFLOW_DEFAULT_SURVEY_DELAY: string = getEnvValue('VITE_USERFLOW_DEFAULT_SURVEY_DELAY', '3000')

export * from './hosts'
