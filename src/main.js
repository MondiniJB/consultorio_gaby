import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

// Observador para animaciones de entrada al hacer scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0')
        entry.target.classList.remove('opacity-0', 'translate-y-8')
        
        // Dejamos de observar una vez que ya apareció
        observer.unobserve(entry.target)
      }
    })
  },
  {
    threshold: 0.1, // Se activa cuando el 10% del elemento es visible
    rootMargin: '0px 0px -50px 0px'
  }
)

// Directiva personalizada v-reveal
app.directive('reveal', {
  mounted(el) {
    // Añadimos las clases de estado inicial
    el.classList.add('transition-all', 'duration-[800ms]', 'ease-out', 'opacity-0', 'translate-y-8')
    observer.observe(el)
  },
  unmounted(el) {
    observer.unobserve(el)
  }
})

app.mount('#app')
