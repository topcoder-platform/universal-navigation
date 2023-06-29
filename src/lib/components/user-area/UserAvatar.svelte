<script lang="ts">
  import type { AuthUser } from 'lib/app-context';
  import { classnames } from 'lib/utils/classnames';
  import { isMobile } from 'lib/utils/window-size.store';
  import styles from './UserAvatar.module.scss';
  import PopupMenu from '../PopupMenu.svelte';
  import MobileMenu from '../MobileMenu.svelte';
  import UserMenu from './UserMenu.svelte';

  export let user: AuthUser;
  export let onSignOut: () => void;
  export let profileCompletedness: number;

  let elRef: HTMLElement;
  let popupIsVisible: boolean;

  let initials: string = '';
  $: initials = user['initials'] ?? (
    `${user.firstName?.charAt(0) ?? ''}${user.lastName?.charAt(0) ?? ''}`
  );

</script>

<div
  class={classnames(styles.userAvatarWrap, popupIsVisible && styles.popupVisible)}
  bind:this={elRef}
  on:click={() => popupIsVisible = true}
  on:keydown={() => {}}
>
  {#if user?.photoUrl}
    <img src={user.photoUrl} alt={initials} />
  {:else}
    <span>{initials}</span>
  {/if}
  <slot></slot>
</div>

{#if !$isMobile}
<PopupMenu targetEl={elRef} bind:isVisible={popupIsVisible}>
  <UserMenu
    onSignOut={onSignOut}
    user={user}
    profileCompletedness={profileCompletedness}
  />
</PopupMenu>
{:else if popupIsVisible}
  <MobileMenu direction="y" handleClose={() => popupIsVisible = false}>
    <UserMenu
      onSignOut={onSignOut}
      user={user}
      profileCompletedness={profileCompletedness}
    />
  </MobileMenu>
{/if}
