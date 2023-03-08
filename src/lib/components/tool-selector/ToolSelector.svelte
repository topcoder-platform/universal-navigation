<script lang="ts">
  import type { AuthUser } from "lib/app-context";
  import PopupMenu from 'lib/components/PopupMenu.svelte';
  import { getPublicPath } from 'lib/utils/paths';
  import { isMobile } from 'lib/utils/window-size.store';
  import MobileMenu from '../MobileMenu.svelte';
  import ToolMenu from './ToolMenu.svelte';
  import styles from './ToolSelector.module.scss';

  const imgUrl = getPublicPath('/assets/tool-trigger.svg');
  const toolsIcons = getPublicPath('/assets/tools/sprite.svg');

  let elRef: HTMLElement;
  let popupIsVisible: boolean;

</script>

<div
  class={styles.wrap}
  bind:this={elRef}
  on:click={() => popupIsVisible = true}
  on:keydown={() => {}}
>
  <link rel="prefetch" href={toolsIcons}>
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
