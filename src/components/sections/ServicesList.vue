<template>
  <section id="especialidades" class="py-24 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div v-reveal class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl font-bold text-slate-900 sm:text-4xl">Especialidades y Prácticas</h2>
        <p class="mt-4 text-lg text-slate-600">
          Brindamos un enfoque preventivo y un tratamiento personalizado adaptado a tus necesidades clínicas y emocionales.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Servicio 1 -->
        <div v-reveal class="group relative bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100 cursor-pointer">
          <div class="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-slate-900 mb-3">Control Anual</h3>
          <p class="text-slate-600 text-sm leading-relaxed">
            Evaluación ginecológica completa para la prevención y detección temprana de patologías. PAP, colposcopía y examen mamario.
          </p>
        </div>

        <!-- Servicio 2 -->
        <div v-reveal style="transition-delay: 100ms" class="group relative bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100 cursor-pointer">
          <div class="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-slate-900 mb-3">Obstetricia</h3>
          <p class="text-slate-600 text-sm leading-relaxed">
            Seguimiento integral del embarazo desde la primera semana hasta el parto. Cuidamos de vos y de tu bebé con el mayor respeto.
          </p>
        </div>

        <!-- Servicio 3 -->
        <div v-reveal style="transition-delay: 200ms" class="group relative bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100 cursor-pointer">
          <div class="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-slate-900 mb-3">Planificación</h3>
          <p class="text-slate-600 text-sm leading-relaxed">
            Asesoramiento profesional sobre métodos anticonceptivos y planificación familiar. Toma de decisiones informadas y seguras.
          </p>
        </div>

        <!-- Servicio 4 -->
        <div v-reveal style="transition-delay: 300ms" class="group relative bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100 cursor-pointer">
          <div class="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-slate-900 mb-3">Ecografías</h3>
          <p class="text-slate-600 text-sm leading-relaxed">
            Estudios de diagnóstico por imágenes realizados en el consultorio para un control rápido, cómodo y preciso de tu salud.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
