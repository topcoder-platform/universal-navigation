<script lang="ts">
  import { getPublicPath } from "lib/utils/paths";
  import styles from './SocialIcon.module.scss';

  export let icon: string;
  export let href: string;
  export let alt: string;

  const iconImg = getPublicPath(`/assets/${icon}`);
</script>

<span class={styles.iconWrap}>
  <a href={href} target="_blank" rel="noreferrer">
    <img src={iconImg} alt={alt} />
  </a>
</span>
