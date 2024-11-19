<script lang="ts">
  import { onMount } from 'svelte';
  import { getFooterNavItems } from 'lib/functions/footer-navigation.provider';
  import { checkAndLoadFonts } from 'lib/utils/fonts';
  import { allNavItems } from 'lib/config/nav-menu/all-nav-items.config';
  import { handleNavItemAction } from 'lib/utils/nav-item-action.handler';
  import type { NavMenuItem } from 'lib/functions/nav-menu-item.model';
  import styles from './FooterNavigation.module.scss'
  import { getPublicPath, getWordpressUrl } from 'lib/utils/paths';
  import SocialIcon from './SocialIcon.svelte';

  $: logoUrl = getPublicPath(`/assets/inverted-logo.svg`);

  let menuItems: NavMenuItem[];
  $: menuItems = getFooterNavItems()
  const year = new Date().getFullYear();

  onMount(checkAndLoadFonts)
</script>

<footer class={styles.footerWrap}>
  <div class={styles.logo}>
    <a href={allNavItems.home.url} target="_top">
      <img src={logoUrl} class="full-logo" alt="Topcoder" />
    </a>
  </div>
  <div class={styles.footerInner}>
    <section class={styles.footerAbout}>
      <h5>About Topcoder</h5>
      <p>
        Over 25 years ago, Topcoder pioneered competitive coding, transforming coding into a sport by providing a platform for top developers worldwide to compete, enhance skills, and connect within a global community.
        <br>
        <br>
        Today, Topcoder enables businesses to access this vast pool of elite talent, harnessing the skills and expertise of our global community to solve complex problems, drive innovation, and deliver high-quality results faster.
      </p>
    </section>

    <div class={styles.footerNavigation}>
      <ul class={styles.menuSections}>
        {#each menuItems as menuItem, i}
          <li class={styles.menuSection}>
            {#if !!menuItem.label}
              <div class={styles.menuSectionHeading}>
                {menuItem.label}
              </div>
            {/if}
            {#if i === 2}
            <a target="_blank" href={getWordpressUrl('/lets-talk')} rel="noopener noreferrer" class={styles.cta}>
              Talk to an expert
            </a>
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
    </div>
  </div>

  <div class={styles.footerCredis}>
    Copyright © {year} Topcoder. All Rights Reserved.
  </div>
</footer>
