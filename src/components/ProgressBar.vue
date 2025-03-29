<script setup lang="ts">
import gsap from 'gsap'
import { reactive, watchEffect } from 'vue'

interface Props {
  progress: number
  smoothingSeconds?: number
}
const { progress = 0, smoothingSeconds = 0.5 } = defineProps<Props>()

// https://vuejs.org/guide/extras/animation#animating-with-watchers
const tweened = reactive({
  number: 0,
})

watchEffect(() => {
  gsap.to(tweened, { number: progress || 0, duration: smoothingSeconds })
})
</script>

<template>
  <slot :tweenedNumber="tweened.number">
    <div class="bar" style="background-color: gray; overflow: hidden">
      <div class="bar" style="background-color: green" :style="{ width: tweened.number + '%' }">
        <span style="padding-inline: 1rem; font-weight: bold">
          {{ tweened.number.toFixed(0) }}%
        </span>
      </div>
    </div>
  </slot>
</template>

<style scoped>
/* Could have used an object and passed it to inline style too, I guess */
.bar {
  height: 1.5rem;
  border-radius: 1rem;
  text-align: center;
  align-content: center;
}
</style>
