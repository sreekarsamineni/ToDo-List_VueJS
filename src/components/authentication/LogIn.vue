<template>
  

  <HomeNavbar></HomeNavbar>

    <!-- <h1>Login</h1>
  
    <v-text-field type="email" placeholder="Email" v-model="email"> </v-text-field>
    <v-text-field type="password" placeholder="password" v-model="password"></v-text-field>
    <v-btn @click="login">Login</v-btn>
  
    <p>Need an account? <router-link to="/signup">signup</router-link></p> -->

    <v-container>
    <v-row>
        <v-col>
            <!-- color="rgba(255, 255, 255, 0.3)" -->
    <v-card
    class="card1 mx "
    width="50%"
    
  >

    <v-card-title>
      <span class="text-h5">LOG IN</span>
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
    <v-btn 
    @click="login" 
    width="35%" 
    :loading="loading" 
    text
    color="rgba(22, 49, 113, 0.5)" 
    style="color: white;">
    Login
    </v-btn>
    
    <p>Don't have an account? <router-link style="text-decoration: none; color: mediumpurple;" to="/signup">Register</router-link></p>
</div>

  </v-card>

         
</v-col>
    </v-row>
</v-container>

<v-snackbar
          
              v-model="snackbarlin"
              :timeout="timeout"
              absolute
              bottom
              color="primary"
              left
              text
            >
              Successfully Logged In
            </v-snackbar>
  
  </template>
  
  <script>
  import firebase from "firebase/compat/app"
  require('firebase/compat/auth')
  import '../FirebaseDB'
  import HomeNavbar from '../navbars/HomeNavbar'
  
  export default {
      name: "LogIn",
      components: {
    HomeNavbar
  },
  
      data() {
          return {
          email: "",
          password: "",

          loading: false,
          snackbarlin: false,
          timeout: 1000,
          
         }
      },
  
      methods: {
          login: function() {
            this.loading = true;
              firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                  user => {
                    alert('Successfully Logged in');
                      console.log(user.data);
                      this.$router.push('/todo');
                      this.loading = false;
                      this.snackbarlin = true;
                  },
                  err =>{
                  alert(err)
                  this.loading = false;
                }
              )
  
          }
      }
  
  }
  </script>
  
  <style>

  .card1 {
    /* justify-content: center; */
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%;
  }
  
  .lbtn {
    text-align: center;
  }
  </style>