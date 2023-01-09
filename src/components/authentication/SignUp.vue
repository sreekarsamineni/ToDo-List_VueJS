<template>
  
  <h1>Login</h1>

  <v-text-field type="email" placeholder="email" v-model="email"> </v-text-field>
  <v-text-field type="password" placeholder="password" v-model="password"> </v-text-field>
  <v-btn @click="login">Sign Up</v-btn>



</template>

<script>
import db from "../FirebaseDB";
export default {
    name: "SignUp",
    data() {
        return {
        email: "",
        password: ""
        
       }
    },

    methods: {
        login: function() {
            db.auth().signInWithEmailAndPassword(this.email, this.password).then(
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