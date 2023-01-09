import { createApp } from 'vue'
// import App from './App.vue'
// import MainPage from './components/MainPage.vue'
import SignUp from './components/authentication/SignUp.vue'
// import HomePage from './components/layouts/HomePage.vue'
// import NavBar from './components/NavBar.vue'
import vuetify from './plugins/vuetify'
import router from './components/routes'
import { loadFonts } from './plugins/webfontloader'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

loadFonts()



createApp(SignUp)
  .use(vuetify).use(router)
  .mount('#app')
  


  
