<script setup lang="ts">
import Toast from 'primevue/toast'
import { useToast } from 'primevue/usetoast'
import { onMounted } from 'vue'
import { setAppToast } from '@/shared/ui/toast'

onMounted(() => {
  const toast = useToast()
  setAppToast(toast)
})
</script>

<template>
  <Toast />
  <RouterView />
</template>
