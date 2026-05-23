<template>
  <header class="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo / Nombre -->
        <div class="flex-shrink-0 flex items-center cursor-pointer">
          <span class="text-xl font-semibold tracking-tight text-slate-900">Dr. Gabriel Pellegrini</span>
        </div>
        
        <!-- Navegación de Escritorio -->
        <nav class="hidden md:flex space-x-8">
          <a href="#inicio" class="text-slate-600 hover:text-primary-600 font-medium transition-colors">Inicio</a>
          <a href="#especialidades" class="text-slate-600 hover:text-primary-600 font-medium transition-colors">Especialidades</a>
          <a href="#consultorio" class="text-slate-600 hover:text-primary-600 font-medium transition-colors">Consultorio</a>
        </nav>

        <!-- Call to Action -->
        <div class="flex items-center">
          <a href="#contacto" class="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
            Agendar Turno
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
