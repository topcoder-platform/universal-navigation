<script lang="ts">
  export let progress = 0;
  let offset = 0;
  // 94.247 is the circumference of the svg circle
  const c = 94.247;

  // double the circle circumference minus the progress length
  $: offset = c * 2 - (progress * c / 100);

</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="-1 -1 34 34"
  style="transform: rotate(-90deg);"
>
  <defs>
    <linearGradient id="spinner-secondHalf">
      <stop offset="0%" stop-color="rgba(255,196,61,1)" />
      <stop offset="100%" stop-color="rgba(244,109,96,1)" />
    </linearGradient>
    <linearGradient id="spinner-firstHalf">
      <stop offset="0%" stop-color="rgba(255,196,61,1)" />
      <stop offset="100%" stop-color="rgba(244,109,96,1)" />
    </linearGradient>
  </defs>

  <g>
    <path
      stroke="url(#spinner-secondHalf)"
      stroke-width="5"
      fill="none"
      transform="rotate(-90 16 16)"
      d="M16 2 A14 14 0 1 1 16 30 A14 14 0 1 1 16 2" />
    <path
      stroke="url(#spinner-firstHalf)"
      stroke-width="5"
      fill="none"
      transform="rotate(-90 16 16)"
      d="M16 2 A14 14 0 1 1 16 30 A14 14 0 1 1 16 2" />

    <circle
      cx="16"
      cy="16"
      r="15"
      fill="none"
      stroke="#3d3d3d"
      stroke-width="4.25"
      stroke-dasharray={c}
      stroke-dashoffset={offset}
    />
  </g>
</svg>
