<template>
  <div
    id="app"
    class="mx-auto container flex flex-col justify-between min-h-screen"
  >
    <app-navbar></app-navbar>
    <router-view />
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppNavbar from "@/components/layout/AppNavbar";
import AppFooter from "@/components/layout/AppFooter";
export default {
  components: {
    AppNavbar,
    AppFooter
  }
};
</script>

<style>
:root {
  --global-font-family: "Raleway", "Helvetica Neue", -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --global-font-size: 1rem;
  --font-weight-regular: 500;
  --font-weight-bold: 700;
}
html,
body {
  font-family: var(--global-font-family);
  font-size: 16px;
  font-weight: var(--font-weight-regular);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

.no-outline:focus,
.no-outline:active {
  outline: 0;
}
</style>
