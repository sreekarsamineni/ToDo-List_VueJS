import { createApp } from 'vue'
// import App from './App.vue'
import MainPage from './components/MainPage.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

loadFonts()

createApp(MainPage)
  .use(vuetify)
  .mount('#app')
