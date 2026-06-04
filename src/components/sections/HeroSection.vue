<script setup>
import { externalLinks } from '../../config/links.js'
</script>

<template>
  <section id="inicio" class="relative min-h-[calc(100dvh-5rem)] flex items-center pt-10 pb-16 sm:pt-16 sm:pb-20 overflow-hidden z-0">
    <!-- Video Background -->
    <div class="absolute inset-0 w-full h-full -z-20">
      <video 
        autoplay 
        loop 
        muted 
        playsinline 
        class="w-full h-full object-cover"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>
    </div>
    <!-- Overlay para mantener la legibilidad del texto -->
    <div class="absolute inset-0 bg-white/70 backdrop-blur-[2px] -z-10"></div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <div class="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
        <!-- Contenido de Texto -->
        <div v-reveal class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
          <div class="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-primary-700 bg-primary-50 mb-6">
            <span class="flex w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
            Atención presencial en Quilmes, Zona Sur
          </div>
          <h1 class="text-4xl tracking-tight font-bold text-slate-900 sm:text-5xl md:text-6xl lg:leading-tight">
            Cuidado integral y <span class="text-primary-600">respetuoso</span> para la salud de la mujer
          </h1>
          <p class="mt-6 text-lg text-slate-600 leading-relaxed">
            Te acompaño en cada etapa de tu vida con profesionalismo, empatía y un entorno seguro donde siempre serás escuchada. Tu bienestar es mi prioridad.
          </p>
          <div class="mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
            <a :href="externalLinks.whatsapp" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 hover:shadow-lg hover:-translate-y-0.5 transition-all w-full sm:w-auto">
              Contactar por WhatsApp
            </a>
            <a href="#especialidades" class="inline-flex items-center justify-center px-8 py-3.5 border-2 border-slate-200 text-base font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all w-full sm:w-auto mt-3 sm:mt-0">
              Conocer Especialidades
            </a>
          </div>
        </div>

        <!-- Fotografía del Doctor -->
        <div v-reveal style="transition-delay: 200ms" class="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6 relative">
          <div class="relative mx-auto w-full rounded-2xl shadow-xl lg:max-w-md overflow-hidden aspect-[4/5] bg-slate-100 border border-slate-200">
            <img src="/images/doctor.png" alt="Dr. Gabriel Pellegrini" class="w-full h-full object-cover object-center" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
