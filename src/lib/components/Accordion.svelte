<script lang="ts">
  import type { NavMenuItem } from 'lib/functions/nav-menu-item.model';
  import { classnames } from 'lib/utils/classnames';
  import { getPublicPath } from 'lib/utils/paths';
  import styles from './Accordion.module.scss';

  export let activeRoute: NavMenuItem | undefined = undefined;
  export let items: NavMenuItem[] = [];
  export let style: 'primary'|'secondary'|undefined = undefined;

  const toggledItems: {[key: string]: boolean} = {};
  const iconUrl = getPublicPath(`/assets/icon-dropdown.svg`);

  function toggleItem(item: NavMenuItem, toggle?: boolean): void {
    // if the nav item doesn' have a label, we can't do anything
    if (!item.label) {
      return
    }
    toggledItems[item.label] = typeof toggle === 'boolean' ? toggle : !toggledItems[item.label];
  }

  $: activeRoute && toggleItem(activeRoute)
</script>

<ul class={classnames(styles.accordionWrap, 'uni-accordion', style)}>
  {#each items as item}
    <li class={
      classnames(
        styles.item,
        !!item.label && toggledItems[item.label] && styles.isToggled,
        'uni-accordion-item',
        item.type === 'cta' && 'cta-type',
        activeRoute?.url === item.url && styles.isActive
      )
    }>
      {#if !!item.label && item.type !== 'cta'}
        <div class={classnames(styles.itemHead, 'uni-accordion-item--head')}>
          <a
            href={item.url}
            class={classnames(styles.itemLabel, 'uni-accordion-item--label')}
          >
            {item.label}
          </a>
          {#if item.children?.length}
            <span
              class={styles.itemTrigger}
              role="button"
              tabindex="0"
              on:click={() => toggleItem(item)}
              on:keydown={(ev) => ev.key === 'Enter' && toggleItem(item)}
            >
              <img src={iconUrl} alt="^" />
            </span>
          {/if}
        </div>
      {:else if !!item.label}
        <a class={styles.navButton} href={item.url}>
          {item.label}
        </a>
      {/if}
    </li>

    {#if !!item.label && toggledItems[item.label] && item.children?.length}
      <slot {item}></slot>
    {/if}
  {/each}
  </ul>
