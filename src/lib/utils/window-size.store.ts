import { derived, readable } from "svelte/store";

export interface WindowSize {
  height: number
  width: number
}

export const windowSize = readable<WindowSize>({} as WindowSize, (set) => {
  const updateSizes = () => {
    set({
      height: window.innerHeight,
      width: window.innerWidth,
    } as WindowSize);
  };

  window.addEventListener('resize', updateSizes);
  updateSizes();
  return () => window.removeEventListener('resize', updateSizes);
});

export const isMobile = derived(windowSize, ({width}: WindowSize) => width < 768);
