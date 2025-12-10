import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'

import { buildContext, type AuthUser, type NavigationHandler, type SupportMeta } from './lib/app-context'
import { PubSub } from './lib/utils/pubsub';

import 'lib/styles/main.scss';

export * from './lib/app-context'
export const appPubSub = new PubSub();

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
  showSalesCta?: boolean,
  handleNavigation?: NavigationHandler

  onReady?: () => void

  user?: AuthUser | 'auto',

  signIn?: () => void
  signUp?: () => void
  signOut?: () => void

  supportMeta?: SupportMeta

  integrations?: {[key: string]: 'disable'}
  signupUtmCodes?: string
  simplifiedNav?: boolean
}

export type TcUniNavMethods = 'init' | 'update' | 'destroy'

export type TcUniNavFn = (
  method: TcUniNavMethods,
  targetId: string,
  config: NavigationAppProps,
) => void

const NavigationLoadersMap: Record<NavigationType, () => Promise<any>> = {
  marketing: () => import('./lib/marketing-navigation/MarketingNavigation.svelte').then(d => d.default),
  footer: () => import('./lib/footer-navigation/FooterNavigation.svelte').then(d => d.default),
  tool: () => import('./lib/tool-navigation/ToolNavigation.svelte').then(d => d.default),
}

const instancesContextStore: { [key: string]: Map<string, Writable<any>> } = {}

async function destroy(
  targetId: string,
) {
  if (Object.prototype.hasOwnProperty.call(instancesContextStore, targetId)) {
    delete instancesContextStore[targetId];
  }

  if (typeof targetId !== 'string') {
    throw new Error(`'targetId' should be a string`);
  }

  const targetEl: Element | null = document.getElementById(targetId);

  if (targetEl?.nodeType !== Node.ELEMENT_NODE) {
    throw new Error(`[TcUnivNav] 'target' must be a valid dom element with an id of #${targetId}!`);
  }

  targetEl.innerHTML = '';
}

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
    type: navType = 'tool',
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
    readyCallback();
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
  if (!appContext) {
    throw new Error(`Navigation #${targetId} is missing context!`);
  }
  appContext.update(buildContext.bind(null, config))
}

function execQueueCall(method: TcUniNavMethods, ...args: unknown[]) {
  if (method === 'init') {
    const [targetId, cfg] = args as [string, NavigationAppProps?];
    init(targetId, cfg ?? {} as NavigationAppProps)
  }

  else if (method === 'update') {
    const [targetId, cfg] = args as [string, NavigationAppProps?];
    update(targetId, cfg ?? {} as NavigationAppProps)
  }

  else if (method === 'destroy') {
    const [targetId] = args as [string];
    destroy(targetId);
  }

  else if (method === 'trigger') {
    const [name, data] = args as [string, unknown];
    appPubSub.publish(name, data);
  }

  else {
    throw new Error(`Invalid method '${method}' called!`)
  }
}

(function resolveGlobalQueue() {
  const globalName = (('TcUnivNavConfig' in window && (window as any).TcUnivNavConfig) || 'tcUniNav') as string;
  const tcUnivNavConfig = ((globalName in window && (window as any)[globalName]) ?? {}) as { q?: unknown[] };
  const queue = Array.isArray(tcUnivNavConfig.q) ? tcUnivNavConfig.q : [];

  // execute all the calls in the queue
  for (let qi of queue) {
    const args = Array.from(qi as any) as [TcUniNavMethods, ...unknown[]];
    const [method, ...rest] = args;
    execQueueCall(method, ...rest)
  }

  // replace the method that adds the calls to the queue
  // with a direct exec call
  Object.assign(window as any, {[globalName]: execQueueCall.bind(null)});
})()
