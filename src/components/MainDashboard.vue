<script setup lang="ts">
import type Worker from '@/types/Worker'
import { provide, ref, type Ref } from 'vue'
import ProgressBarTest from './ProgressBarTest.vue'
import WorkerItem from './WorkerItem.vue'

const fakeWorkers: Ref<Worker[]> = ref([
  { filename: 'notTheBees.mp4', progress: 100, status: 'Finished' },
  { filename: 'test.mp4', progress: 40, status: 'Running' },
  { filename: 'bushhidthefacts.mp4', progress: 10, status: 'Failed' },
])

// Using Provide/Inject so I can avoid bubbling up events
// from WorkerButtons to WorkerItem to MainDashboard.
function updateWorker(worker: Worker, obj: Partial<Worker>) {
  // Since the Workers are fake for now, this is perfectly fine
  Object.assign(worker, obj)
  // If the objects were always correctly passed by
  // reference, the reactivity should 'just work™'
}
provide('updateWorker', updateWorker)

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
    <!-- <ul> -->
    <WorkerItem v-for="worker in fakeWorkers" :key="worker.filename" :worker="worker" />
    <!-- </ul> -->
    <ProgressBarTest />
  </main>
</template>
