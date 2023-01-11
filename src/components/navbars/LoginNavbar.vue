<template>
    <nav class="black">
        <v-toolbar flat app class="tex-uppercase grey--text">
            <v-toolbar-title>
                <span class="font-weight-light">Todo</span>
                <span>List</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <router-link style="text-decoration: none; color: inherit" to="/home">
            <v-btn flat color="grey">
                <span>Home</span>
            </v-btn>
          </router-link>
            <v-btn flat color="grey">
                <span>Projects</span>
            </v-btn>
            <v-btn flat color="grey">
                <span>Github</span>
            </v-btn>
          <router-link style="text-decoration: none; color: inherit" to = '/'>
            <v-btn flat color="grey">
                <span>Sign out</span>
                <span right class="fa fa-right-to-bracket"> </span>
               <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </router-link>
        </v-toolbar>
    </nav> 
  
</template>

<script>
export default {
    name: "LoginNavbar"

}
</script>

<style>

</style>