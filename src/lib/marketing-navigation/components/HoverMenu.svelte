<script lang="ts">
  import type { NavMenuItem } from 'lib/functions/nav-menu-item.model';
  import styles from './HoverMenu.module.scss';
  
  export let mainDescription = '';
  export let menuItems: NavMenuItem[] = [];
</script>

<div class={styles.hoverMenuWrap}>
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
              href={menuItem.url}
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
                      href={child.url}
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
