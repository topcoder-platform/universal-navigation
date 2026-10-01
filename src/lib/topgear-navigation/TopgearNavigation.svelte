<script lang="ts">
  import { onMount } from 'svelte';
  import { checkAndLoadFonts } from 'lib/utils/fonts';
  import { pathname } from 'lib/utils/location.store';
  import UserArea from 'lib/components/user-area/UserArea.svelte';
  import wiproLogo from './assets/wipro.png';
  import topcoderLogo from './assets/topcoder.svg';
  import topgearLogo from './assets/topgear.png';
  import styles from './TopgearNavigation.module.scss';

  const challengesUrl = `${window.location.origin}/opportunities/challenge`;
  $: challengesActive = $pathname?.startsWith('/opportunities') || $pathname === '/challenges';

  onMount(checkAndLoadFonts);
</script>

<header class={styles.header}>
  <div class={styles.branding}>
    <a href="https://www.wipro.com/" aria-label="Wipro home">
      <img class={styles.wipro} src={wiproLogo} alt="Wipro" />
    </a>
    <a href="https://www.topcoder.com/" aria-label="Topcoder home">
      <img class={styles.topcoder} src={topcoderLogo} alt="Topcoder" />
    </a>
  </div>
  <nav aria-label="Topgear" class={styles.links}>
    <a href="https://topgear-app.wipro.com">Home</a>
    <a href={challengesUrl} aria-current={challengesActive ? 'page' : undefined}>Challenges</a>
  </nav>
  <div class={styles.user}>
    <UserArea showToolSelector={false} />
  </div>
  <img class={styles.topgear} src={topgearLogo} alt="Topgear" />
</header>
