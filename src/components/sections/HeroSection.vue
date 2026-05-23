<template>
  <section id="inicio" class="relative pt-20 pb-28 sm:pt-32 sm:pb-36 overflow-hidden">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            <a href="#contacto" class="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 hover:shadow-lg hover:-translate-y-0.5 transition-all w-full sm:w-auto">
              Contactar por WhatsApp
            </a>
            <a href="#especialidades" class="inline-flex items-center justify-center px-8 py-3.5 border-2 border-slate-200 text-base font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all w-full sm:w-auto mt-3 sm:mt-0">
              Conocer Especialidades
            </a>
          </div>
        </div>

        <!-- Placeholder Fotografía -->
        <div v-reveal style="transition-delay: 200ms" class="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6 relative">
          <div class="relative mx-auto w-full rounded-2xl shadow-xl lg:max-w-md overflow-hidden aspect-[4/5] bg-slate-100 flex items-center justify-center border border-slate-200">
            <!-- FOTO MÉDICA PLACEHOLDER -->
            <div class="absolute inset-0 bg-primary-50 animate-pulse"></div>
            <div class="relative z-10 flex flex-col items-center justify-center text-slate-400">
              <svg class="w-16 h-16 mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span class="text-sm font-medium tracking-wide">Fotografía del Dr. Gabriel Pellegrini</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
