import type { NavMenuItem } from "lib/functions/nav-menu-item.model";

/**
 * Handles NavMenuItem.action if it exists
 * @param el
 * @param item
 * @returns
 */
export function handleNavItemAction(el: HTMLElement, item: NavMenuItem) {
  // on node mount
  if (!item.action) {
    return;
  }

  el.addEventListener('click', (ev: MouseEvent) => {
    ev.preventDefault();
    if (item.action) {
      el.dispatchEvent(new Event(item.action, {bubbles: true}));
    }
  });
}
