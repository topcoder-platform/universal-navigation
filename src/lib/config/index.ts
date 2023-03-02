// https://vitejs.dev/guide/env-and-mode.html
// use `import.meta.env` to access env variables
// use VITE_ prefix in .env to expose variable to the app

// if no value for the specified config key exists,
// throw an error;
// otherwise, return the value for the specified key.
function getEnvValue(viteKey: string): string {
    if (!Object.prototype.hasOwnProperty.call(import.meta.env, viteKey)) {
        throw new Error(`Config variable '${viteKey}' is missing from your .env file!`)
    }

    const viteValue: string = import.meta.env[viteKey]
    return viteValue
}

export const WP_HOST_URL: string = getEnvValue('VITE_WP_HOST_URL')
export const CHALLENGE_HOST: string = getEnvValue('VITE_CHALLENGE_HOST')
export const COMMUNITY_HOST: string = getEnvValue('VITE_COMMUNITY_HOST')
export const PACTS_HOST: string = getEnvValue('VITE_PACTS_HOST')
export const FORUM_HOST: string = getEnvValue('VITE_FORUM_HOST')
export const ONLINE_REVIEW_HOST: string = getEnvValue('VITE_ONLINE_REVIEW_HOST')
export const PLATFORM_UI_HOST: string = getEnvValue('VITE_PLATFORM_UI_HOST')
export const TC_API_V5_HOST: string = getEnvValue('VITE_TC_API_V5_HOST')
