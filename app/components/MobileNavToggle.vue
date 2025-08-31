<script setup lang="ts">
defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits(['click'])

function handleClick() {
  emit('click')
}
</script>

<template>
  <div class="cursor-pointer" @click="handleClick">
    <svg v-if="isOpen" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="text-white">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 5L5 19M5 5l14 14" color="currentColor"/>
    </svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="text-white">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5h16M4 12h16M4 19h16" color="currentColor"/>
    </svg>
  </div>
</template>