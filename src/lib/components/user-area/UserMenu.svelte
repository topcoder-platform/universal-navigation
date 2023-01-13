<script lang="ts">
    import type { AuthUser } from "lib/app-context";
    import { getWordpressUrl } from "lib/utils/paths";
    import styles from "./UserMenu.module.scss";

    export let user: AuthUser;
    export let onSignOut: () => void;
</script>

<div class={styles.userMenu}>
    <ul>
        <li>
            <a href={getWordpressUrl(`/members/${user.handle}`)}>My Profile</a>
        </li>
        <li>
            <a href={getWordpressUrl("/settings/profile")}>Account Settings</a>
        </li>
        <li>
            <a href={"javascript:;"} on:click={onSignOut}>Log Out</a>
        </li>
    </ul>
</div>
