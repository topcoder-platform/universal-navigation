import type { AuthUser } from 'lib/functions/auth-user.model'

type NavigationType = (
  |'footer'
  |'marketing'
  |'tool'
)

export interface NavContext {
  callbacks: {
    signIn: () => void
    signOut: () => void
    signUp: () => void
  },
  auth: {
    user: AuthUser
  }
}

const NavigationLoadersMap = {
  marketing: () => import('./lib/marketing-navigation/MarketingNavigation.svelte').then(d => d.default),
  footer: () => import('./lib/footer-navigation/FooterNavigation.svelte').then(d => d.default),
  tool: () => import('./lib/tool-navigation/ToolNavigation.svelte').then(d => d.default),
}

interface NavigationAppProps {
  toolName: string,

  onReady: () => void

  user: AuthUser,
  signIn: () => void
  signUp: () => void
  signOut: () => void
}

async function init(
  navType: NavigationType,
  target: string | Element,
  config: NavigationAppProps = {} as NavigationAppProps
) {
  const loadNavigationFn = NavigationLoadersMap[navType];

  if (!loadNavigationFn) {
    throw new Error(`Navigation of type '${navType}' does not exist!`);
  }

  const {onReady: readyCallback, ...props} = config

  const targetEl: Element = typeof target === 'string' ? document.getElementById(target) : target;

  if (targetEl?.nodeType !== Node.ELEMENT_NODE) {
    throw new Error('[TcUnivNav] `target` must be a valid dom element!');
  }

  // split the contextual props from the navigation's props
  const {signIn, signOut, signUp, user, ...navProps} = props 

  const Navigation = await loadNavigationFn();
  new Navigation({target: targetEl, props: navProps, context: new Map(Object.entries({
    callbacks: {
      signIn, signOut, signUp
    },
    auth: {user}
  }))});

  if (typeof readyCallback === 'function') {
    readyCallback()
  }
}

function execQueueCall(...args) {
  init.call(null, ...args)
}

(function resolveGlobalQueue() {
  const globalName = window['TcUnivNavConfig'] ?? 'tcUniNav';
  const tcUnivNavConfig = window[globalName] ?? {} as any;
  const queue = tcUnivNavConfig.q ?? [];

  // execute all the calls in the queue
  for(let qi of queue) {
    execQueueCall(...qi)
  }

  // replace the method that adds the calls to the queue
  // with a direct exec call
  window[globalName] = execQueueCall.bind(null)
})()

// add an export for the file to be considered a module and to be compiled as one
export {}