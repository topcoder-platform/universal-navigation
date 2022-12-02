<script lang="ts">
  import type { NavMenuItem } from 'lib/functions/nav-menu-item.model';
  import { getActiveRoute, getMainNavItems } from 'lib/functions/marketing-navigation.provider'
  import styles from './MobileNav.module.scss';
  import MobileMenu from 'lib/components/MobileMenu.svelte';
  import Accordion from 'lib/components/Accordion.svelte';
  import { children } from 'svelte/internal';
  import { navUrl } from 'lib/utils/paths';

  const menuItems = getMainNavItems()
  const activeRoute: NavMenuItem[] = getActiveRoute()

</script>

<MobileMenu >
  <div class={styles.mobileNavWrap}>
    <Accordion items={menuItems} let:item style="primary">
      <Accordion items={item.children} style="secondary" let:item={subItem}>
        <ul class={styles.list}>
          {#each subItem.children as child}
            <li class={styles.listItem}>
              <a href={child.url ?? navUrl(child)}>
                {child.label}
              </a>
            </li>
          {/each}
          <li></li>
        </ul>
      </Accordion>
    </Accordion>
  </div>
</MobileMenu>
