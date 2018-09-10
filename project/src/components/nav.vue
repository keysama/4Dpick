<template>
  <div class="mynav">
      <div class="container hidden-sm">
          <nav class="navbar navbar-default top-navbar justify-content-between hidden-sm align-items-center">
            <ul class="nav">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle text-white" data-toggle="dropdown" href="#">4D Results</a>
                    <div class="dropdown-menu">
                        <span class="dropdown-item text-black hover" @click="$store.state.homeMode=0">All Results</span>
                        <span class="dropdown-item text-black hover" @click="$store.state.homeMode=1">Malaysia 4D Results</span>
                        <span class="dropdown-item text-black hover" @click="$store.state.homeMode=2">Sabah &amp; Sarawak 4D Results</span>
                        <span class="dropdown-item text-black hover" @click="$store.state.homeMode=3">Singapore 4D Results</span>
                    </div>
                </li>

                <li class="nav-item">
                    <router-link class="nav-link" to="/buy" style="color:#f00">Buy 4D</router-link>
                </li>
            </ul>
            <ul style="margin-bottom:0" v-if="$store.state.userInfo!=''">
                <div class="dropdown">
                    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                        <i class="iconfont icon-user" style="margin-right:10px"></i>{{$store.state.userInfo.nickname}}
                    </button>
                    <div class="dropdown-menu">
                        <li class="text-center">
                            <img src="../assets/img/coins.png" alt="" style="width:20px">
                            <span>RM {{$store.state.userInfo.amount}}.00</span>
                        </li>
                        <li class="text-center" style="margin-top:10px">
                            <router-link class="btn btn-sm btn-primary" to="/pup">Top-up Credit</router-link>
                        </li>

                        <!-- <div class="dropdown-divider"></div> -->
                        <router-link class="dropdown-item" to="/history" data-toggle="tooltip" data-container="body" data-placement="left" data-original-title="To show your betting/winning records."><i class="iconfont icon-icon37" style="margin-right:10px"></i> My Bets</router-link>
                        <router-link class="dropdown-item" to="/Top-up" data-toggle="tooltip" data-container="body" data-placement="left" data-original-title="List of your top-up records. You may notify us here if you have made a payment."><i class="iconfont icon-money" style="margin-right:10px"></i>My Top-up</router-link>
                        <!-- <a class="dropdown-item" href="#" data-toggle="tooltip" data-container="body" data-placement="left" data-original-title="If you have balance in your credit, you may withdraw it here.">Withdraw</a> -->
                        <router-link class="dropdown-item" to="/user" data-toggle="tooltip" data-container="body" data-placement="left" data-original-title="To modify your account detail."><i class="iconfont icon-user" style="margin-right:10px"></i>My Account</router-link>
                        <div class="dropdown-divider"></div>
                        <span class="dropdown-item hover" @click="logout">Logout</span>
                    </div>
                </div>
            </ul>
          </nav>
      </div>

        <div class="scroll-page scroll-page-active hidden-md" v-if="$store.state.userInfo!=''">
            <button class="btn btn-light scroll-page-btn text-white" type="button" >
                <i class="iconfont icon-41"></i>
            </button>
            <span class="list" href="#demo" data-toggle="collapse">4D Results</span>
            
            <div id="demo" class="collapse">
                    <a @click="$store.state.homeMode=0">All Results</a>
                    <a @click="$store.state.homeMode=1">Malaysia 4D Results</a>
                    <a @click="$store.state.homeMode=2">Sabah &amp; Sarawak 4D Results</a>
                    <a @click="$store.state.homeMode=3">Singapore 4D Results</a>
                <!-- <a href="http://4dpick.com/past-results-history">Past Results</a>
                <a href="http://4dpick.com/4d-prediction">4D Prediction</a> -->
            </div>

            <router-link class="nav-link" to="/buy" style="color:#f00">Buy 4D</router-link>

            <div class="dropdown-divider"></div>

            <span class="list" href="#user" data-toggle="collapse">
                <i class="iconfont icon-user" style="margin-right:10px"></i>{{$store.state.userInfo.nickname}}
            </span>
            <div id="user" class="collapse">
                <div class="text-center">
                    <img src="../assets/img/coins.png" alt="" style="width:20px">
                    <span class="text-white">RM {{$store.state.userInfo.amount}}.00</span>
                </div>
                <div class="text-center" >
                    <router-link class="btn btn-sm btn-primary" to="/pup" style="margin-top:10px">Top-up Credit</router-link>
                </div>

                <!-- <div class="dropdown-divider"></div> -->
                <router-link class="dropdown-item" to="/history" data-toggle="tooltip" data-container="body" data-placement="left" data-original-title="To show your betting/winning records."><i class="icon-font icon-icon37" style="margin-right:10px"></i>My Bets</router-link>
                <router-link class="dropdown-item" to="/Top-up" data-toggle="tooltip" data-container="body" data-placement="left" data-original-title="List of your top-up records. You may notify us here if you have made a payment."><i class="iconfont icon-money" style="margin-right:10px"></i>My Top-up</router-link>
                <!-- <a class="dropdown-item" href="#" data-toggle="tooltip" data-container="body" data-placement="left" data-original-title="If you have balance in your credit, you may withdraw it here.">Withdraw</a> -->
                <router-link class="dropdown-item" to="/user" data-toggle="tooltip" data-container="body" data-placement="left" data-original-title="To modify your account detail."><i class="icon icon-user" style="margin-right:10px"></i>My Account</router-link>
                <div class="dropdown-divider"></div>
                <span class="dropdown-item hover" @click="logout">Logout</span>
            </div>
        </div>
  </div>
</template>

<script>
import {logout} from '../api/account'
import {LOGOUT} from '../store/mutation_types'
export default {
  data () {
    return {
      
    }
  },
  mounted(){
    $(document).ready(function(){
        $('.scroll-page-btn').click(()=>{
            $('.scroll-page').toggleClass('scroll-page-active')
        })
        $('[data-toggle="tooltip"]').tooltip(); 
    });
  },
  methods:{
      async logout(){
          let res = await logout();
          this.$store.commit(LOGOUT);
          location.reload();
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
.scroll-page{
    position: fixed;
    background-color: #333;
    width: 50%;
    height: 100%;
    top:0;
    right:0;
    z-index: 999;
    transition: .3s all ease;
    .scroll-page-btn{
        background-color: #222;
        position:absolute;
        left: -50px;
        top:10px;
    }
    #demo a{
        display: block;
        text-align: left;
        padding-left: 5px;
        background-color: rgb(93, 93, 93);
        padding:5px;
        color: #fff;
        position: relative;
        border-bottom: 1px solid #ccc;
    }
    #user a{
        color:#fff;
    }
    .list{
        display: block;
        text-align: left;
        padding-left: 5px;
        background-color: rgb(93, 93, 93);
        padding:5px;
        color: #fff;
        position: relative;
    }
}
.scroll-page-active{
    right:-50%;
}
</style>
