<script setup lang="ts">
import type FakeWorkerController from '@/controllers/FakeWorkerController'
import type Worker from '@/types/Worker'
import { inject } from 'vue'

const { worker } = defineProps<{
  worker: Worker
}>()

const workerController = inject<FakeWorkerController>('workerController')

// Reminder: https://vuejs.org/guide/components/props.html#one-way-data-flow
function restartWorker() {
  workerController?.updateWorker(worker, { status: 'Running', progress: 0 })
}
</script>

<template>
  <button @click="restartWorker" title="Restart">R</button>
</template>
