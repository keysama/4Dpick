<template>
	<div class="main">
		<div class="container">
			<div class="notice">
				<span>公告公告公告公告公告公告公告公告公告公告</span>
			</div>
            <h2>My Account</h2>
            <ul class="nav nav-tabs" style="font-size:12px">
                <li class="nav-item">
                    <router-link class="nav-link" to="/user/detail" active-class="active">Account Detail</router-link>
                </li>
                <!-- <li class="nav-item">
                    <router-link class="nav-link" to="/user/setting" active-class="active">User Settings</router-link>
                </li> -->
                <li class="nav-item">
                    <router-link class="nav-link" to="/user/bank" active-class="active">Bank Account</router-link>
                </li>
                <!-- <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                </li> -->
            </ul>
			<router-view/>
		</div>
	</div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  mounted(){
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip(); 
    });
  }
}
</script>

<style scoped lang="less">
.main{
  .container{
	  padding-top:10px;
	  padding-bottom:20px;
	  background-color: #fff;
	  margin-bottom:20px;
	  .notice{
		  background-color: #eee;
		  font-size:12px;
		  padding:5px 0;
		  margin-bottom:15px;
		  position: relative;
		  height:25px;
		  overflow: hidden;
		  span{
			  display: block;
			  width: 100%;
			  position: absolute;
			  top:0;
			  left:100%;
			  animation: noticeAnime 25s linear infinite;
		  }
	  }
    .registe-box{
      border-bottom:1px solid #ccc;
      padding-bottom:20px;
      margin-bottom:20px;
    }
  }
}
.mulit::before{
  content:'*';
  color:#dd0000;
}
@keyframes noticeAnime
{
	0%   {left: 100%;}
	99.9%  {left: -100%;}
	100% {opacity: 100%;}
}
</style>
