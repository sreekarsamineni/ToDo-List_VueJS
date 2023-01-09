<template>

<nav color="transparent">
        <v-toolbar flat app class="tex-uppercase grey--text">
            <v-toolbar-title>
                <span class="font-weight-light">Todo</span>
                <span>List</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <router-link to="/home">
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
            <router-link to="/signup">
            <v-btn flat color="grey">
                <span>Register</span>
            </v-btn>
          </router-link>
            <router-link to = '/login'>
            <v-btn flat color="grey">
                <span>Sign in</span>
                <span right class="fa fa-right-to-bracket"> </span>
                <!-- <v-icon right>exit_to_app</v-icon> -->
            </v-btn>
        </router-link>
        </v-toolbar>
    </nav>

  <router-view></router-view>
</template>

<script>


export default {
  name: 'app'
  
}
</script>

<style>

*{
  box-sizing: border-box;
}

.add-task {
    margin-top: 20px;
    height: 40px;
    font-size: 14px;
    display: flex;
  }

  

  
</style>