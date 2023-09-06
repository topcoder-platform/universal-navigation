<script lang="ts">
  import { AUTH_USER_ROLE } from 'lib/config/auth';
  import { checkUserAppRole } from 'lib/functions/user-profile.provider';
  import { toolCtaNavItems } from 'lib/functions/tool-navigation.provider'
  import LinksMenu from 'lib/components/LinksMenu.svelte';

  export let isAuthenticated: boolean;
</script>

{#if !isAuthenticated || checkUserAppRole(AUTH_USER_ROLE.customer)}
  <LinksMenu
    menuItems={toolCtaNavItems}
    style='cta'
  />
{/if}
