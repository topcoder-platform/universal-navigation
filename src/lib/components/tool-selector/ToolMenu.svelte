<script lang="ts">
  import type { AuthUser } from "lib/app-context";
  import { getPublicPath } from 'lib/utils/paths';
  import { getToolSelectorItems } from 'lib/functions/tool-selector-menu.provider';
  import type { NavMenuItem } from 'lib/functions/nav-menu-item.model';
  import InlineSvg from '../InlineSvg.svelte';
  import styles from './ToolMenu.module.scss';

  // sections -> columns -> groups -> nav items (see tool-selector-nav-items.ts)
  let navMenuItems: NavMenuItem[] = getToolSelectorItems() ?? [];
  const toolIcon = getPublicPath('/assets/icon-tool.svg');
</script>

<div class={styles.toolMenuWrap}>
  <InlineSvg src="/assets/tools/sprite.svg" />
  {#each navMenuItems as section, sectionIndex}
    {#if section}
    <div class={styles.toolSection}>
      <div class={styles.toolSectionTitle}>
        {section.label}
      </div>

      <div class={styles.toolColumns}>
        {#each section.children ?? [] as column}
          <div class={styles.toolGroups}>
            {#each column.children ?? [] as group}
              <div class={styles.toolGroup}>
                {#if group.label}
                  <div class={styles.toolGroupTitle}>
                    {group.label}
                  </div>
                {/if}

                <div class={styles.toolNavItems}>
                  {#each group.children ?? [] as navItem}
                    <a
                        href={navItem.url}
                        class={styles.toolNavItem}
                        target="_blank"
                        rel="noreferrer"
                    >
                      <div class={styles.toolIcon}>
                        {#if navItem.icon}
                          <svg>
                            <use xlink:href={`#${navItem.icon}`}></use>
                          </svg>
                        {:else}
                          <img src={toolIcon} alt={navItem.label} />
                        {/if}
                      </div>
                      <div class={styles.navItemContent}>
                        {#if !!navItem.label}
                          <span class={styles.navItemLabel}>{navItem.label}</span>
                        {/if}
                        {#if navItem.description}
                          <span class={styles.navItemDescription}>
                            {navItem.description}
                          </span>
                        {/if}
                      </div>
                    </a>
                  {/each}
                </div>
              </div>
            {/each}
          </div>
        {/each}
      </div>
    </div>
    {#if sectionIndex < navMenuItems.length-1}
      <hr class={styles.toolMenuSpacer} />
    {/if}
    {/if}
  {/each}
</div>
