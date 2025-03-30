<script setup lang="ts">
import type Worker from '@/types/Worker'
import ProgressBar from './ProgressBar.vue'
import PauseUnpause from './WorkerButtons/PauseUnpauseButton.vue'
import { computed } from 'vue'
import RestartButton from './WorkerButtons/RestartButton.vue'
import DeleteButton from './WorkerButtons/DeleteButton.vue'

const { worker } = defineProps<{
  worker: Worker
}>()

const barColor = computed(() => {
  // Todo: Turn worker.status into an enum type, maybe
  switch (worker.status) {
    case 'Running':
      return 'darkgreen'
    case 'Idle':
      return 'darkgoldenrod'
    case 'Failed':
      return 'firebrick'
    case 'Finished':
    default:
      return 'green'
  }
})
</script>

<template>
  <li
    style="
      border: 1px solid gray;
      border-radius: 0.25rem;
      margin-bottom: 1rem;
      padding: 0.75rem;
      list-style-type: none;
      display: flex;
      flex-direction: column;
    "
  >
    <div style="margin-bottom: 0.25rem; display: flex">
      <span style="flex-grow: 1"> {{ worker.filename }} </span>
      <span style="align-self: flex-end; min-width: max-content">
        {{ worker.status }}
        <PauseUnpause :worker="worker" />
        <RestartButton :worker="worker" />
        <DeleteButton :worker="worker" />
      </span>
    </div>
    <ProgressBar :progress="worker.progress || 0" :color="barColor"></ProgressBar>
  </li>
</template>
