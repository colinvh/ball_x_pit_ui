<script>
  import { ballInformation } from "../../constants/ballInformation.js";
  import Tooltip from "./Tooltip.svelte";

  const { children = null, x, y, ballKey = null } = $props();

  const cellClasses = $derived(
    [
      "p-0.5",
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

  const tooltipText = $derived(
    ballKey && ballInformation[ballKey]
      ? `${ballInformation[ballKey].name}: ${ballInformation[ballKey].description}`
      : ""
  );
</script>

<Tooltip text={tooltipText} delay={100}>
  <div class={cellClasses} role="gridcell">
    {@render children()}
  </div>
</Tooltip>
