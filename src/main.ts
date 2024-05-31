import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueTippy from 'vue-tippy'

import App from './WelcomeMovies.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(VueTippy, {
  directive: 'tooltip',
  defaultProps: {
    theme: 'wm',
    duration: [100, 50]
  }
})

app.mount('#app')
