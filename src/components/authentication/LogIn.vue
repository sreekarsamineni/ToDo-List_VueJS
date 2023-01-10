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
    class="card1 mx "
    max-width="45%"
    
    
  >

    <v-card-title>
      <span class="text-h5">Log In</span>
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

    <div class="lbtn">
    <v-btn @click="login" width="40%" >Login</v-btn>
    
    <p>Create an account? <router-link to="/signup">signup</router-link></p>
</div>

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
                    alert('Successfully Loggin in');
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

  .card1 {
    justify-content: center;
    margin-left: 30%;
    margin-top: 10%;
  }
  
  .lbtn {
    margin-left: 37%;
  }
  </style>