<template>
  
  <h1>Register</h1>

  <v-text-field type="email" placeholder="Email" v-model="email"> </v-text-field>
  <v-text-field type="password" placeholder="Password" v-model="password"> </v-text-field>
  <v-btn v-on:click="login">Sign Up</v-btn>



</template>

<script>
import firebase from "firebase/compat/app"
require('firebase/auth')

export default {
    name: "SignUp",
    data() {
        return {
        email: "",
        password: ""
        
       }
    },

    methods: {
      login: function(e) {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          alert('Account Created for ${user.email}');
          this.$route.push('/');
        },
        err => {
          alert(err.message);
        })
        // e.preventdefault();
      }
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

}
</script>

<style>

</style>