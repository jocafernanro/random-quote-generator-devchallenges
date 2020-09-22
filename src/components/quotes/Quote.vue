<template>
  <blockquote class="text-2xl px-20 mb-16 border-l-4 border-yellow-300">
    {{ text }}
  </blockquote>
</template>

<script>
export default {
  name: "Quote",
  props: {
    text: String
  }
};
</script>

<style scoped></style>
