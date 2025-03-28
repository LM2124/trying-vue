<script setup lang="ts">
import type Worker from '@/types/Worker'
import WorkerItem from './WorkerItem.vue'

const fakeWorkers: Worker[] = [
  { filename: 'notTheBees.mp4', progress: 100, status: 'Finished' },
  { filename: 'test.mp4', progress: 40, status: 'Running' },
  { filename: 'bushhidthefacts.mp4', progress: 0, status: 'Failed' },
]
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
    </header>
    <ul>
      <WorkerItem v-for="worker in fakeWorkers" :key="worker.filename" :worker="worker" />
    </ul>
  </main>
</template>
