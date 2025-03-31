<script setup lang="ts">
import type FakeWorkerController from '@/controllers/FakeWorkerController'
import type Worker from '@/types/Worker'
import { inject } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

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
  <button @click="deleteWorker" title="Delete">
    <FontAwesomeIcon :icon="faTrashAlt" style="color: firebrick"></FontAwesomeIcon>
  </button>
</template>
