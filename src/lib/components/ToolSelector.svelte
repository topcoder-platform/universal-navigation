<script lang="ts">
  import PopupMenu from 'lib/components/PopupMenu.svelte';
  import { getPublicPath } from "lib/utils/paths";
  import { isMobile } from 'lib/utils/window-size.store';
  import MobileMenu from './MobileMenu.svelte';
  import ToolMenu from './ToolMenu.svelte';
  import styles from './ToolSelector.module.scss';
  import TopNavbar from './TopNavbar.svelte';


  const imgUrl = getPublicPath('/assets/tool-trigger.svg');

  let elRef: HTMLElement;
  let popupIsVisible: boolean;

</script>

<div
  class={styles.wrap}
  bind:this={elRef}
  on:click={() => popupIsVisible = true}
  on:keydown={() => {}}
>
  <a href={'javascript:;'}>
    <img src={imgUrl} alt="Tool" width="24" height="24" />
  </a>
</div>

{#if !$isMobile}
  <PopupMenu targetEl={elRef} bind:isVisible={popupIsVisible}>
    <ToolMenu />
  </PopupMenu>
{:else if popupIsVisible}
  <MobileMenu direction="y" handleClose={() => popupIsVisible = false}>
    <ToolMenu />
  </MobileMenu>
{/if}
