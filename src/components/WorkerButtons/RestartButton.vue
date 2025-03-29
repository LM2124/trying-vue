<script setup lang="ts">
import type Worker from '@/types/Worker'
import { inject } from 'vue'

const { worker } = defineProps<{
  worker: Worker
}>()

// Reminder: https://vuejs.org/guide/components/props.html#one-way-data-flow
type sigUpdateWorker = (worker: Worker, obj: Partial<Worker>) => void
const updateWorker = inject<sigUpdateWorker>('updateWorker') as sigUpdateWorker

function restartWorker() {
  updateWorker(worker, { status: 'Running', progress: 0 })
}
</script>

<template>
  <button @click="restartWorker" title="Restart">R</button>
</template>
