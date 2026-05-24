<script setup>
import Header from '../components/layout/Header.vue'
import HeroSection from '../components/sections/HeroSection.vue'
import ServicesList from '../components/sections/ServicesList.vue'
import ConsultorioInfo from '../components/sections/ConsultorioInfo.vue'
import AboutDoctor from '../components/sections/AboutDoctor.vue'
import CtaWhatsapp from '../components/sections/CtaWhatsapp.vue'
import Footer from '../components/layout/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-slate-50">
    <Header />
    <main class="flex-grow pt-20">
      <HeroSection />
      <ServicesList />
      <ConsultorioInfo />
      <AboutDoctor />
      <CtaWhatsapp />
    </main>
    <Footer />
  </div>
</template>
