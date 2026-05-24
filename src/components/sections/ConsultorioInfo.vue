<template>
  <section id="consultorio" class="py-24 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16" v-reveal>
        <h2 class="text-3xl font-bold text-slate-900 sm:text-4xl">Consultorio y Equipamiento</h2>
        <p class="mt-4 text-lg text-slate-600">
          Instalaciones modernas equipadas con tecnología de última generación para brindarte un diagnóstico preciso en un ambiente cómodo y seguro.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Feature 1 -->
        <div v-reveal class="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow cursor-pointer">
          <div class="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-6">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-slate-900 mb-3">Ecografía Avanzada</h3>
          <p class="text-slate-600 leading-relaxed">
            Equipamiento de ultrasonido de alta definición para estudios obstétricos y ginecológicos detallados y precisos.
          </p>
        </div>

        <!-- Feature 2 -->
        <div v-reveal style="transition-delay: 100ms" class="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow cursor-pointer">
          <div class="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-6">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-slate-900 mb-3">Monitoreo Fetal</h3>
          <p class="text-slate-600 leading-relaxed">
            Tecnología especializada para el seguimiento continuo y seguro del bienestar de tu bebé durante el embarazo.
          </p>
        </div>

        <!-- Feature 3 -->
        <div v-reveal style="transition-delay: 200ms" class="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow cursor-pointer">
          <div class="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-6">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-slate-900 mb-3">Espacio Confortable</h3>
          <p class="text-slate-600 leading-relaxed">
            Un ambiente climatizado, diseñado especialmente para tu comodidad, privacidad y tranquilidad en cada visita.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
