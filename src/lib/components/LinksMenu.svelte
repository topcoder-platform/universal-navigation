<script lang="ts">
  import { tick } from 'svelte';
  import type { NavMenuItem } from 'lib/functions/nav-menu-item.model';
  import styles from './LinksMenu.module.scss';
  import { classnames } from 'lib/utils/classnames';

  export let ref: Element | undefined = undefined;
  
  export let className: string;
  export let menuItems: NavMenuItem[];
  export let activeRoute: NavMenuItem = undefined;
  export let hoveredMenuItem: NavMenuItem = undefined;

  function itemHasHoverMenu(menuItem: NavMenuItem) {
    return menuItem.children?.length || menuItem.description
  }
  
  const handleMouseover = (menuItem: NavMenuItem) => async () => {
    if (activeRoute) {
      return
    }

    if (!itemHasHoverMenu(menuItem)) {
      return;
    }

    hoveredMenuItem = menuItem;
    const target = menuItem;

    await tick()
    const wraps: HTMLElement[] = [].slice.call(
      document.querySelectorAll(`[data-key="${menuItem.fullPath}"]`)
    )

    document.addEventListener('mouseover', function mc(ev) {
      // if target has changed, remove event listener and return
      if (target !== hoveredMenuItem) {
        document.removeEventListener('mouseover', mc)
        return;
      }
      
      const isStillHovering = wraps.some(w => w.contains(ev.target as Node))
      if (isStillHovering) {
        return
      }
      hoveredMenuItem = undefined
      document.removeEventListener('mouseover', mc)
    })
  }

  function getNavItemType(menuItem: NavMenuItem) {
    return menuItem.type === 'cta' ? 'navButton' : 'navLink'
  }

</script>

<div
  class={classnames(styles.mainNav, className)}
  class:disableHover={!!activeRoute}
  bind:this={ref}
>
  {#each menuItems as menuItem}
    <a
      class={getNavItemType(menuItem)}
      class:active={activeRoute?.fullPath === menuItem.fullPath}
      class:hover={hoveredMenuItem?.fullPath === menuItem.fullPath}
      href={menuItem.absUrl}
      target="_top"
      data-key={menuItem.fullPath}
      on:mouseover={handleMouseover(menuItem)}
      on:focus={handleMouseover(menuItem)}
    >
      {menuItem.label}
    </a>
  {/each}
</div>