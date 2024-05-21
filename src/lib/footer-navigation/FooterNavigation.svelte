<script lang="ts">
  import { onMount } from 'svelte';
  import { getFooterNavItems } from 'lib/functions/footer-navigation.provider';
  import { checkAndLoadFonts } from 'lib/utils/fonts';
  import { allNavItems } from 'lib/config/nav-menu/all-nav-items.config';
  import { handleNavItemAction } from 'lib/utils/nav-item-action.handler';
  import type { NavMenuItem } from 'lib/functions/nav-menu-item.model';
  import styles from './FooterNavigation.module.scss'
  import { getPublicPath } from 'lib/utils/paths';
  import SocialIcon from './SocialIcon.svelte';

  $: logoUrl = getPublicPath(`/assets/inverted-logo.svg`);

  let menuItems: NavMenuItem[];
  $: menuItems = getFooterNavItems()
  const year = new Date().getFullYear();

  onMount(checkAndLoadFonts)
</script>

<footer class={styles.footerWrap}>
  <a class={styles.logo} href={allNavItems.home.url} target="_top">
    <img src={logoUrl} class="full-logo" alt="Topcoder" />
  </a>
  <div class={styles.footerInner}>
    <section class={styles.footerAbout}>
      <h5>About Topcoder</h5>
      <p>
        Over 25 years ago, Topcoder pioneered competitive coding, transforming coding into a sport by providing a platform for top developers worldwide to compete, enhance skills, and connect within a global community.
        <br>
        <br>
        Much like traditional sports, Topcoder offers a fair playing field, clear rules, and a scoring system. Participants are motivated by the thrill of competition, learning new skills, community engagement, earning credentials, and the chance for recognition and prizes.
      </p>
    </section>

    <div class={styles.footerNavigation}>
      <ul class={styles.menuSections}>
        {#each menuItems as menuItem}
          <li class={styles.menuSection}>
            {#if !!menuItem.label}
              <div class={styles.menuSectionHeading}>
                {menuItem.label}
              </div>
            {/if}
            {#if menuItem.children?.length}
              <ul class={styles.menuSectionEntries}>
                {#each menuItem.children as child}
                  {#if !!child.label}
                    <li class={styles.menuSectionEntry}>
                      <a target={child.target ?? '_top'} use:handleNavItemAction={child} href={child.url} rel="noopener">
                        {child.label}
                      </a>
                    </li>
                  {/if}
                {/each}
              </ul>
            {/if}
          </li>
        {/each}
      </ul>

      <div class={styles.footerSocial}>
        <SocialIcon
          icon='icon-ln.svg'
          alt='LinkedIn'
          href='https://www.linkedin.com/company/topcoder'
        />
        <SocialIcon
          icon='icon-discord.svg'
          alt='Discord'
          href='https://discord.com/invite/topcoder?ref=navb'
        />
        <SocialIcon
          icon='icon-insta.svg'
          alt='Instagram'
          href='https://www.instagram.com/topcoder'
        />
        <SocialIcon
          icon='icon-tw.svg'
          alt='Twitter'
          href='https://twitter.com/topcoder'
        />
        <SocialIcon
          icon='icon-yt.svg'
          alt='YouTube'
          href='https://www.youtube.com/channel/UCFv29ANLT2FQmtvS9DRixNA'
        />
      </div>
    </div>
  </div>

  <div class={styles.footerCredis}>
    Copyright © {year} Topcoder. All Rights Reserved.
  </div>
</footer>
