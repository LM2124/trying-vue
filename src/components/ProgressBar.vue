<script setup lang="ts">
import gsap from 'gsap'
import { reactive, watchEffect } from 'vue'

interface Props {
  progress: number
  smoothingSeconds?: number
  color?: string
}
const { progress = 0, smoothingSeconds = 0.5, color = 'green' } = defineProps<Props>()

// https://vuejs.org/guide/extras/animation#animating-with-watchers
const tweened = reactive({
  number: progress,
})

watchEffect(() => {
  gsap.to(tweened, { number: progress, duration: smoothingSeconds })
})
</script>

<template>
  <slot :tweenedProgress="tweened.number">
    <div class="bar" style="background-color: gray; overflow: hidden">
      <div class="bar" :style="{ backgroundColor: color, width: tweened.number + '%' }">
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
