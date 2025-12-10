<script lang="ts">
  import { classnames } from "lib/utils/classnames";
  import { delay } from "lib/utils/delay";
  import { tick } from "svelte";
  import styles from './ToolNavSeparator.module.scss';

  export let offsetLeft: number = 0;
  export let onClick: () => void;
  export let isHiding = false;
  export let mainMenuVisible = false;

  let isToggled = false;

  async function toggleMainMenu() {
    onClick()
    isHiding = mainMenuVisible
    await tick()
    if (mainMenuVisible) {
      mainMenuVisible = !mainMenuVisible
      await delay(1)
      isHiding = false
      await delay(1)
      isToggled = !isToggled
    } else {
      isToggled = !isToggled
      await delay(500)
      mainMenuVisible = !mainMenuVisible
    }
  }
</script>

<div
  class={classnames('togle-separator', styles.togglerSeparator, isToggled && styles.toggled)}
  style="--margin-left: {offsetLeft}px"
>
  <span
    class={styles.toggleBtn}
    role="button"
    tabindex="0"
    on:click={toggleMainMenu}
    on:keydown={() => {}}
  >
    <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.334413
        8.26569C0.0219931 7.95327 0.0219931 7.44673 0.334413 7.13432L2.96873
        4.5L0.334412 1.86569C0.0219928 1.55327 0.0219928 1.04673 0.334412
        0.734315C0.646832 0.421895 1.15336 0.421895 1.46578 0.734315L4.66578
        3.93431C4.9782 4.24673 4.9782 4.75327 4.66578 5.06569L1.46578
        8.26569C1.15336 8.57811 0.646832 8.5781 0.334413 8.26569Z"
        fill="white"
      />
    </svg>
  </span>
</div>
