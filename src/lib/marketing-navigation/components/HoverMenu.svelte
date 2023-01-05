<script lang="ts">
  import type { NavMenuItem } from 'lib/functions/nav-menu-item.model';
  import { onMount } from 'svelte';
  import styles from './HoverMenu.module.scss';

  export let mainDescription = '';
  export let menuItems: NavMenuItem[] = [];
  export let isHovering: boolean = false;

  let elWrap: HTMLElement | undefined;

  function handleMouseEv(ev: MouseEvent) {
    isHovering = ev.type === 'mouseenter'
  }

  let ctas: NavMenuItem[] = []
  $: ctas = (menuItems ?? []).filter(d => d.type === 'cta')

  onMount(() => {
    elWrap?.addEventListener('mouseenter', handleMouseEv)
    elWrap?.addEventListener('mouseleave', handleMouseEv)
    return () => {
        elWrap?.removeEventListener('mouseenter', handleMouseEv)
        elWrap?.removeEventListener('mouseleave', handleMouseEv)
    }
  })
</script>

<div class={styles.hoverMenuWrap} bind:this={elWrap}>
  <div class={styles.hoverMenuInner}>
    <p class={styles.mainDesc}>
      {mainDescription}
    </p>

    {#if menuItems?.length}
      <ul class={styles.menuSections}>
        {#each menuItems as menuItem}
          {#if menuItem.type !== 'cta'}
            <li class={styles.menuSectionItem}>
              {#if !!menuItem.label}
                <a
                  class={styles.menuSectionHeading}
                  target="_top"
                  href={menuItem.url}
                >
                  {menuItem.label}
                </a>
                <p class={styles.menuSectionDesc}>
                  {menuItem.description ?? ''}
                </p>
              {/if}
              {#if menuItem.children}
                <ul class={styles.menuSectionItemChilds}>
                  {#each menuItem.children as child}
                    {#if !!child.label}
                      <li>
                        <a
                          class={styles.menuSectionChild}
                          target="_top"
                          href={child.url}
                        >{child.label}</a>
                      </li>
                    {/if}
                  {/each}
                </ul>
              {/if}
            </li>
          {/if}
        {/each}
        {#if ctas.length}
          <li class={styles.ctasMenuSectionItem}>
            {#each ctas as ctaMenuItem}
              <a
                class={styles.ctaButton}
                target="_top"
                href={ctaMenuItem.url}
              >
                {ctaMenuItem.label}
              </a>
            {/each}
          </li>
        {/if}
      </ul>
    {/if}
  </div>
</div>
