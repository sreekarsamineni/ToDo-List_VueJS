<template>
  
  <HomeNavbar></HomeNavbar>

  <!-- <h1>Register</h1>

  <v-text-field type="email" placeholder="Email" v-model="email"> </v-text-field>
  <v-text-field type="password" placeholder="Password" v-model="password"> </v-text-field>
  <v-btn @click="signup">Sign Up</v-btn>
  <p>Already have an account? <router-link to="/login">login</router-link></p> -->

  <v-container>
    <v-row>
        <v-col>
            <!-- color="rgba(255, 255, 255, 0.3)" -->
    <v-card
    class="card1 mx "
    width="50%"
    
  >

    <v-card-title>
      <span class="text-h5">REGISTER</span>
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
      <div @click="clear">
    <v-btn @click="signup"
    width="35%" 
    text
    color="rgba(22, 49, 113, 0.5)" 
    style="color: white;"
    >
    Register</v-btn>
      </div>
    <p>Already have an account? <router-link style="text-decoration: none; color: mediumpurple;" to="/login">login</router-link></p>
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
import HomeNavbar from '../navbars/HomeNavbar'

export default {
    name: "SignUp",
    components: {
    HomeNavbar
  },
  
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
          this.close();
        },
        (err) => {
          alert(err)
        }
        )
        },

        clear(){

          this.email = ''
          this.password = ''
        },
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

.lbtn {
  text-align: center;
}

</style>