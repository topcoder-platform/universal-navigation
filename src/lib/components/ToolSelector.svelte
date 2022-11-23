<script lang="ts">
  import { getPublicPath } from "lib/utils/paths";
  import styles from './ToolSelector.module.scss';


  const imgUrl = getPublicPath('/assets/tool-trigger.svg');
</script>

<div class={styles.wrap}>
  <a href={'javascript:;'}>
    <img src={imgUrl} alt="Tool" width="24" height="24" />
  </a>
</div>
