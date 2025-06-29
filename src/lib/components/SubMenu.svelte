<script lang="ts">
  import type { NavMenuItem } from 'lib/functions/nav-menu-item.model';
  import { NavigationHandler } from "../app-context/navigation-handler.model";
  import { onMount } from 'svelte';
  import styles from './SubMenu.module.scss';

  export let menuItems: NavMenuItem[] = [];
  export let isHovering: boolean = false;
  export let activeRoute: NavMenuItem = undefined;
  export let navigationHandler: NavigationHandler | undefined = undefined;

  let elWrap: HTMLElement | undefined;

  function handleMouseEv(ev: MouseEvent) {
    isHovering = ev.type === 'mouseenter'
  }

  onMount(() => {
    elWrap?.addEventListener('mouseenter', handleMouseEv)
    elWrap?.addEventListener('mouseleave', handleMouseEv)
    return () => {
        elWrap?.removeEventListener('mouseenter', handleMouseEv)
        elWrap?.removeEventListener('mouseleave', handleMouseEv)
    }
  })

  function handleNavigation(ev: MouseEvent) {
    if (typeof navigationHandler === 'function') {
      ev.preventDefault()
      navigationHandler({label: '', path: (ev.target as HTMLAnchorElement).href});
    }
  }
</script>

{#if menuItems?.length}
<div class={styles.hoverMenuWrap} bind:this={elWrap}>
  <div class={styles.hoverMenuInner}>
    {#each menuItems as menuItem}
      <a
        class={styles.menuItem}
        class:active={activeRoute?.url === menuItem.url}
        target={menuItem.target ?? '_top'}
        href={menuItem.url}
        on:click={handleNavigation}
      >
        {menuItem.label}
      </a>
    {/each}
  </div>
</div>
{/if}
