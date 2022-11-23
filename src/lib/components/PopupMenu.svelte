<script lang="ts">
  import { onMount, tick } from 'svelte';
  import { fly } from 'svelte/transition';
  import { delay } from 'lib/utils/delay';
  import styles from './PopupMenu.module.scss';
  import { classnames } from 'lib/utils/classnames';

  export let targetEl: HTMLElement | undefined
  let exTargetEl: HTMLElement | undefined;
  const uuidTargetKey = `${Date.now()}-${Math.random()}`

  export let isVisible: boolean = false;

  /**
   * Handle mouse over target element
  */
  const handleMouseover = async () => {
    // save the target element for which we handle the events
    const target = targetEl;

    // make the popup element visible
    isVisible = true

    // await for framework to render the element into DOM
    await tick()

    // fetch all elements that match the targetKey (targetEl & popup menu)
    const wraps: HTMLElement[] = [].slice.call(
      document.querySelectorAll(`[data-target-key="${uuidTargetKey}"]`)
    )

    // store when the popup is about to hide because user hovered outside
    let willHide: boolean;

    // listen to mouse over events on the entire document
    // when the user is outside the target element, we hide the popup
    document.addEventListener('mouseover', async function mc(ev) {
      // check to see if user is still hovering the targetEl or the popup
      const isStillHovering = wraps.some(w => w.contains(ev.target as Node))
      // if user isn't hovering the target/popup, the popup is about to hide
      willHide = !isStillHovering;

      // do nothing if user is still hovering
      if (isStillHovering) {
        return
      }

      // provide a delay before taking any action (better UX)
      await delay(200)

      // if the user changed its actions and is now still hovering our target elements
      // ot if the targetElement is now different
      // do nothing
      if (!willHide || target !== targetEl) {
        return
      }

      // hide the popup menu
      isVisible = false
      // remove the document mouse listener
      document.removeEventListener('mouseover', mc)
    })
  }

  /**
   * Add targetKey and mouse event listeners
   */
  function bindEvents() {
    // if there was previously a different target element
    // make sure to unbind the targetKey & event listeners
    if (exTargetEl && targetEl !== exTargetEl) {
      unBindEvents(exTargetEl)
    }

    // if there's no target element, do nothing
    if (!targetEl) {
      return
    }

    targetEl.addEventListener('mouseenter', handleMouseover)
    targetEl.dataset.targetKey = uuidTargetKey
    exTargetEl = targetEl;
  }

  /**
   * Remove the targetKey & mouse event listeners
   * @param el
   */
  function unBindEvents(el: HTMLElement = targetEl) {
    
    if (!el) {
      return
    }

    el.dataset.targetKey = undefined
    el.removeEventListener('mouseenter', handleMouseover)
  }
  
  // each time the targetEl changes, 
  // call bindEvents to listen for mouse events
  $: !!targetEl && bindEvents()

  // unbind all events on unmount
  onMount(() => unBindEvents)
</script>

{#if isVisible}
  <div
    class={classnames(styles.popupMenuWrap, $$props.class)}
    data-target-key={uuidTargetKey}
    transition:fly={{y: 5, duration: 200}}
  >
    <div class={styles.popupMenuInner}>
      <slot></slot>
    </div>
  </div>
{/if}