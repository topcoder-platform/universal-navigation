import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'
import { buildContext, type AuthUser, type NavigationHandler } from './lib/app-context'

export * from './lib/app-context'

export type NavigationType = (
  |'footer'
  |'marketing'
  |'tool'
)

export type NavigationAppProps = {
  type?: NavigationType
  toolName?: string,
  toolRoot?: string,
  handleNavigation?: NavigationHandler

  onReady?: () => void

  user?: AuthUser,
  signIn?: () => void
  signUp?: () => void
  signOut?: () => void
}

export type TcUniNavMethods = 'init'|'update'

export type TcUniNavFn = (
  method: TcUniNavMethods,
  targetId: string,
  config: NavigationAppProps,
) => void

const loadModule = (module: string) => {
    return import(/* @vite-ignore */ module).then(d => d.default)
}

// Serve the manually built files only when in production
// otherwise serve the local files
// this logic is "magically" cleaned up on build time, so this won't exist in the prod build,
// only the manually built files exist in the prod build
//
// FOR clarificaiton: this is needed to run serve/dev commands
const NavigationLoadersMap = APP_IS_PROD ? {
  marketing: () => loadModule('./marketing-nav.js'),
  tool: () => loadModule('./tool-nav.js'),
  footer: () => loadModule('./footer-nav.js'),
} : {
  marketing: () => import('./lib/marketing-navigation/MarketingNavigation.svelte').then(d => d.default),
  footer: () => import('./lib/footer-navigation/FooterNavigation.svelte').then(d => d.default),
  tool: () => import('./lib/tool-navigation/ToolNavigation.svelte').then(d => d.default),
}

const instancesContextStore: {[key: string]: Map<string, Writable<any>>} = {}

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

  const {onReady: readyCallback, ...props} = config

  // split the contextual props from the navigation's props
  const {
    signIn,
    signOut,
    signUp,
    user,
    toolName,
    toolRoot,
    handleNavigation,
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
  new Navigation({target: targetEl, props: navProps, context: ctx});

  if (typeof readyCallback === 'function') {
    readyCallback()
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
  for(let qi of queue) {
    const args = [].slice.call(qi);
    execQueueCall(args[0], ...args.slice(1))
  }

  // replace the method that adds the calls to the queue
  // with a direct exec call
  window[globalName] = execQueueCall.bind(null)
})()
