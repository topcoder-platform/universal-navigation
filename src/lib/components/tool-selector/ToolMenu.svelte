<script lang="ts">
  import { getPublicPath } from 'lib/utils/paths';
  import { classnames } from 'lib/utils/classnames';
  import { getToolSelectorItems } from 'lib/functions/tool-selector-menu.provider';
  import type { NavMenuItem } from 'lib/functions/nav-menu-item.model';
  import InlineSvg from '../InlineSvg.svelte';
  import styles from './ToolMenu.module.scss';

  const navMenuItems = getToolSelectorItems()
  const toolIcon = getPublicPath('/assets/icon-tool.svg');

  function hasCtas(item: NavMenuItem) {
    return !!item.children.some(d => d.type === 'cta');
  }
</script>

<div class={styles.toolMenuWrap}>
  <InlineSvg src="/assets/tools/sprite.svg" />
  {#each navMenuItems as section, sectionIndex}
    <div class={styles.toolSection}>
      <div class={styles.toolSectionTitle}>
        {section.label}
      </div>

      <div class={styles.toolGroups}>
        {#each section.children as group}
          <div
            class={classnames(styles.toolGroup, hasCtas(group) && styles.hasCtas)}
            style:--order={group.groupOrder ?? ''}
          >
            {#if group.label}
              <div class={styles.toolGroupTitle}>
                {group.label}
              </div>
            {/if}

            <ul class={styles.toolNavItems}>
              {#each group.children as navItem}
                <li class={classnames(styles.toolNavItem, navItem.type === 'cta' && 'navButton')}>
                  <div class={styles.toolIcon}>
                    {#if navItem.type !== 'cta'}
                      {#if navItem.icon}
                        <svg>
                          <use xlink:href={`#${navItem.icon}`}></use>
                        </svg>
                      {:else}
                        <img src={toolIcon} alt={navItem.label} />
                      {/if}
                    {/if}
                  </div>
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
