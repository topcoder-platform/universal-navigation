<script lang="ts">
  import type { NavMenuItem } from 'lib/functions/nav-menu-item.model';
  import styles from './HoverMenu.module.scss';
  
  export let mainDescription = '';
  export let menuItems: NavMenuItem[] = [];
  export let key: string;
</script>

<div class={styles.hoverMenuWrap} data-key={key}>
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
              href={menuItem.absUrl}
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
                      href={child.absUrl}
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