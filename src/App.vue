<template>
  <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  </head>



  <router-view></router-view>
</template>

<script>


export default {
  name: 'app',
  
  data() {
    return {

      
    
  }
  
  },

  mounted()
    {
      let user = localStorage.getItem('user-info');
      if(!user)
      {
        this.$router.push({path: '/home' })
      }
    }

}
</script>

<style>

*{
  box-sizing: border-box;
}





  

  
</style>