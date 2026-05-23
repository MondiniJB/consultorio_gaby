<template>
  <section id="consultorio" class="py-24 bg-slate-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        <!-- Placeholder Consultorio -->
        <div v-reveal class="mb-12 lg:mb-0 relative">
          <div class="aspect-video w-full rounded-2xl bg-white shadow-sm flex items-center justify-center overflow-hidden relative border border-slate-200">
            <!-- FOTO CONSULTORIO PLACEHOLDER -->
            <div class="absolute inset-0 bg-slate-100 animate-pulse"></div>
            <div class="relative z-10 flex flex-col items-center justify-center text-slate-400">
              <svg class="w-12 h-12 mb-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span class="text-sm font-medium tracking-wide">Fotografía del Consultorio</span>
            </div>
          </div>
        </div>

        <!-- Contenido de Texto -->
        <div v-reveal style="transition-delay: 200ms">
          <h2 class="text-3xl font-bold text-slate-900 sm:text-4xl mb-6">Sobre el Dr. Gabriel Pellegrini</h2>
          <div class="prose prose-slate prose-lg">
            <p class="text-slate-600 leading-relaxed mb-6">
              Con más de quince años de experiencia en la medicina ginecológica y obstétrica, mi misión es ofrecer un espacio seguro donde cada paciente pueda despejar sus dudas y recibir atención médica de la más alta calidad.
            </p>
            <p class="text-slate-600 leading-relaxed mb-8">
              Creo firmemente en un enfoque médico donde la empatía y la ciencia van de la mano. Cada consulta está diseñada para escucharte, entender tu contexto personal y ofrecerte el tratamiento o acompañamiento que mejor se adapte a tu vida. No estás sola en tus procesos; estoy aquí para cuidarte.
            </p>
          </div>
          
          <div class="grid grid-cols-2 gap-4 mt-8">
            <div class="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
              <div class="text-3xl font-bold text-primary-600 mb-1">+15</div>
              <div class="text-sm text-slate-500 font-medium">Años de trayectoria</div>
            </div>
            <div class="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
              <div class="text-3xl font-bold text-primary-600 mb-1">Cálido</div>
              <div class="text-sm text-slate-500 font-medium">Trato humano y cercano</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
