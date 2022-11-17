<script>
  import { tick } from 'svelte';
  import { getActiveRoute } from 'lib/functions/marketing-navigation.provider';
  import HoverMenu from '../components/HoverMenu.svelte';
  import { getPublicPath } from '../../utils/paths';
  import SecondaryNav from './SecondaryNav.svelte';
  import styles from './TopNavbar.module.scss';

  const imgUrl = getPublicPath('/assets/logo.svg');

  export let menuItems = [];
  const activeRoute = getActiveRoute(0)

  let hoveredMenuItem;

  const handleMouseover = (menuItem) => async () => {
    if (activeRoute) {
      return
    }

    hoveredMenuItem = menuItem;

    await tick()
    const wraps = [].slice.call(document.querySelectorAll(`[data-key="${menuItem.fullPath}"]`))

    document.addEventListener('mouseover', function mc(ev) {
      const isStillHovering = wraps.some(w => w.contains(ev.target))
      if (isStillHovering) {
        return
      }
      hoveredMenuItem = undefined
      document.removeEventListener('mouseover', mc)
    })
  }

</script>

<nav class={styles.topNavbar}>
  <a class={styles.logo} href="https://topcoder.com" target="_top">
    <img src={imgUrl} class="full-logo" alt="Topcoder.com" />
  </a>
  <div class={styles.mainNav} class:disableHover={!!activeRoute}>
    {#each menuItems as menuItem}
      <a
        class={styles.primaryNavLink}
        class:active={activeRoute?.fullPath === menuItem.fullPath}
        class:hover={hoveredMenuItem?.fullPath === menuItem.fullPath}
        href={menuItem.absUrl}
        target="_top"
        data-key={menuItem.fullPath}
        on:mouseover={handleMouseover(menuItem)}
        on:focus={handleMouseover(menuItem)}
      >
        {menuItem.label}
      </a>
    {/each}
  </div>

  {#if !!hoveredMenuItem}
    <HoverMenu
      menuItems={hoveredMenuItem.children}
      mainDescription={hoveredMenuItem.description}
      key={hoveredMenuItem.fullPath}
    />
  {/if}
</nav>

{#if activeRoute?.children?.length}
  <SecondaryNav menuItems={activeRoute.children}></SecondaryNav>
{/if}