<template>
<div class="h-100">
    <top></top>
    <navb></navb>
    <router-view/>
</div>



</template>

<script>
import top from './components/top.vue';
import navb from './components/nav.vue';
export default {
  name: 'App',
  components:{
    top,navb
  },
  
}
</script>

<style lang="less">
@import "./assets/css/common.less";

</style>
