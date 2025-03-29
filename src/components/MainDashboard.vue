<script setup lang="ts">
import type Worker from '@/types/Worker'
import { ref } from 'vue'
import ProgressBarTest from './ProgressBarTest.vue'
import WorkerItem from './WorkerItem.vue'

const fakeWorkers: Worker[] = [
  { filename: 'notTheBees.mp4', progress: 100, status: 'Finished' },
  { filename: 'test.mp4', progress: 40, status: 'Running' },
  { filename: 'bushhidthefacts.mp4', progress: 0, status: 'Failed' },
]

const sortSelection = ref('')
</script>

<template>
  <main>
    <header>
      {{ fakeWorkers.filter((x) => ['Finished', 'Failed'].includes(x.status)).length }}/{{
        fakeWorkers.length
      }}
      Workers Finished
      <template v-if="fakeWorkers.filter((x) => x.status == 'Failed').length">
        - {{ fakeWorkers.filter((x) => x.status == 'Finished').length }} Failed
      </template>
      <!-- Todo: Quero imitar os botões de filtragem e sort do Github -->
      <!-- Deve envolver Modals, provavelmente? -->
      <!-- https://vuejs.org/guide/built-ins/teleport.html#basic-usage -->
      | Sort by:
      <select v-model="sortSelection">
        <option>Name</option>
        <option>Progress</option>
        <option>Time Started</option>
        <option>Time Finished</option>
      </select>
    </header>
    <ul>
      <WorkerItem v-for="worker in fakeWorkers" :key="worker.filename" :worker="worker" />
    </ul>
    <ProgressBarTest />
  </main>
</template>
