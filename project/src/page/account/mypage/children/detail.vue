<template>
	<div class="main">
        <div class="row">
            <div class="col-md-6">
                <h4>Account Detail</h4>
                <div class="row form-group">
                    <label for="login" class="col-md-4 control-label form-label" >Login ID</label>
                    <div class="col-md-8">
                        <input type="text" v-model="username" class="form-control form-control" size="10" readonly="readonly">			
                                    
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="row form-group">
                    <label for="login" class="col-md-4 control-label form-label">Live Casino ID</label>
                    <div class="col-md-8">
                        <input type="text" v-model="userid" class="form-control form-control" size="10" readonly="readonly">			
                                    
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="row form-group">
                    <label for="login" class="col-md-4 control-label form-label" data-toggle="tooltip" title="Enter your full name here.">Your Name<i class="iconfont icon-iconfontwenhao1"></i></label>
                    <div class="col-md-8">
                        <input type="text" v-model="nickname" class="form-control form-control" size="10">			
                                    
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="row form-group">
                    <label for="login" class="mulit col-md-4 control-label form-label" data-toggle="tooltip" title="Your valid email address. We need this for verification purpose.">Email Address<i class="iconfont icon-iconfontwenhao1"></i></label>
                    <div class="col-md-8">
                        <input type="text" v-model="email" class="form-control form-control" size="10">			
                                    
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="row form-group">
                    <label for="login" class="mulit col-md-4 control-label form-label" data-toggle="tooltip" title="Please make sure you enter your contact number correctly. In case of money transfer failure, we need to contact you for clarification purpose.">Contact Number<i class="iconfont icon-iconfontwenhao1"></i></label>
                    <div class="col-md-8">
                        <input type="text" v-model="phone" class="form-control form-control" size="10">			
                                    
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="row form-group">
                    <label for="login" class="col-md-4 control-label form-label"></label>
                    <div class="col-md-8">
                        <span class="btn btn-primary btn-sm" @click="toUpdate">Update</span>			
                        <!-- <span class="btn btn-info btn-sm">Resend Activation Link</span>	             -->
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <h4>Change Passwords</h4>
                <div class="row form-group">
                    <label for="login" class="col-md-4 control-label form-label" data-toggle="tooltip" title="Enter your current password. If you are registered via FB, leave this empty and enter your new password below.">Old Password<i class="iconfont icon-iconfontwenhao1"></i></label>
                    <div class="col-md-8">
                        <input type="password" v-model="oldPassword" class="form-control form-control" size="10">			
                                    
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="row form-group">
                    <label for="login" class="col-md-4 control-label form-label mulit" data-toggle="tooltip" title="Please enter a login password between 6 to 20 characters. Do not use spaces in your password. It is strongly advise to use a password with a combination of alphabets and numbers.">New Password<i class="iconfont icon-iconfontwenhao1"></i></label>
                    <div class="col-md-8">
                        <input type="password" v-model="newPassword" class="form-control form-control" size="10">			
                                    
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="row form-group">
                    <label for="login" class="col-md-4 control-label form-label mulit" data-toggle="tooltip" title="Please retype the password above.">Retype Password<i class="iconfont icon-iconfontwenhao1"></i></label>
                    <div class="col-md-8">
                        <input type="password" v-model="newPassword2" class="form-control form-control" size="10">			
                                    
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="row form-group">
                    <label for="login" class="col-md-4 control-label form-label"></label>
                    <div class="col-md-8">
                        <span class="btn btn-primary btn-sm" @click="toChangePass">Update Password</span>		
                                    
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
            </div>
        </div>

	</div>
</template>

<script>
import {editInfo,editPass} from '../../../../api/account';
import {LOGOUT} from '../../../../store/mutation_types'
export default {
    created(){
        this.init();
    },
    data () {
        return {
            username:'',
            uid:'',
            nickname:'',
            email:'',
            phone:'',
            oldPassword:'',
            newPassword:'',
            newPassword2:''
        }
    },
    computed:{
        userid(){
            return this.uid+'@'+this.username;
        }
    },
    mounted(){
        $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip(); 
        });
    },
    methods:{
        async init(){
            this.username=this.$store.state.userInfo.username;
            this.uid=this.$store.state.userInfo.id;
            this.nickname=this.$store.state.userInfo.nickname;
            this.email=this.$store.state.userInfo.email;
            this.phone=this.$store.state.userInfo.phone;
        },
        async toUpdate(){
            if(this.nickname==this.$store.state.userInfo.nickname && this.email==this.$store.state.userInfo.email && this.phone==this.$store.state.userInfo.phone){return};
            let data = {
                id : this.$store.state.userInfo.id,
                nickname : this.nickname,
                email : this.email,
                phone : this.phone
            }
            let res = await editInfo(data);
            this.$store.state.userInfo=res.data.body;
            window.localStorage.setItem('userInfo',JSON.stringify(res.data.body));
            if(res.data.state==0){alert(res.data.text);return};
            location.reload();
        },
        async toChangePass(){
            if(this.newPassword != this.newPassword2 || this.oldPassword == this.newPassword || this.oldPassword == ''){return};
            let data = {
                id : this.$store.state.userInfo.id,
                oldPass : this.oldPassword,
                newPass : this.newPassword,
                newPass2 : this.newPassword2
            }
            let res = await editPass(data);
            if(res.data.state==0){alert(res.data.text);return};
            this.$store.commit(LOGOUT);
            location.reload();
        }
    }
}
</script>

<style scoped lang="less">
.main{
    font-size: 12px;
}
i{
  margin-left:5px;
}
.mulit::before{
  content:'*';
  color:#dd0000;
}
@media (min-width: 768px)
{ 
    .form-label{
        justify-content: flex-end;
        display: flex;
        align-items: center;
        margin-bottom: 0;
        font-weight: 500;
    }
}
@media (max-width: 767px) { 
    .form-label{
        text-align: left;
        display: flex;
        align-items: center;
        font-weight: 500;
    }
 }

</style>
