<script setup>
import { externalLinks } from '../../config/links.js'
</script>

<template>
  <footer class="bg-slate-900 pt-16 pb-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <!-- Marca -->
        <div>
          <span class="text-xl font-semibold tracking-tight text-white mb-4 block">Dr. Gabriel Pellegrini</span>
          <p class="text-slate-400 text-sm leading-relaxed max-w-xs">
            Atención médica integral, especializada en ginecología y obstetricia, enfocada en el bienestar y la salud de la mujer.
          </p>
        </div>

        <!-- Contacto -->
        <div>
          <h4 class="text-white font-medium mb-4">Atención y Consultorio</h4>
          <ul class="space-y-3">
            <li class="flex items-start text-slate-400 text-sm">
              <svg class="w-5 h-5 mr-3 text-slate-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Quilmes, Zona Sur, Buenos Aires
            </li>
            <li class="flex items-start text-slate-400 text-sm">
              <svg class="w-5 h-5 mr-3 text-slate-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Lunes a Viernes de 9:00 a 18:00hs
            </li>
          </ul>
        </div>

        <!-- Enlaces -->
        <div>
          <h4 class="text-white font-medium mb-4">Enlaces Rápidos</h4>
          <ul class="space-y-2">
            <li><a href="#inicio" class="text-slate-400 hover:text-white text-sm transition-colors">Inicio</a></li>
            <li><a href="#especialidades" class="text-slate-400 hover:text-white text-sm transition-colors">Especialidades</a></li>
            <li><a href="#consultorio" class="text-slate-400 hover:text-white text-sm transition-colors">Consultorio</a></li>
            <li><a href="#sobre-mi" class="text-slate-400 hover:text-white text-sm transition-colors">Sobre Mí</a></li>
          </ul>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-slate-500 text-sm text-center md:text-left">
          &copy; {{ new Date().getFullYear() }} Dr. Gabriel Pellegrini. Todos los derechos reservados.
        </p>
        <p class="text-slate-500 text-sm">
          Diseñado por <a :href="externalLinks.qvantaStudio" target="_blank" rel="noopener noreferrer" class="text-primary-500 hover:text-primary-400 transition-colors font-medium">Qvanta Studio</a>
        </p>
      </div>
    </div>
  </footer>
</template>
