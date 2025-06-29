<script lang="ts">
  import { classnames } from 'lib/utils/classnames';
  import styles from './Button.module.scss'

  type ButtonVariant = 'primary'|'primary-link'|'outline'|'contrast'|''

  let className = '';
  export {className as class};
  export let label: string;
  export let onClick: (ev: MouseEvent) => void = () => {};
  export let variant: ButtonVariant = ''
  export let disabled: boolean = false;
  export let size: 'sm'|'md'|'md-0' = 'sm';
  export let ref: HTMLElement = null;

</script>

<button
  bind:this={ref}
  class={
    classnames(
      className,
      styles.btn,
      variant && styles[variant],
      size && styles[size],
    )
  }
  on:click={onClick}
  disabled={disabled}
>
  {label}
</button>
