<script lang="ts">
  import type { NavMenuItem } from 'lib/functions/nav-menu-item.model';
  import { onMount } from 'svelte';
  import styles from './SubMenu.module.scss';

  export let menuItems: NavMenuItem[] = [];
  export let isHovering: boolean = false;
  export let activeRoute: NavMenuItem = undefined;

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
      >
        {menuItem.label}
      </a>
    {/each}
  </div>
</div>
{/if}
