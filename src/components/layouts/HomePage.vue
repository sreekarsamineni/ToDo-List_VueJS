<template>
    <!-- <HomeNavbar></HomeNavbar> -->

 
<!-- <router-link to="/SignUp" >Hello</router-link> -->

   
  <div class="text text-center text-balck mt-30 ">
      <h1 class="text-h4 font-weight-thin mt-10 mb-4">
        Vuetify
      </h1>
      <h4 class="subheading">
        Build your application today!
      </h4>
      <router-link to = '/signup'>
      <v-btn class="mt-7">
        Create an account
      </v-btn>
    </router-link>
    </div>
    <router-view></router-view>
</template>

<script>
import HomeNavbar from '../navbars/HomeNavbar'
export default {
    name: 'HomePage',
  components: {
    HomeNavbar
  },

}
</script>

<style>

.text {
    margin-top: 200px;
}

</style>