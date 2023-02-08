<script lang="ts">
  import SupportModal from "./SupportModal.svelte";

  export let isVisible = '';

</script>

<SupportModal
  bind:isVisible={isVisible}
  description='Please describe the bug'
>
  <svelte:fragment slot="description">
    <p>
      Oops, you've found a bug!
    </p>
    <p>You can report the issue here and our team will get it resolved right away.</p>
  </svelte:fragment>
</SupportModal>
