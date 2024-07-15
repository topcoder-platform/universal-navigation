<script lang="ts">
  import type { AuthUser } from "lib/app-context";
  import { ACCOUNT_SETTINGS_HOST, CUSTOMER_LOGIN, PROFILE_HOST } from "lib/config";
  import { routeMatchesUrl } from "lib/utils/routes";
  import styles from "./UserMenu.module.scss";

  export let user: AuthUser;
  export let onSignOut: () => void;
  export let profileCompletionPerc: number | undefined;

  const MY_PROFILE_URL = `${PROFILE_HOST}/${user.handle}`;
  const ACC_SETTINGS_URL = `${ACCOUNT_SETTINGS_HOST}`;

  function isActive(url: string): boolean {
    if (typeof window === 'undefined') {
      return false
    }

    const locationHref = `${window.location.origin}${window.location.pathname}`
    return routeMatchesUrl(locationHref, {url});
  }
</script>

<div class={styles.userMenu}>
  <ul>
    <li class:nudge={profileCompletionPerc !== undefined && profileCompletionPerc < 100}>
      <a
        href={MY_PROFILE_URL}
        class:active={isActive(MY_PROFILE_URL)}
      >My Profile</a>
    </li>
    <li>
      <a
        href={ACC_SETTINGS_URL}
        class:active={isActive(ACC_SETTINGS_URL)}
      >Account Settings</a>
    </li>
    <li>
      <a
        href={`${CUSTOMER_LOGIN}/login`}
      >Log in as Customer</a>
    </li>
    <li>
      <a
        href={"javascript:;"}
        on:click={onSignOut}
      >Log Out</a>
    </li>
  </ul>
</div>
