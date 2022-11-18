<script lang="ts">
  import { classnames } from 'lib/utils/classnames';
  import styles from './Button.module.scss'

  type ButtonVariant = 'primary'|''
  
  export let label: string;
  export let onClick: () => void = () => {};
  export let variant: ButtonVariant = ''

</script>

<button class={classnames(styles.btn, variant && styles[variant])} on:click={onClick}>
  {label}
</button>