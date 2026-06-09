<script setup>
import { onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'
import HomeView from './views/HomeView.vue'
import FloatingWhatsapp from './components/layout/FloatingWhatsapp.vue'

let lenis
let rafId

onMounted(() => {
  lenis = new Lenis({
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    infinite: false,
  })

  function raf(time) {
    lenis.raf(time)
    rafId = requestAnimationFrame(raf)
  }

  rafId = requestAnimationFrame(raf)
})

onUnmounted(() => {
  if (lenis) {
    lenis.destroy()
  }
  if (rafId) {
    cancelAnimationFrame(rafId)
  }
})
</script>

<template>
  <HomeView />
  <FloatingWhatsapp />
</template>
