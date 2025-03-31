<script setup lang="ts">
import type FakeWorkerController from '@/controllers/FakeWorkerController'
import type Worker from '@/types/Worker'
import { inject } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';

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
  <button @click="restartWorker" title="Restart">
    <FontAwesomeIcon :icon="faRotateLeft"></FontAwesomeIcon>
  </button>
</template>
