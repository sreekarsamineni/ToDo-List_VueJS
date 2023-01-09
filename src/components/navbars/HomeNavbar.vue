<template>
    <nav color="transparent">
        <v-toolbar flat app class="tex-uppercase grey--text">
            <v-toolbar-title>
                <span class="font-weight-light">Todo</span>
                <span>List</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat color="grey">
                <span>Home</span>
            </v-btn>
            <v-btn flat color="grey">
                <span>Projects</span>
            </v-btn>
            <v-btn flat color="grey">
                <span>Github</span>
            </v-btn>
            <v-btn flat color="grey">
                <span>Sign in</span>
                <span right class="fa fa-right-to-bracket"> </span>
                <!-- <v-icon right>exit_to_app</v-icon> -->
            </v-btn>
        </v-toolbar>
    </nav>

    
  
</template>

<script>
export default {
    name: "HomeNavbar"

}
</script>

<style>

</style>