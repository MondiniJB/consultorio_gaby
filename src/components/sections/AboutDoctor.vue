<template>
  <section id="sobre-mi" class="py-24 bg-slate-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        <!-- Fotografía Consultorio -->
        <div v-reveal class="mb-12 lg:mb-0 relative">
          <div class="aspect-video w-full rounded-2xl shadow-sm overflow-hidden border border-slate-200">
            <img src="/images/consultorio.png" alt="Consultorio del Dr. Gabriel Pellegrini" class="w-full h-full object-cover object-center" />
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
            <div class="bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-pointer">
              <div class="text-3xl font-bold text-primary-600 mb-1">+15</div>
              <div class="text-sm text-slate-500 font-medium">Años de trayectoria</div>
            </div>
            <div class="bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-pointer">
              <div class="text-3xl font-bold text-primary-600 mb-1">Cálido</div>
              <div class="text-sm text-slate-500 font-medium">Trato humano y cercano</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
