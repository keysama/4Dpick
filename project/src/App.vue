<template>
<div class="h-100">
    <top></top>
    <navb></navb>
    <router-view/>
    <foot></foot>
</div>



</template>

<script>
import foot from './components/footer.vue';
import top from './components/top.vue';
import navb from './components/nav.vue';
export default {
  name: 'App',
  components:{
    top,navb,foot
  },
  
}
</script>

<style lang="less">
@import "./assets/css/common.less";

</style>
