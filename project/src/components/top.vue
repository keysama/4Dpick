<template>
  <div class="top">
      <div class="container">
        <div class="float-left"> 
          <router-link to="/home"><img src="../assets/img/logo.png" alt=""></router-link>
        </div>
        <div class="float-right">
          <router-link to="/registe"><img src="../assets/img/button-register.png" alt=""></router-link>
          <router-link to="/login"><img src="../assets/img/button-login.png" alt=""></router-link>
          
        </div>
        <div class="clearfix"></div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
.top{
    padding:10px 0;
}
</style>
