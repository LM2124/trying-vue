<script setup lang="ts">
import { ref } from 'vue'
import ProgressBar from './ProgressBar.vue'

const pickedProgress = ref(0)
const pickedSmoothing = ref(0.5)
</script>

<template>
  <p>Progress: <ProgressBar :progress="pickedProgress" :smoothing-seconds="pickedSmoothing" /></p>
  <p>
    Change Progress:
    <template v-for="opt in [0, 20, 40, 60, 80, 100]" :key="opt">
      <input type="radio" :id="opt.toString()" :value="opt" v-model="pickedProgress" />
      <label :for="opt.toString()">{{ opt + ' ' }}</label>
    </template>
  </p>
  <p>
    Change Smoothing:
    <template v-for="opt in [0, 0.25, 0.5, 0.75, 1.0, 2.0]" :key="opt">
      <input type="radio" :id="opt.toString()" :value="opt" v-model="pickedSmoothing" />
      <label :for="opt.toString()">{{ opt + ' ' }}<nbsp /></label>
    </template>
  </p>
</template>
