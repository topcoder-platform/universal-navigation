<script lang="ts">
  import SupportModal from 'lib/components/modals/SupportModal.svelte';
import styles from './FooterBottomBar.module.scss'
  import SocialIcon from './SocialIcon.svelte';

  const atYear = (new Date).getFullYear()
  let supportVisible=false;
</script>


<div class={styles.footerBar}>
  <SupportModal bind:isVisible={supportVisible} />
  <span class={styles.cTopcoder} on:click={() => supportVisible=true}>
    © {atYear} Topcoder
  </span>

  <div class={styles.social}>
    <SocialIcon
      icon='icon-fb.svg'
      alt='Facebook'
      href='https://www.facebook.com/topcoder'
    />
    <SocialIcon
      icon='icon-yt.svg'
      alt='YouTube'
      href='https://www.youtube.com/channel/UCFv29ANLT2FQmtvS9DRixNA'
    />
    <SocialIcon
      icon='icon-ln.svg'
      alt='LinkedIn'
      href='https://www.linkedin.com/company/topcoder'
    />
    <SocialIcon
      icon='icon-tw.svg'
      alt='Twitter'
      href='https://twitter.com/topcoder'
    />
    <SocialIcon
      icon='icon-insta.svg'
      alt='Instagram'
      href='https://www.instagram.com/topcoder'
    />
  </div>
</div>
