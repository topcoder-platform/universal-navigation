<script lang="ts">
  import type { AuthUser } from 'lib/app-context';
  import styles from './UserAvatar.module.scss';

  export let onClick: () => void = () => {};
  export let user: AuthUser;

</script>

<div class={styles.userAvatarWrap} on:click={onClick} on:keydown={() => {}}>
  {#if user?.photoURL}
    <img src={user.photoURL} alt={user.initials} />
  {:else}
    <span>{user.initials}</span>
  {/if}
</div>