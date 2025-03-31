<script setup lang="ts">
import type FakeWorkerController from '@/controllers/FakeWorkerController'
import type Worker from '@/types/Worker'
import { inject } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

const { worker } = defineProps<{
  worker: Worker
}>()

const workerController = inject<FakeWorkerController>('workerController')
// Reminder: https://vuejs.org/guide/components/props.html#one-way-data-flow
function pauseWorker() {
  workerController?.updateWorker(worker, { status: 'Idle' })
}
function resumeWorker() {
  workerController?.updateWorker(worker, { status: 'Running' })
}
</script>

<template>
  <button @click="pauseWorker" title="Pause" v-if="worker.status == 'Running'">
    <FontAwesomeIcon :icon="faPause"></FontAwesomeIcon>
  </button>
  <button @click="resumeWorker" title="Resume" v-else-if="worker.status == 'Idle'">
    <FontAwesomeIcon :icon="faPlay"></FontAwesomeIcon>
  </button>
</template>
