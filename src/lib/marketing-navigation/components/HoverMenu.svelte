<script lang="ts">
  import type { NavMenuItem } from 'lib/functions/nav-menu-item.model';
  import { navUrl } from 'lib/utils/paths';
    import { onMount } from 'svelte';
  import styles from './HoverMenu.module.scss';

  export let mainDescription = '';
  export let menuItems: NavMenuItem[] = [];
  export let isHovering: boolean = false;

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

<div class={styles.hoverMenuWrap} bind:this={elWrap}>
  <div class={styles.hoverMenuInner}>
    <p class={styles.mainDesc}>
      {mainDescription}
    </p>

    {#if menuItems?.length}
      <ul class={styles.menuSections}>
        {#each menuItems as menuItem}
          <li class={styles.menuSectionItem}>
            <a
              class={styles.menuSectionHeading}
              target="_top"
              href={navUrl(menuItem)}
            >
              {menuItem.label}
            </a>
            <p class={styles.menuSectionDesc}>
              {menuItem.description ?? ''}
            </p>

            {#if menuItem.children}
              <ul class={styles.menuSectionItemChilds}>
                {#each menuItem.children as child}
                  <li>
                    <a
                      class={styles.menuSectionChild}
                      target="_top"
                      href={navUrl(child)}
                    >{child.label}</a>
                  </li>
                {/each}
              </ul>
            {/if}
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</div>
