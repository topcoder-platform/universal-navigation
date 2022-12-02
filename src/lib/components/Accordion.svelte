<script lang="ts">
  import type { NavMenuItem } from 'lib/functions/nav-menu-item.model';
  import { classnames } from 'lib/utils/classnames';
  import { getPublicPath, navUrl } from 'lib/utils/paths';
  import styles from './Accordion.module.scss';

  export let items: NavMenuItem[];
  export let style: 'primary'|'secondary'|undefined = undefined;

  const activeItems: {[key: string]: boolean} = {};
  const iconUrl = getPublicPath(`/assets/icon-dropdown.svg`);

  function key(item: NavMenuItem) {
    return item.label
  }

  function toggleItem(item: NavMenuItem, toggle?: boolean) {
    activeItems[key(item)] = typeof toggle === 'boolean' ? toggle : !activeItems[item.label];
  }
</script>

<ul class={classnames(styles.accordionWrap, 'uni-accordion', style)}>
  {#each items as item}
    <li class={
      classnames(
        styles.item,
        activeItems[key(item)] && styles.isActive,
        'uni-accordion-item',
        item.type === 'cta' && 'cta-type'
      )
    }>
      {#if item.type !== 'cta'}
        <div class={classnames(styles.itemHead, 'uni-accordion-item--head')}>
          <a
            href={item.url ?? navUrl(item)}
            class={classnames(styles.itemLabel, 'uni-accordion-item--label')}
          >
            {item.label}
          </a>
          <span class={styles.itemTrigger} on:click={() => toggleItem(item)} on:keydown={() => {}}>
            <img src={iconUrl} alt="^" />
          </span>
        </div>
      {:else}
        <a class={styles.navButton} href={item.url ?? navUrl(item)}>
          {item.label}
        </a>
      {/if}
    </li>

    {#if activeItems[key(item)]}
      <slot {item}></slot>
    {/if}
  {/each}
  </ul>
