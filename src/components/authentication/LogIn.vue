<template>
  
    <h1>Login</h1>
  
    <v-text-field type="email" placeholder="Email" v-model="email"> </v-text-field>
    <v-text-field type="password" placeholder="password" v-model="password"></v-text-field>
    <v-btn @click="login">Login</v-btn>
  
    <p>Need an account? <router-link to="/signup">signup</router-link></p>
  
  </template>
  
  <script>
  import firebase from "firebase/compat/app"
  require('firebase/auth')
  
  export default {
      name: "LogIn",
      data() {
          return {
          email: "",
          password: ""
          
         }
      },
  
      methods: {
          login: function() {
              firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                  user => {
                      console.log(user.data);
                  },
                  err =>
                  alert(err)
              )
  
          }
      }
  
  }
  </script>
  
  <style>
  
  </style>