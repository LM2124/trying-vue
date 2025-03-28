<script setup lang="ts">
import gsap from 'gsap'
import { computed, reactive, watch } from 'vue'

interface Props {
  progress: number
  smoothingSeconds?: number
}
const { progress = 0, smoothingSeconds = 0.5 } = defineProps<Props>()

// https://vuejs.org/guide/extras/animation#animating-with-watchers
const number = computed(() => progress)
const tweened = reactive({
  number: 0,
})

watch(number, (n) => {
  gsap.to(tweened, { number: Number(n) || 0, duration: smoothingSeconds })
})
</script>

<template>
  <slot :tweenedNumber="tweened.number"> {{ tweened.number.toFixed(0) }}% </slot>
</template>
