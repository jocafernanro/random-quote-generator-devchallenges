<template>
  <blockquote
    class="sm:text-3xl text-2xl sm:pl-20 pl-8 mb-16 border-l-8 border-yellow-300 leading-tight sm:leading-snug"
  >
    “{{ text }}”
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
