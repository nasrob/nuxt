<script setup lang="ts">
const { $hello } = useNuxtApp()
</script>

<template>
  <!-- Edit this file to play around with Nuxt but never commit changes! -->
  <div>
    Nuxt 3 Playground
    <h1>{{ $hello('World, from Nas') }}</h1>
  </div>
</template>

<style scoped>

</style>
