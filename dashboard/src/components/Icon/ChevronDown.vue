<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 22 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.9975 0L8.5 6.18084L15.0025 0L17 1.90283L8.5 10L0 1.90283L1.9975 0Z"
      fill="#7E7E7E"
    />
  </svg>
</template>

<script>
export default {
  props: {
    size: { type: [String, Number], default: 22 },
    color: { type: String, default: "white" },
  },
};
</script>