<script setup lang="ts">
import { computed, provide } from 'vue'
import ProgressBarTest from './ProgressBarTest.vue'
import WorkerItem from './WorkerItem.vue'
import FakeWorkerController from '@/controllers/FakeWorkerController'

const fakeWorkerController = new FakeWorkerController(250)
const fakeWorkers = computed(() => fakeWorkerController.fakeWorkers.value)
provide('workerController', fakeWorkerController)
</script>

<template>
  <main>
    <header>
      {{
        fakeWorkers.filter((x) => ['Finished', 'Failed'].includes(x.status)).length +
        '/' +
        fakeWorkers.length
      }}
      Workers Finished
      <template v-if="fakeWorkers.filter((x) => x.status == 'Failed').length">
        - {{ fakeWorkers.filter((x) => x.status == 'Failed').length }} Failed
      </template>
      <!-- Todo: Quero imitar os botões de filtragem e sort do Github -->
      <!-- Deve envolver Modals, provavelmente? -->
      <!-- https://vuejs.org/guide/built-ins/teleport.html#basic-usage -->
    </header>
    <WorkerItem v-for="worker in fakeWorkers" :key="worker.filename" :worker="worker" />
    <!-- Todo: Botão de criar um novo Worker -->
    <!-- Esse com certeza vai envolver modals -->
    <ProgressBarTest />
  </main>
</template>
