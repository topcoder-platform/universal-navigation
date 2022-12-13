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
    minFooter = prevContext.minFooter ?? prevContext.toolConfig?.minFooter,
  } = newConfig

  const hasUserProp = hasOwnProperty(newConfig, 'user')

  return {
    auth: {
      ready: prevContext.auth?.ready || hasUserProp,
      user: hasUserProp ? newConfig.user : user,
      signIn,
      signOut,
      signUp,
    },
    navigationHandler: handleNavigation,
    toolConfig: {
      name: toolName,
      root: toolRoot,
      minFooter: minFooter,
    },
    supportMeta,
  }
}

export const getAppContext = (): Writable<AppContext> => {
  return getContext('appContext')
}
