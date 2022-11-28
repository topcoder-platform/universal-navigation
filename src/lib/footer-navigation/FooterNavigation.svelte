<script lang="ts">
  import { getFooterNavItems } from 'lib/functions/footer-navigation.provider';
  import { navUrl } from 'lib/utils/paths';
  import FooterBottomBar from './FooterBottomBar.svelte';
  import styles from './FooterNavigation.module.scss'

  const menuItems = getFooterNavItems()

</script>

<footer class={styles.footerWrap}>
  <div class={styles.footerNavigation}>
    <ul class={styles.menuSections}>
      {#each menuItems as menuItem}
        <li class={styles.menuSection}>
          <div class={styles.menuSectionHeading}>
            {menuItem.label}
          </div>

          {#if menuItem.children?.length}
            <ul class={styles.menuSectionEntries}>
              {#each menuItem.children as child}
                <li class={styles.menuSectionEntry}>
                  <a target="_top" href={navUrl(child)}>
                    {child.label}
                  </a>
                </li>
              {/each}
            </ul>
          {/if}
        </li>
      {/each}
    </ul>
  </div>

  <FooterBottomBar />
</footer>
