import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'

import { buildContext, type AuthUser, type NavigationHandler, type SupportMeta } from './lib/app-context'
import { triggerForNewUsers } from 'lib/functions/integrations/sprig';
import { subscribeToAuthContext as chameleonWatchForUser } from './lib/functions/integrations/chameleon'

import 'lib/styles/main.scss';

export * from './lib/app-context'

export type NavigationType = (
  | 'footer'
  | 'marketing'
  | 'tool'
)

export type NavigationAppProps = {
  type?: NavigationType
  toolName?: string,
  toolRoot?: string,
  fullFooter?: boolean,
  handleNavigation?: NavigationHandler

  onReady?: () => void

  user?: AuthUser | 'auto',

  signIn?: () => void
  signUp?: () => void
  signOut?: () => void

  supportMeta?: SupportMeta
}

export type TcUniNavMethods = 'init' | 'update'

export type TcUniNavFn = (
  method: TcUniNavMethods,
  targetId: string,
  config: NavigationAppProps,
) => void

const NavigationLoadersMap = {
  marketing: () => import('./lib/marketing-navigation/MarketingNavigation.svelte').then(d => d.default),
  footer: () => import('./lib/footer-navigation/FooterNavigation.svelte').then(d => d.default),
  tool: () => import('./lib/tool-navigation/ToolNavigation.svelte').then(d => d.default),
}

const instancesContextStore: { [key: string]: Map<string, Writable<any>> } = {}

/**
 * Initialize the navigation component
 * @param targetId Target element ID
 * @param config Config object
 */
async function init(
  targetId: string,
  config: NavigationAppProps = {} as NavigationAppProps
) {

  if (instancesContextStore[targetId]) {
    throw new Error(`A navigation component with an id of '${targetId}' was already initialized!`)
  }

  const { onReady: readyCallback, ...props } = config

  // split the contextual props from the navigation's props
  const {
    signIn,
    signOut,
    signUp,
    user,
    toolName,
    toolRoot,
    handleNavigation,
    supportMeta,
    type: navType,
    ...navProps
  } = props

  const loadNavigationFn = NavigationLoadersMap[navType];

  if (!loadNavigationFn) {
    throw new Error(`Navigation of type '${navType}' does not exist!`);
  }

  if (typeof targetId !== 'string') {
    throw new Error(`'targetId' should be a string`);
  }

  const targetEl: Element | null = document.getElementById(targetId);

  if (targetEl?.nodeType !== Node.ELEMENT_NODE) {
    throw new Error(`[TcUnivNav] 'target' must be a valid dom element with an id of #${targetId}!`);
  }

  // build context for the navigation
  const ctx = new Map([
    ['appContext', writable(buildContext(props, {}))]
  ]);

  instancesContextStore[targetId] = ctx;

  // load the navigation component
  const Navigation = await loadNavigationFn();
  // instantiate the navigation component
  new Navigation({ target: targetEl, props: navProps, context: ctx });
  targetEl.classList.add('tc-universal-nav')

  if (typeof readyCallback === 'function') {
    readyCallback()
  }

  if (navType === 'tool' || navType === 'marketing') {
    triggerForNewUsers()
    chameleonWatchForUser(ctx.get('appContext'))
  }
}

/**
 * Update a navigation component
 * @param targetId The navigation component's id
 * @param config Config object
 */
function update(
  targetId: string,
  config: NavigationAppProps = {} as NavigationAppProps
) {
  // If we pass '*' as id,
  // run an update for all navigation instances
  if (targetId === '*') {
    Object.entries(instancesContextStore).forEach(([tid]) => update(tid, config))
    return
  }

  const ctx = instancesContextStore[targetId];
  if (!ctx) {
    throw new Error(`Navigation #${targetId} was not initialized!`);
  }

  const appContext = ctx.get('appContext');
  appContext.update(buildContext.bind(null, config))
}

function execQueueCall(method: TcUniNavMethods, ...args: any[]) {
  if (method === 'init') {
    init.call(null, ...args)
  }

  else if (method === 'update') {
    update.call(null, ...args)
  }

  else {
    throw new Error(`Invalid method '${method}' called!`)
  }
}

(function resolveGlobalQueue() {
  const globalName = window['TcUnivNavConfig'] ?? 'tcUniNav';
  const tcUnivNavConfig = (window[globalName] ?? {}) as any;
  const queue = tcUnivNavConfig.q ?? [];

  // execute all the calls in the queue
  for (let qi of queue) {
    const args = [].slice.call(qi);
    execQueueCall(args[0], ...args.slice(1))
  }

  // replace the method that adds the calls to the queue
  // with a direct exec call
  window[globalName] = execQueueCall.bind(null)
})()
