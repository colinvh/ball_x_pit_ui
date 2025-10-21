<script>
  const { children, text, delay = 300 } = $props();

  let showTooltip = $state(false);
  let timeoutId = $state(null);

  function handleMouseEnter() {
    timeoutId = setTimeout(() => {
      showTooltip = true;
    }, delay);
  }

  function handleMouseLeave() {
    if (timeoutId) clearTimeout(timeoutId);
    showTooltip = false;
  }
</script>

<div class="relative inline-block">
  <div
    role="button"
    tabindex="0"
    onmouseenter={handleMouseEnter}
    onmouseleave={handleMouseLeave}
  >
    {@render children()}
  </div>

  {#if showTooltip && text}
    <div
      role="tooltip"
      class="absolute z-50 px-2 py-1 text-sm text-white bg-gray-900 rounded shadow-lg bottom-full left-1/2 transform -translate-x-1/2 mb-1 whitespace-nowrap max-w-xs break-words"
    >
      {text}
      <div
        class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"
      ></div>
    </div>
  {/if}
</div>
