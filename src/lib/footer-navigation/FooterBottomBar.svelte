<script lang="ts">
  import styles from './FooterBottomBar.module.scss'
  import SocialIcon from './SocialIcon.svelte';

  const atYear = (new Date).getFullYear()
</script>


<div class={styles.footerBar}>
  <div class={styles.footerBarInner}>
    <span class={styles.cTopcoder}>
      © {atYear} Topcoder
    </span>

    <div class={styles.social}>
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
      <SocialIcon
        icon='icon-fb.svg'
        alt='Facebook'
        href='https://www.facebook.com/topcoder'
      />
    </div>
  </div>
</div>
