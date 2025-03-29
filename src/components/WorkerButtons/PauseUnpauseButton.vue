<script setup lang="ts">
import type Worker from '@/types/Worker'
import { inject } from 'vue'

const { worker } = defineProps<{
  worker: Worker
}>()

// Reminder: https://vuejs.org/guide/components/props.html#one-way-data-flow
type sigUpdateWorker = (worker: Worker, obj: Partial<Worker>) => void
const updateWorker = inject<sigUpdateWorker>('updateWorker') as sigUpdateWorker
function pauseWorker() {
  updateWorker(worker, { status: 'Idle' })
}
function resumeWorker() {
  updateWorker(worker, { status: 'Running' })
}
</script>

<template>
  <button @click="pauseWorker" title="Pause" v-if="worker.status == 'Running'">P</button>
  <button @click="resumeWorker" title="Resume" v-else-if="worker.status == 'Idle'">R</button>
</template>
