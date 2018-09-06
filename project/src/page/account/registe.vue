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
            <input type="text" class="form-control" v-model="nickname">
          </div>
          <div class="form-group">
            <label class="mulit" data-toggle="tooltip" title="Your valid email address. We need this for verification purpose.">Email Address<i class="iconfont icon-iconfontwenhao1"></i></label>
            <input type="text" class="form-control " :class="{'is-invalid':!pass_email}" v-model="email">
          </div>
          <div class="form-group">
            <label class="mulit" data-toggle="tooltip" title="Please make sure you enter your contact number correctly. In case of money transfer failure, we need to contact you for clarification purpose.">Contact Number<i class="iconfont icon-iconfontwenhao1"></i></label>
            <input type="text" class="form-control" v-model="phone">
          </div>
          <div class="form-group">
            <label class="mulit" data-toggle="tooltip" title="Please enter a login ID between 6 to 12 characters. Do not use any symbol or space for your login ID.">Login ID<i class="iconfont icon-iconfontwenhao1"></i></label>
            <input type="text" class="form-control" v-model="username">
          </div>
          <div class="form-group">
            <label class="mulit" data-toggle="tooltip" title="Please enter a login password between 6 to 20 characters. Do not use spaces in your password. It is strongly advise to use a password with a combination of alphabets and numbers.">Password<i class="iconfont icon-iconfontwenhao1"></i></label>
            <input type="password" class="form-control" v-model="password">
          </div>
          <div class="form-group">
            <label class="mulit" data-toggle="tooltip" title="Please enter a login password between 6 to 20 characters. Do not use spaces in your password. It is strongly advise to use a password with a combination of alphabets and numbers.">Password<i class="iconfont icon-iconfontwenhao1"></i></label>
            <input type="password" class="form-control" :class="{'is-invalid':!pass_password}" v-model="password2">
          </div>
          <div style="border-bottom:1px solid #ccc;margin-bottom:10px;"><h3>Bank Account</h3></div>
          <div class="form-group">
            <label class="mulit">Bank Name</label>
            <select name="bank" id="bank" class="form-control form-control" data-required="1" data-error="Please select at least one from the option." v-model="bank_name">
              <option value="" selected="selected">Select one</option>
              <option value="AMB">AmBank</option>
              <option value="BIMB">BIMB</option>
              <option value="BSN">Bank Simpanan Nasional</option>
              <option value="CIMB">CIMB Bank</option>
              <option value="HLB">Hong Leong Bank</option>
              <option value="MBB">Maybank</option>
              <option value="PBB">Public Bank</option>
              <option value="RHB">RHB Bank</option>
            </select>
          </div>

          <div class="form-group">
            <label class="mulit" data-toggle="tooltip" title="Only numbers allowed. Do NOT use any symbol to separate your number.">Account Number<i class="iconfont icon-iconfontwenhao1"></i></label>
            <input type="text" class="form-control" v-model="bank_number">
          </div>
          <div class="form-group">
            <label class="mulit" data-toggle="tooltip" title="Please enter the FULL NAME as you used for this bank account.">Account Name<i class="iconfont icon-iconfontwenhao1"></i></label>
            <input type="text" class="form-control" v-model="bank_accountName">
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" v-model="agree">I agreed with the terms & conditions.
            </label>
          </div>

          <div class="btn btn-primary" :class="{'disabled':!pass_all}" style="margin-top:10px" @click="goRegiste">Register</div>
        </div>
			</div>
			<div class="info">
				<span>You must agreed with our terms & conditions before register as a member. If you have any questions, please do not feel hesitate to contact us or email at admin@4dpick.com. Our customer service operators are willing to answer your doubts.</span>
			</div>
		</div>
	</div>
</template>

<script>
import {registe} from '../../api/account.js';
export default {
  data () {
    return {
      nickname:'',
      username:'',
      password:'',
      password2:'',
      email:'',
      phone:'',
      bank_name:'',
      bank_number:'',
      bank_accountName:'',
      agree:''
    }
  },
  computed:{
    pass_all(){
      return this.agree == true && this.nickname != '' && this.username != '' && this.password != '' && this.email != '' && this.bank_name != '' && this.bank_number != '' && this.bank_accountName != '' && this.pass_email && this.pass_password;
    },
    pass_email(){
      return this.email == '' || /^[a-zA-Z0-9_-]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9_-]+)+$/.test(this.email)
    },
    pass_password(){
      return this.password==this.password2;
    }
  },
  methods:{
    async goRegiste(){
		let data = {
			nickname:this.nickname,
			username:this.username,
			password:this.password,
			password2:this.password2,
			email:this.email,
			phone:this.phone,
			bank_name:this.bank_name,
			bank_number:this.bank_number,
			bank_accountName:this.bank_accountName
		}
		let res = await registe(data);
		if(res.data.state==0){alert(res.data.text);return;}
		alert('success!go for login!')
		this.$router.push('/login')
		
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
