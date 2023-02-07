import { getContext } from "svelte"
import { hasOwnProperty } from "lib/utils/hasOwnProperty"
import type { NavigationAppProps } from "main"
import type { Writable } from "svelte/store"
import type { AppContext } from "./app-context.model"

export const buildContext = (newConfig: Partial<NavigationAppProps>, prevContext: any) => {
  const {
    signIn = prevContext.auth?.signIn,
    signOut = prevContext.auth?.signOut,
    signUp = prevContext.auth?.signUp,
    user = prevContext.auth?.user,
    toolName = prevContext.toolConfig?.name,
    toolRoot = prevContext.toolConfig?.root,
    handleNavigation = prevContext.navigationHandler,
    supportMeta = prevContext.supportMeta,
    fullFooter = prevContext.toolConfig?.fullFooter,
  } = {...newConfig, user: undefined}

  const hasUserProp = hasOwnProperty(newConfig, 'user') && newConfig['user'] !== 'auto'
  // user: 'atuo' translates to auth.autoFetchUser: true
  const autoFetchUser = hasOwnProperty(newConfig, 'user') ? newConfig['user'] === 'auto' : !!prevContext.auth?.autoFetchUser

  return {
    auth: {
      ready: prevContext.auth?.ready || hasUserProp,
      user: hasUserProp ? newConfig.user : user,
      autoFetchUser,
      signIn,
      signOut,
      signUp,
    },
    navigationHandler: handleNavigation,
    toolConfig: {
      name: toolName,
      root: toolRoot,
      fullFooter,
    },
    supportMeta,
  }
}

export const getAppContext = (): Writable<AppContext> => {
  return getContext('appContext')
}
