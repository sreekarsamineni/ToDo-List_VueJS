<template>
  <router-link to="/">Home</router-link>
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