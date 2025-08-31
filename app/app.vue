<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt';

// Performance optimizations
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'format-detection', content: 'telephone=no' }
  ],
  link: [
    { rel: 'preload', href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossorigin: '' }
  ]
});
</script>

<template>
  <div class="bg-white dark:bg-black">
    <NuxtLayout name="default">
      <Analytics />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
  will-change: transform, opacity;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.page-enter-active {
  transition-delay: 0.1s;
}
</style>