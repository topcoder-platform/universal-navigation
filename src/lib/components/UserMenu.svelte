<script lang="ts">
  import type { AuthUser } from 'lib/app-context';
  import { getDefaultHostPath } from 'lib/utils/paths';
  import styles from './UserMenu.module.scss';

  export let user: AuthUser;
  export let onSignOut: () => void;

</script>

<div class={styles.userMenu}>
  <ul>
    <li>
      <a href={getDefaultHostPath(`/members/${user.handle}`)}>My Profile</a>
    </li>
    <li>
      <a href={getDefaultHostPath('/settings/profile')}>Settings</a>
    </li>
    <li>
      <a href={"javascript:;"} on:click={onSignOut}>Log Out</a>
    </li>
  </ul>
</div>
