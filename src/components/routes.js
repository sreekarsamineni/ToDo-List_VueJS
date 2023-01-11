import {createWebHistory, createRouter} from 'vue-router' ;
import HomePage from './layouts/HomePage.vue';
import SignUp from './authentication/SignUp.vue';
import LogIn from './authentication/LogIn.vue';
import MainPage from './MainPage.vue';
import firebase from "firebase/compat/app"
require('firebase/compat/auth')
import '@/components/FirebaseDB'

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
        path: '/',
        component:LogIn
    },

     {
        name: 'todo',
        path: '/todo',
        component:MainPage,
        meta: {
            requiresAuth: true
        }
    },
    
]

const router = createRouter({
    history:createWebHistory(),
    routes
});



// router.beforeEach((to, from, next) => {
//     if(to.matched.some(record => record.meta.requiresAuth)) {

//         if(!firebase.auth().currentUSer){
//             next({
//                 path: '/login',
//                 query: {
//                     redirect: to.fullPath
//                 }
//             });
//         } else {
//             next();
//         }
//     }
// });

export default router;