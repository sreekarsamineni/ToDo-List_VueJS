<template>
  
    <!-- <h1>Login</h1>
  
    <v-text-field type="email" placeholder="Email" v-model="email"> </v-text-field>
    <v-text-field type="password" placeholder="password" v-model="password"></v-text-field>
    <v-btn @click="login">Login</v-btn>
  
    <p>Need an account? <router-link to="/signup">signup</router-link></p> -->

    <v-container>
    <v-row>
        <v-col>
            
    <v-card
    class="mx "
    max-width="344"
    justify-center
    
  >

    <v-card-title>
      <span class="text-h5">LogIn</span>
    </v-card-title>
  
  <v-col
        cols="12"
        sm="6"
        md="12"
    >
    <v-text-field type="email" placeholder="Email" v-model="email"> </v-text-field> </v-col>
    <v-col
        cols="12"
        sm="6"
        md="12"
    >
    <v-text-field type="password" placeholder="password" v-model="password"></v-text-field></v-col>

    <div class="justify-center">
    <v-btn @click="login" >Login</v-btn>
    </div>
    <p>Need an account? <router-link to="/signup">signup</router-link></p>
    

  </v-card>

         
</v-col>
    </v-row>
</v-container>

  
  </template>
  
  <script>
  import firebase from "firebase/compat/app"
  require('firebase/compat/auth')
  import '../FirebaseDB'
  
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