<script>
  export let x = 0;
  export let y = 0;
  export let content = "";

  $: cellClasses = [
    "w-12 h-12",
    "flex items-center justify-center",
    "transition-all duration-200",
    "select-none",
    "text-sm font-medium",
    "border border-gray-300",
    "hover:bg-[var(--bg-dark-hover)]",
    "bg-white",
    content ? "text-gray-800" : "text-gray-400",
  ]
    .filter(Boolean)
    .join(" ");
</script>

<div class={cellClasses} role="gridcell" title="({x}, {y})">
  {content || `${x},${y}`}
</div>
