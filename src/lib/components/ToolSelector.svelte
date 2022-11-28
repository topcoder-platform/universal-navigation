<script lang="ts">
  import PopupMenu from 'lib/components/PopupMenu.svelte';
  import { getPublicPath } from "lib/utils/paths";
  import ToolMenu from './ToolMenu.svelte';
  import styles from './ToolSelector.module.scss';


  const imgUrl = getPublicPath('/assets/tool-trigger.svg');

  let elRef: HTMLElement;
  let popupIsVisible: boolean;

</script>

<div
  class={styles.wrap} 
  bind:this={elRef}
>
  <a href={'javascript:;'}>
    <img src={imgUrl} alt="Tool" width="24" height="24" />
  </a>
</div>

<PopupMenu targetEl={elRef} bind:isVisible={popupIsVisible}>
  <ToolMenu />
</PopupMenu>
