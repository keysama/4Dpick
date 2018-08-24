<template>
	<div class="main">
		<div class="container">
			<div class="notice">
				公告公告公告公告公告公告公告公告公告公告
			</div>
      <h2>Member Login</h2>
			<div class="registe-box row">
        <div class="col-md-6">
          <div class="form-group">
            <label class="mulit" >Login ID</label>
            <input type="text" class="form-control" id="usr">
          </div>
          <div class="form-group">
            <label class="mulit" >Password</label>
            <input type="text" class="form-control" id="usr">
          </div>
          <div class="form-group">
            <div class="btn btn-primary btn-lg" style="margin-top:10px"><i class="iconfont icon-lock"></i>Login</div>
          </div>
          <div>
            <router-link to='/'>Forgot Password?</router-link>
          </div>
        </div>
        <div class="col-md-6" style="font-size:25px;font-weight:400">
          Not a member yet?<br/>
          <router-link to="registe">Click here for FREE registration!</router-link>
        </div>
			</div>
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
</style>
