<script lang="ts">
  import { getPublicPath } from 'lib/utils/paths';
  import styles from './ToolMenu.module.scss';
  import { classnames } from 'lib/utils/classnames';
  import { getToolMenuItems } from 'lib/functions/tool-menu.provider';

  const navMenuItems = getToolMenuItems()
  const toolIcon = getPublicPath('/assets/icon-tool.svg');

</script>

<div class={styles.toolMenuWrap}>
  {#each navMenuItems as section, sectionIndex}
    <div class={styles.toolSection}>
      <div class={styles.toolSectionTitle}>
        {section.label}
      </div>
      
      <div class={styles.toolGroups}>
        {#each section.children as group}
          <div class={styles.toolGroup}>
            {#if group.label}
              <div class={styles.toolGroupTitle}>
                {group.label}
              </div>
            {/if}

            <ul class={styles.toolNavItems}>
              {#each group.children as navItem}
                <li class={classnames(styles.toolNavItem, navItem.type === 'cta' && 'navButton')}>
                  {#if navItem.type !== 'cta'}
                    <img src={toolIcon} alt={navItem.label} />
                  {/if}
                  <div class={styles.navItemContent}>
                    <a href={navItem.url}>{navItem.label}</a>
                    {#if navItem.type !== 'cta' && navItem.description}
                      <span class={styles.navItemDescription}>
                        {navItem.description}
                      </span>
                    {/if}
                  </div>
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </div>
    {#if sectionIndex < navMenuItems.length-1}
      <hr class={styles.toolMenuSpacer} />
    {/if}
  {/each}
</div>
