<script>
  const { children = null, x, y } = $props();

  const _cellClasses = $derived(
    [
      "w-13 h-13",
      "flex items-center justify-center",
      "transition-all duration-200",
      "select-none",
      "text-sm font-medium",
      "border border-[var(--border-dark)]",
      "hover:bg-[var(--bg-dark-hover)]",
      children ? "text-gray-800" : "text-gray-400",
    ]
      .filter(Boolean)
      .join(" ")
  );
</script>

<div class={_cellClasses} role="gridcell" title="({x}, {y})">
  {@render children()}
</div>
