<template>
  
  <h1>Login</h1>

  <input type="email" placeholder="" v-model="email"> <Br />
  <input type="password" placeholder="" v-model="password"> <Br />
  <button @click="login">Login</button>

  <p>Need an account? <router-link to="/signup"></router-link></p>

</template>

<script>
import db from "../FirebaseDB"

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