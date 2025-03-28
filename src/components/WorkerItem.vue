<script setup lang="ts">
import type Worker from '@/types/Worker'

defineProps<{
  worker: Worker
}>()
</script>

<template>
  <li>{{ worker.progress }}% - {{ worker.filename }} - {{ worker.status }}</li>
</template>
