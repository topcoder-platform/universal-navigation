<script lang="ts">
  import InputWrap from "./InputWrap.svelte";
  import styles from './Input.module.scss';

  export let label: string = '';
  export let value: string;
  export let type: 'email'|'text'|'textarea' = 'text';
  export let required: boolean = false;
  export let suppressErrors: boolean = false;

  let dirty$: boolean = false;
  let hasError: boolean = false;
  let isInvalid: boolean = false;

  $: hasError = dirty$ && !suppressErrors && required && !value;
  $: isInvalid = dirty$ && !suppressErrors && required && !value;

  function handleChange(ev: KeyboardEvent) {
    value = (ev.target as HTMLInputElement).value;
    dirty$ = true;
  }
</script>

<InputWrap
  label={label}
  error={hasError ? 'Required' : ''}
  class={styles.inputEl}
>
  {#if type === 'textarea'}
    <textarea value={value} on:keyup={handleChange} />
  {:else}
    <input {type} {value} on:keyup={handleChange}/>
  {/if}
</InputWrap>
