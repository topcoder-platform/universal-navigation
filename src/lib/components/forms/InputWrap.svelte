<script lang="ts">
  import { classnames } from 'lib/utils/classnames';
  import styles from './InputWrap.module.scss';

  export let label: string = '';
  export let error: string | undefined = undefined;

</script>

<div class={classnames(styles.inputWrap, $$props.class, error && styles.hasError)}>
  <label>
    <span class={styles.inputLabel}>
      {label}
    </span>
    <slot />
  </label>
</div>
