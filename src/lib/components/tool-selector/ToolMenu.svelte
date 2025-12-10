<script lang="ts">
  import type { AuthUser } from "lib/app-context";
  import { getPublicPath } from 'lib/utils/paths';
  import { classnames } from 'lib/utils/classnames';
  import { getToolSelectorItems } from 'lib/functions/tool-selector-menu.provider';
  import type { NavMenuItem } from 'lib/functions/nav-menu-item.model';
  import InlineSvg from '../InlineSvg.svelte';
  import styles from './ToolMenu.module.scss';

  let navMenuItems: NavMenuItem[] = getToolSelectorItems() ?? [];
  const toolIcon = getPublicPath('/assets/icon-tool.svg');

  function hasCtas(item: NavMenuItem) {
    return !!item.children?.some(d => d.type === 'cta');
  }
</script>

<div class={styles.toolMenuWrap}>
  <InlineSvg src="/assets/tools/sprite.svg" />
  {#each navMenuItems as section, sectionIndex}
    {#if section}
    <div class={classnames(styles.toolSection, section.label ? styles[section.label.toLowerCase()] : undefined)}>
      <div class={styles.toolSectionTitle}>
        {section.label}
      </div>

      <div class={styles.toolGroups}>
        {#each section.children ?? [] as group}
          <div
            class={classnames(styles.toolGroup, hasCtas(group) && styles.hasCtas)}
            style:--order={group.groupOrder ?? ''}
          >
            {#if group.label}
              <div class={styles.toolGroupTitle}>
                {group.label}
              </div>
            {/if}

            <div class={styles.toolNavItems}>
              {#each group.children ?? [] as navItem}
                <a
                    href={navItem.url}
                    class={classnames(styles.toolNavItem, navItem.type === 'cta' && 'navButton')}
                    target="_blank"
                    rel="noreferrer"
                >
                  {#if navItem.type !== 'cta'}
                    <div class={styles.toolIcon}>
                      {#if navItem.icon}
                        <svg>
                          <use xlink:href={`#${navItem.icon}`}></use>
                        </svg>
                      {:else}
                        <img src={toolIcon} alt={navItem.label} />
                      {/if}
                    </div>
                  {/if}
                  <div class={styles.navItemContent}>
                    {#if !!navItem.label}
                      <span class={styles.navItemLabel}>{navItem.label}</span>
                    {/if}
                    {#if navItem.type !== 'cta' && navItem.description}
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
    </div>
    {#if sectionIndex < navMenuItems.length-1}
      <hr class={styles.toolMenuSpacer} />
    {/if}
    {/if}
  {/each}
</div>
