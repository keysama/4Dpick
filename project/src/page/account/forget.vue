<template>
	<div class="main">
		<div class="container">
			<div class="notice">
				<span>公告公告公告公告公告公告公告公告公告公告</span>
			</div>
      <h2>Forgot Password</h2>
			<div class="registe-box row">
        <div class="col-md-6">
          <div class="form-group">
            <label class="mulit" >Email Address</label>
            <input type="text" class="form-control" id="usr">
          </div>
          <div class="form-group">
            <span class="btn btn-primary btn-lg">Send password reset link</span>
          </div>
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
