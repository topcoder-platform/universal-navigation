<script lang="ts">
  import type { AuthUser } from "lib/app-context";
  import { ACCOUNT_SETTINGS_HOST, CUSTOMER_LOGIN, PROFILE_HOST, APP_AUTH_CONNECTOR } from "lib/config";
  import { routeMatchesUrl } from "lib/utils/routes";
  import { resolveNavigationType } from "lib/utils/navigation-type";
  import styles from "./UserMenu.module.scss";

  export let user: AuthUser;
  export let onSignOut: () => void;
  export let profileCompletionPerc: number | undefined;

  const topgear = resolveNavigationType('tool', window.location.hostname) === 'topgear';
  $: MY_PROFILE_URL = topgear ? 'https://topgear-app.wipro.com/user-details' : `${PROFILE_HOST}/${user.handle}`;
  const PAYMENTS_URL = 'https://topgear-app.wipro.com/my_payments';
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
    {#if topgear}
      <li>
        <a href={PAYMENTS_URL} target="_blank" rel="noopener noreferrer">Payments</a>
      </li>
    {/if}
    <li>
      <a
        href={ACC_SETTINGS_URL}
        class:active={isActive(ACC_SETTINGS_URL)}
      >Account Settings</a>
    </li>
    <li>
      <a
        href={"javascript:;"}
        on:click={onSignOut}
      >Log Out</a>
    </li>
  </ul>
</div>
