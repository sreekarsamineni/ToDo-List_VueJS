import { createApp } from 'vue'
// import App from './App.vue'
import MainPage from './components/MainPage.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(MainPage)
  .use(vuetify)
  .mount('#app')
