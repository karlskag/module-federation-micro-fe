import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const mount = (el: HTMLElement) => {
  createApp(App).mount(el)
}

if (import.meta.env.DEV) {
  const devRoot = document.getElementById('app')
  mount(devRoot!)
}

export { mount }