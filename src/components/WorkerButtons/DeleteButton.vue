<script setup lang="ts">
import type FakeWorkerController from '@/controllers/FakeWorkerController'
import type Worker from '@/types/Worker'
import { inject } from 'vue'

const { worker } = defineProps<{
  worker: Worker
}>()

const workerController = inject<FakeWorkerController>('workerController')

// Reminder: https://vuejs.org/guide/components/props.html#one-way-data-flow
function deleteWorker() {
  workerController?.removeWorker(worker)
}
</script>

<template>
  <button @click="deleteWorker" title="Delete">D</button>
</template>
