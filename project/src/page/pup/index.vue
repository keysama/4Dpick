<template>
	<div class="main">
		<div class="container">
			<div class="notice">
				<span>公告公告公告公告公告公告公告公告公告公告</span>
			</div>
      <h2>Top-up Credits</h2>
			<div class="registe-box row">
        <div class="col-md-8">
          <div class="form-group">
            Your current available credit is RM{{$store.state.userInfo.amount}}.00.
          </div>
          <div>
            <label class="mulit" >Top-up Amount</label>
          </div>
          <div class="form-group row">
            <div class="col-6 col-md-3">
              <div class="count-box">
                <div class="count-box-top">
                  RM10
                </div>
                <div class="count-box-bottom">
                    <div id="1" class="input-group input-group-option quantity-wrapper">
                    
                        <span  class="input-group-addon input-group-addon-remove quantity-remove btn" @click="rm10>0?rm10-=1:0">
                            <i class="iconfont icon-minus"></i>
                        </span>
                        
                        <input  id="1inp" type="text" value="7" name="option[]" class="form-control quantity-count" placeholder="1" v-model="rm10">

                        <span class="input-group-addon input-group-addon-remove quantity-add btn" @click="rm10+=1">
                            <i class="iconfont icon-plus"></i>
                        </span>
                        
                    </div>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="count-box">
                <div class="count-box-top">
                  RM20
                </div>
                <div class="count-box-bottom">
                    <div id="1" class="input-group input-group-option quantity-wrapper">
                    
                        <span  class="input-group-addon input-group-addon-remove quantity-remove btn" @click="rm20>0?rm20-=1:0">
                            <i class="iconfont icon-minus"></i>
                        </span>
                        
                        <input  id="1inp" type="text" value="7" name="option[]" class="form-control quantity-count" placeholder="1" v-model="rm20">

                        <span class="input-group-addon input-group-addon-remove quantity-add btn" @click="rm20+=1">
                            <i class="iconfont icon-plus"></i>
                        </span>
                        
                    </div>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="count-box">
                <div class="count-box-top">
                  RM50
                </div>
                <div class="count-box-bottom">
                    <div id="1" class="input-group input-group-option quantity-wrapper">
                    
                        <span  class="input-group-addon input-group-addon-remove quantity-remove btn" @click="rm50>0?rm50-=1:0">
                            <i class="iconfont icon-minus"></i>
                        </span>
                        
                        <input  id="1inp" type="text" value="7" name="option[]" class="form-control quantity-count" placeholder="1" v-model="rm50">

                        <span class="input-group-addon input-group-addon-remove quantity-add btn" @click="rm50+=1">
                            <i class="iconfont icon-plus"></i>
                        </span>
                        
                    </div>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="count-box">
                <div class="count-box-top">
                  RM100
                </div>
                <div class="count-box-bottom">
                    <div id="1" class="input-group input-group-option quantity-wrapper">
                    
                        <span  class="input-group-addon input-group-addon-remove quantity-remove btn" @click="rm100>0?rm100-=1:0">
                            <i class="iconfont icon-minus"></i>
                        </span>
                        
                        <input  id="1inp" type="text" value="7" name="option[]" class="form-control quantity-count" placeholder="1" v-model="rm100">

                        <span class="input-group-addon input-group-addon-remove quantity-add btn" @click="rm100+=1">
                            <i class="iconfont icon-plus"></i>
                        </span>
                        
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div class="input-group">
            <span class="input-group-btn">
                <button class="btn btn-default" type="button">Total Credits (RM)</button>
            </span>
            <input type="number" disabled class="form-control form-control" v-model="total">
         </div>
         <div>
           Maximum topup amount is RM 50.
         </div>
         <h2 class="text-success" v-if="$store.state.userInfo.first == 1">
           First recharge bonus of <span class="display-4">{{reward}}.00 !</span> 
         </h2>
         <br/>
         <div>
           <span class="btn btn-success" @click="proceed">Proceed</span>
         </div>
        </div>
        <div class="col-md-4" style="font-size:25px;font-weight:400">
          <!-- Not a member yet?<br/>
          <router-link to="registe">Click here for FREE registration!</router-link> -->
        </div>
			</div>
		</div>
	</div>
</template>

<script>
import {getConfig} from '../../api/config.js';
import {createTopUp} from '../../api/orders.js';
export default {
  created(){
    this.init();
  },
  data () {
    return {
      rm10:0,
      rm20:0,
      rm50:0,
      rm100:0,
      reward:0
    }
  },
  mounted(){
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip(); 
    });
  },
  computed:{
    total(){
      return this.rm10*10+this.rm20*20+this.rm50*50+this.rm100*100
    }
  },
  methods:{
    async init(){
      let res = await getConfig('reward');
      if(res.data.state == 0){alert(res.data.text);return};
      this.reward = res.data.body[0].value;
    },
    async proceed(){
     if(this.total==0){return};
     if(this.total>50){alert('Maximum topup amount is RM 50');return;}
// ------支付接口-------
	    var date = new Date();
	    date.setHours(date.getHours()); 
	    var y = date.getFullYear();  
	    var m = date.getMonth() + 1;  
	    m = m < 10 ? ('0' + m) : m;  
	    var d = date.getDate();  
	    d = d < 10 ? ('0' + d) : d;  
	    var h = date.getHours();
	    h = h < 10 ? ('0' + h) : h;
	    var minute = date.getMinutes();
	    var second = date.getSeconds();
	    minute = minute < 10 ? ('0' + minute) : minute;  
	    second = second < 10 ? ('0' + second) : second; 
	    let formatDateTime2 =  ''+y +  m + d+ h + minute  + second;  

	    let res = ''

	    if(h > 12){
	    		res = y + '-' + m + '-' + d+' '+(h-12)+':'+minute+':'+second+'PM';  
	    }else{
	    		res = y + '-' + m + '-' + d+' '+h+':'+minute+':'+second+'AM';
	    }
      let formatDateTime = res;

      let Amount = this.total+''+'.00';//金额

      let res2 = await createTopUp({amount:Amount,formatDateTime:formatDateTime});
      if(res2.data.state == 0){alert(res2.data.text);return;}
      
      let Merchant = 'M0280';

      let Reference = res2.data.body;//唯一的标记

      let Customer = this.$store.state.userInfo.id;//区分用户的标记

      let Currency = 'MYR';//币种

      let Datetime = formatDateTime;

      let Datetime2 = formatDateTime2;

      let SecurityCode = 'EXcpm7VXCvWJEuS';

      let ClientIP = '111.230.249.243';


      let key = hex_md5(Merchant+Reference+Customer+Amount+Currency+Datetime2+SecurityCode+ClientIP).toUpperCase();



      let finaDate={
          Merchant,
          Reference,
          Currency,
          Amount,
          Customer,
          Datetime,
          FrontURI:'http://111.230.249.243:8083/api/pay/payResult',
          BackURI:'http://111.230.249.243:8083/api/pay/topUpHandle',
          ClientIP,
          key,
      };

      let form = document.createElement('form');
      form.action = 'http://api.besthappylife.biz/MerchantTransfer';
      form.method = 'post';
      form.target="_blank";
      form.id = formatDateTime2;

      // let btn = document.createElement('input');
      // btn.type='submit';
      // btn.id = res2.data.body;
      // form.appendChild(btn)
      
      Object.keys(finaDate).forEach(item=>{
        let input = document.createElement('input');
        input.type = 'hidden';
        input.name = item;
        input.value = finaDate[item];
        form.appendChild(input)
      })

      document.querySelector("body").appendChild(form);
      console.log(form)
      form.submit();
    }
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
.count-box{
  height: 120px;
  border:1px solid #ccc;
  overflow: hidden;
  .count-box-top{
    height: 70%;
    justify-content: center;
    display: flex;
    align-items: center;
    font-size: 26px;
  }
  .count-box-bottom{
    height: 30%;
    .input-group-addon{
      border: 1px solid #ccc;
    }
    .quantity-count{
      text-align: center;
    }
  }
}
@keyframes noticeAnime
{
	0%   {left: 100%;}
	99.9%  {left: -100%;}
	100% {opacity: 100%;}
}
</style>
