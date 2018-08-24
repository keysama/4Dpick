<template>
	<div class="main">
		<div class="container">
			<div class="notice">
				公告公告公告公告公告公告公告公告公告公告
			</div>
      <h2>Member Registration</h2>
			<div class="registe-box row">
        <div class="col-md-6">
          <div class="form-group">
            <label class="mulit" data-toggle="tooltip" title="Enter your full name here.!">Your Name<i class="iconfont icon-iconfontwenhao1"></i></label>
            <input type="text" class="form-control" id="usr">
          </div>
          <div class="form-group">
            <label class="mulit" data-toggle="tooltip" title="Your valid email address. We need this for verification purpose.">Email Address<i class="iconfont icon-iconfontwenhao1"></i></label>
            <input type="text" class="form-control" id="usr">
          </div>
          <div class="form-group">
            <label class="mulit" data-toggle="tooltip" title="Please make sure you enter your contact number correctly. In case of money transfer failure, we need to contact you for clarification purpose.">Contact Number<i class="iconfont icon-iconfontwenhao1"></i></label>
            <input type="text" class="form-control" id="usr">
          </div>
          <div class="form-group">
            <label class="mulit" data-toggle="tooltip" title="Please enter a login ID between 6 to 12 characters. Do not use any symbol or space for your login ID.">Login ID<i class="iconfont icon-iconfontwenhao1"></i></label>
            <input type="text" class="form-control" id="usr">
          </div>
          <div class="form-group">
            <label class="mulit" data-toggle="tooltip" title="Please enter a login password between 6 to 20 characters. Do not use spaces in your password. It is strongly advise to use a password with a combination of alphabets and numbers.">Password<i class="iconfont icon-iconfontwenhao1"></i></label>
            <input type="text" class="form-control" id="usr">
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" value="">I agreed with the terms & conditions.
            </label>
          </div>
          <div class="btn btn-primary" style="margin-top:10px">Register</div>
        </div>
			</div>
			<div class="info">
				<span>You must agreed with our terms & conditions before register as a member. If you have any questions, please do not feel hesitate to contact us or email at admin@4dpick.com. Our customer service operators are willing to answer your doubts.</span>
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
i{
  margin-left:10px;
}
</style>
