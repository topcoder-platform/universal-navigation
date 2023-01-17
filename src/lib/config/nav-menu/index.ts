// https://vitejs.dev/guide/env-and-mode.html
// use `import.meta.env` to access env variables
// use VITE_ prefix in .env to expose variable to the app

// if no value for the specified config key exists,
// throw an error;
// otherwise, return the value for the specified key.
function getEnvValue(viteKey: string): string {
    const viteValue: string = import.meta.env[viteKey]
    if (!viteValue) {
        throw new Error(viteKey)
    }
    return viteValue
}

export const CHALLENGE_HOST: string = getEnvValue('VITE_CHALLENGE_HOST')
export const COMMUNITY_HOST: string = import.meta.env.VITE_COMMUNITY_HOST ?? 'https://community.topcoder.com'
export const FORUM_HOST: string = import.meta.env.VITE_FORUM_HOST ?? 'https://discussions.topcoder.com'
export const ONLINE_REVIEW_HOST: string = import.meta.env.VITE_ONLINE_REVIEW_HOST ?? 'https://software.topcoder.com'
export const PLATFORM_UI_HOST: string = import.meta.env.VITE_PLATFORM_UI_HOST ?? 'https://platform-ui.topcoder.com'
export const TC_API_V5_HOST: string = import.meta.env.VITE_TC_API_V5_HOST ?? 'https://api.topcoder.com/v5'
