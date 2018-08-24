<template>
  <div class="mynav">
      <div class="container">
          <nav class="navbar navbar-default top-navbar">
            <ul class="nav">
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" data-toggle="dropdown" href="#">4D Results</a>
                <div class="dropdown-menu">
                    <a class="dropdown-item text-black" href="#">Link 1</a>
                    <a class="dropdown-item text-black" href="#">Link 2</a>
                    <a class="dropdown-item text-black" href="#">Link 3</a></div>
                </li>

                <li class="nav-item">
                    <router-link class="nav-link" to="buy" style="color:#f00">Buy 4D</router-link>
                </li>
                <li class="nav-item ">
                    <a class="nav-link text-white" href="#">Blog</a>
                </li>
            </ul>
          </nav>
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

<style scoped lang="less">
.mynav{
    .container{
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border: 1px solid #333437;
        box-shadow: inset 0px 0px 5px #222 ;
        background: url(../assets/img/diagmonds.png) repeat 0px 0px transparent;
    }
    .navbar{
        padding: 0px ;
    }
    .nav{
        background: transparent;
    }
}
</style>
