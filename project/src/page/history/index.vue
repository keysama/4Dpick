<template>
	<div class="main">
		<div class="container">
			<div class="notice">
				<span>公告公告公告公告公告公告公告公告公告公告</span>
			</div>
      <h2>My Bets</h2>
			<div class="registe-box row">
        <div class="col-md-12">
          <div class="form-group">
            There are total {{orderList.length}} records in the result.
          </div>
        <div class="table-responsive table-sm">
        <table class="table table-striped table-hover">
            <thead class="thead-dark">
              <tr>
                <th>Order Number</th>
                <th>Draw Date</th>
                <th >Permutation</th>
                <th >Bet</th>
                <th >Board</th>
                <th>Sub Total</th>
                 <th>Pay Time</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,key) in orderList" :key="key">
                <td>{{item.number}}</td>
                <td>{{item.date}}</td>
                <td>{{item.perms}}</td>
                <td>
                  {{item.big==0?'':'Big:'+item.big+','}}
                  {{item.small==0?'':'Small:'+item.small+','}}
                  {{item.fourA==0?'':'4A:'+item.fourA}}
                </td>
                <td>
                  <span class="badge badge-pill badge-info" v-for="(item2,key2) in item.numbers.split('|')" :key="key2">
                    {{item2}}
                  </span>
                </td>
                <td>{{item.totle}}</td>
                <td>{{item.createTime | timeFilter}}</td>
              </tr>
            </tbody>
        </table>
        </div>
<!-- <ul class="pagination">
  <li class="page-item"><a class="page-link" href="#">Previous</a></li>
  <li class="page-item"><a class="page-link" href="#">1</a></li>
  <li class="page-item"><a class="page-link" href="#">2</a></li>
  <li class="page-item"><a class="page-link" href="#">3</a></li>
  <li class="page-item"><a class="page-link" href="#">Next</a></li>
</ul> -->
        </div>
			</div>
		</div>
	</div>
</template>

<script>
import {getPiedOrders,getBets} from '../../api/orders.js';
export default {
  created(){
    this.init();
  },
  methods:{
    async init(){
      let res = await getBets();
      if(res.data.state == 0){alert(res.data.text);return};
      this.orderList = res.data.body;
    }
  },
  data () {
    return {
      orderList:[]
    }
  },
  mounted(){
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip(); 
    });
  },
  filters:{
    timeFilter(value){
        var now = new Date(parseInt(value)),
            y = now.getFullYear(),
            m = now.getMonth() + 1,
            d = now.getDate();
        return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d);
    }
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
