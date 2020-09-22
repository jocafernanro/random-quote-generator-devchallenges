<template>
  <div class="home max-w-xl mx-auto">
    <app-quote-single></app-quote-single>
  </div>
</template>

<script>
import AppQuoteSingle from "@/components/layout/AppQuoteSingle";
export default {
  name: "Home",
  components: {
    AppQuoteSingle
  }
};
</script>
