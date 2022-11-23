<script lang="ts">
  import type { AuthUser } from 'lib/app-context';
  import styles from './UserAvatar.module.scss';
  import PopupMenu from "./PopupMenu.svelte";
  import { classnames } from 'lib/utils/classnames';
  
  export let user: AuthUser;
  export let onSignOut: () => void;

  let elRef: HTMLElement;
  let popupIsVisible: boolean;

</script>

<div
  class={classnames(styles.userAvatarWrap, popupIsVisible && styles.popupVisible)}
  bind:this={elRef}
>
  {#if user?.photoURL}
    <img src={user.photoURL} alt={user.initials} />
  {:else}
    <span>{user.initials}</span>
  {/if}
</div>

<PopupMenu targetEl={elRef} bind:isVisible={popupIsVisible}>
  <div class={styles.avatarDropdownMenu}>
    <ul>
      <li>
        <a href={`/members/${user.handle}`}>My Profile</a>
      </li>
      <li>
        <a href="/settins/profile">Settings</a>
      </li>
      <li>
        <a href={"javascript:;"} on:click={onSignOut}>Log Out</a>
      </li>
    </ul>
  </div>
</PopupMenu>