import {createWebHistory, createRouter} from 'vue-router' 
import HomePage from './layouts/HomePage.vue';
import SignUp from './authentication/SignUp.vue'
import LogIn from './authentication/LogIn.vue'
// import MainPage from './MainPage.vue'

const routes=[
    {
        name: 'home',
        path: '/home',
        component:HomePage
    },

    {
        name: 'singup',
        path: '/signup',
        component:SignUp
    },

    {
        name: 'login',
        path: '/login',
        component:LogIn
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;