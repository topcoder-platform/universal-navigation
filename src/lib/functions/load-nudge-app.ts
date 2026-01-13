const modulePath = BUILD_IS_PROD ? './nudge.js' : '../nudge-app/Nudge.svelte';

const loadModule = () => {
  return import(/* @vite-ignore */ modulePath).then(d => d.default)
}

export const loadNudgeApp = async (ctx: any, targetEl: Element): Promise<void> => {
  const NudgeApp = await loadModule();

  // instantiate the nudge app
  new NudgeApp({ target: targetEl, context: ctx });
}
