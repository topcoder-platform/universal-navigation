<script lang="ts">
    import type { AuthUser } from "lib/app-context";
    import { COMMUNITY_HOST } from "lib/config/nav-menu";
    import styles from "./UserMenu.module.scss";

    export let user: AuthUser;
    export let onSignOut: () => void;
</script>

<div class={styles.userMenu}>
    <ul>
        <li>
            <a href={`${COMMUNITY_HOST}/members/${user.handle}`}>My Profile</a>
        </li>
        <li>
            <a href={`${COMMUNITY_HOST}/settings/profile`}>Account Settings</a>
        </li>
        <li>
            <a href={"javascript:;"} on:click={onSignOut}>Log Out</a>
        </li>
    </ul>
</div>
