<template>
  
  <h1>Register</h1>

  <v-text-field type="email" placeholder="Email" v-model="email"> </v-text-field>
  <v-text-field type="password" placeholder="Password" v-model="password"> </v-text-field>
  <v-btn @click="signup">Sign Up</v-btn>
  <p>Already have an account? <router-link to="/login">login</router-link></p>



</template>

<script>
import firebase from "firebase/compat/app"
require('firebase/compat/auth')
import '../FirebaseDB'

export default {
    name: "SignUp",
    data() {
        return {
        email: "",
        password: ""
        
       }
    },

    methods: {
      signup() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          alert('Account Created for ${user.email}');
          console.log(user)
        },
        (err) => {
          alert(err)
        }
        )
        }
      }
      // signup: function(e) {
      //   firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      //   .then((user) => {
      //     alert('Account Created for ${user.email}');
      //     this.$route.push('/');
      //   },
      //   err => {
      //     alert(err.message);
      //   })
      //   // e.preventdefault();
      // }
    }

    // methods: {
    //     login: function() {
    //         firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
    //             user => {
    //                 console.log(user.data);
    //             },
    //             err =>
    //             alert(err)
    //         )

    //     }
    // }


</script>

<style>

</style>