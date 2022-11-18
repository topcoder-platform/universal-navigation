<script lang="ts">
  import styles from './HoverMenu.module.scss';
  
  export let mainDescription = '';
  export let menuItems = [];
  export let key;
</script>

<div class={styles.hoverMenuWrap} data-key={key}>
  <div class={styles.hoverMenuInner}>
    <p class={styles.mainDesc}>
      {mainDescription}
    </p>
    <ul class={styles.menuSections}>
      {#each menuItems as menuItem}
        <li class={styles.menuSectionItem}>
          <div class={styles.menuSectionHeading}>
            {menuItem.label}
          </div>
          <p class={styles.menuSectionDesc}>
            {menuItem.description}
          </p>
        </li>
      {/each}
    </ul>
  </div>
</div>