<template>
	<div class="main">
		<div class="container">
			<div class="notice">
				<span>公告公告公告公告公告公告公告公告公告公告</span>
			</div>
      <h2>Order Confirmation</h2>
      <div class="form-group">
        Your current available credit is RM{{$store.state.userInfo.amount}}.00.
      </div>
      <h2 class="text-right text-success" v-if="orderList.state == 1">√ Already paid</h2>
			<div class="registe-box row">
        <div class="col-md-12">
        <div class="table-responsive table-sm">
        <table class="table table-striped table-hover">
            <thead class="thead-dark">
              <tr>
                <th >Number</th>
                <th >Permutation</th>
                <th >Bet</th>
                <th >Board</th>
                <th>Sub Total</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,key) in orderList.sheets" :key="key" :class="{'bg-success text-white':orderList.state == 1}">
                <td>{{item.number}}</td>
                <td>{{item.perms}}</td>
                <td>
                  {{item.big==0?'':'Big:'+item.big+' '}}
                  {{item.small==0?'':'Small:'+item.small+' '}}
                  {{item.fourA==0?'':'4A:'+item.fourA}}
                </td>
                <td>{{item.numbers.split('|')}}</td>
                <td>{{item.totle}}</td>
              </tr>
            </tbody>
        </table>
        </div>
        <div class="text-right" v-if="$store.state.userInfo.amount < total && orderList.state == 0">
          Still need Pay RM{{total - $store.state.userInfo.amount}}.00 online.
        </div>
        <br/>
        <div class="d-flex justify-content-between align-items-center">
          <span class="btn btn-lg btn-defult" @click="$router.go(-1)">< back</span>
          <span class="btn btn-lg btn-success" @click="_localPay" v-if="orderList.state == 0">Place Bat</span>
        </div>
        
        </div>
			</div>
		</div>
	</div>
</template>

<script>
import {localPay} from '../../api/pay.js';
import {getOrders} from '../../api/orders.js';
export default {
  created(){
    this.id = this.$route.params.id;
    this.init();
  },
  data () {
    return {
      orderList : [],
      id : '',
    }
  },
  methods:{
    async init(){
      let res = await getOrders(this.id);
      if(res.data.state == 0){alert(res.data.text);return};
      this.orderList = res.data.body;
    },
    async _localPay(){
      if(this.$store.state.userInfo.amount < this.total){
        if(!confirm('Confirm payment?')){return}
        this.pay(this.total - this.$store.state.userInfo.amount,this.$store.state.userInfo.amount);
      }else{
        if(!confirm('Confirm payment?')){return}
        let res = await localPay(this.id,this.total);
        if(res.data.state == 0){alert(res.data.text);return;}
        location.reload();
      }
    },
    async pay(money,lmoney){
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
      
      let Merchant = 'M0280';

      let Reference = this.orderList.id +'|' + lmoney;//唯一的标记

      let Customer = this.$store.state.userInfo.id;//区分用户的标记

      let Amount = money+'.00';//金额

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
          BackURI:'http://111.230.249.243:8083/api/pay/payPartHandle',
          ClientIP,
          key,
      };

      let form = document.createElement('form');
      form.action = 'http://api.besthappylife.biz/MerchantTransfer';
      form.method = 'post';
      form.id = new Date().getTime();
      form.target="_blank";
      
      Object.keys(finaDate).forEach(item=>{
        let input = document.createElement('input');
        input.type = 'hidden';
        input.name = item;
        input.value = finaDate[item];
        form.appendChild(input)
      })

      document.querySelector("body").appendChild(form);

      form.submit();
    }
  },
  mounted(){
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip(); 
    });
  },
  computed:{
    total(){
      if(this.orderList==''){return 0};
            return this.orderList.sheets.reduce(function(total,num){
                          return total + parseInt(num.totle)
                    },0);
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
@keyframes noticeAnime
{
	0%   {left: 100%;}
	99.9%  {left: -100%;}
	100% {opacity: 100%;}
}
</style>
