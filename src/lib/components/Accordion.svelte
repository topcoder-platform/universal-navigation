<script lang="ts">
  import type { NavMenuItem } from 'lib/functions/nav-menu-item.model';
  import { classnames } from 'lib/utils/classnames';
  import { getPublicPath, navUrl } from 'lib/utils/paths';
  import styles from './Accordion.module.scss';

  export let activeRoute: NavMenuItem = undefined;
  export let items: NavMenuItem[];
  export let style: 'primary'|'secondary'|undefined = undefined;

  const toggledItems: {[key: string]: boolean} = {};
  const iconUrl = getPublicPath(`/assets/icon-dropdown.svg`);

  function key(item: NavMenuItem) {
    return item.label
  }

  function toggleItem(item: NavMenuItem, toggle?: boolean) {
    toggledItems[key(item)] = typeof toggle === 'boolean' ? toggle : !toggledItems[item.label];
  }

  $: activeRoute && toggleItem(activeRoute)
</script>

<ul class={classnames(styles.accordionWrap, 'uni-accordion', style)}>
  {#each items as item}
    <li class={
      classnames(
        styles.item,
        toggledItems[key(item)] && styles.isToggled,
        'uni-accordion-item',
        item.type === 'cta' && 'cta-type',
        activeRoute?.path === item.path && styles.isActive
      )
    }>
      {#if item.type !== 'cta'}
        <div class={classnames(styles.itemHead, 'uni-accordion-item--head')}>
          <a
            href={navUrl(item)}
            class={classnames(styles.itemLabel, 'uni-accordion-item--label')}
          >
            {item.label}
          </a>
          <span class={styles.itemTrigger} on:click={() => toggleItem(item)} on:keydown={() => {}}>
            <img src={iconUrl} alt="^" />
          </span>
        </div>
      {:else}
        <a class={styles.navButton} href={navUrl(item)}>
          {item.label}
        </a>
      {/if}
    </li>

    {#if toggledItems[key(item)]}
      <slot {item}></slot>
    {/if}
  {/each}
  </ul>
