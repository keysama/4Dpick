<template>
	<div class="main">
		<div class="container">
			<div class="notice">
				<span>公告公告公告公告公告公告公告公告公告公告</span>
			</div>
      <h2>Buy 4D Online!</h2>
            <div class="row line ">
        <div class="col-md-2">
          <select class="form-control ht-draw-date" data-toggle="popover"  data-content="Please select a draw date." data-trigger="manual" data-container="body" data-original-title="Required" style="font-size:12px;padding-left:0" v-model="date">
            <option value="">Please select a date</option>
            <option :value="item | date2value" v-for="(item,key) in getFutherDate" :key="key">{{item | date2str}}</option>
          </select>
        </div>
        <div class="col-md-3 d-flex justify-content-around">
        </div>
        <div class="col-md-6 d-flex justify-content-around align-items-center hidden-sm">
          <img src="/static/logo/logo-magnum.jpg" style="width:46px">
          <img src="/static/logo/logo-pmp.jpg" style="width:46px">
          <img src="/static/logo/logo-sabah88.jpg" style="width:46px">
          <img src="/static/logo/logo-sarawak.jpg" style="width:46px">
          <img src="/static/logo/logo-singapore.jpg" style="width:46px">
          <img src="/static/logo/logo-stc4d.jpg" style="width:46px">
          <img src="/static/logo/logo-toto.jpg" style="width:46px">
        </div>
        <div class="col-md-1 fourth" >
          <span>Sub Total</span>
        </div>
      </div>
      <div class="row line " v-for="(item,key) in form" :key="key">
        <div class="col-md-2 first">
          <div class="input-group">
						<span class="input-group-addon noRam-12">{{key+1}}</span>
						<input type="number" class="form-control number-input noRam-12" oninput="this.value=this.value.length>4?this.value.substr(0,4):this.value;" placeholder="Number #" v-model="item.number">
            <button type="button" class="btn btn-primary btn-sm dropdown-toggle noRam-12" data-toggle="dropdown" style="min-width:80px">
                {{item.perms}}
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item noRam-12" @click="item.perms='Straight'">Straight</a>
              <a class="dropdown-item noRam-12" @click="item.perms='BOX'">BOX</a>
              <a class="dropdown-item noRam-12" @click="item.perms='iBOX'">iBOX</a>
            </div>
					</div>
        </div>
        <div class="col-md-3 d-flex justify-content-around second">
          <input type="number" class="form-control number-input noRam-12"  placeholder="Big" v-model="item.big">
          <input type="number" class="form-control number-input noRam-12"  placeholder="Small" v-model="item.small">
          <input type="number" class="form-control number-input noRam-12"  placeholder="4A" v-model="item.fourA">
        </div>
        <div class="col-md-6 third d-flex justify-content-around align-items-center">
          <div v-for="(item2,key2) in numbers" :key="key2">
            <div class="text-center hidden-md">{{item2 | filterMmbers}}</div>
            <input class="hidden-sm cb-lg" type="checkbox" v-model="item.numbers" :value="item2" :id="key2">
            <input class="hidden-md" type="checkbox" v-model="item.numbers" :value="item2"/>
          </div>
        </div>
        <div class="col-md-1 fourth" >
          <input type="number" class="form-control noRam-12 w-100" disabled :value="subTotle(item)">
        </div>
      </div>
      <div>
        <span class="btn btn-primary" :class="{'disabled':!allow_buy}" style="margin-top:10px" @click="buy">Continue ></span>
      </div>

		</div>
	</div>
</template>

<script>
import {get4dDate} from '../../api/4dresult.js';
import {createOrder} from '../../api/orders.js';
export default {
  created(){
    this.init();
  },
  data () {
    let formList=[];
    for(let i=0;i<15;i++){
      formList.push({
          number:'',
          perms:'Straight',
          big:'',
          small:'',
          fourA:'',
          numbers:[]
      })
    }
    return {
      form : formList,
      numbers : ['magnum','damacai','sabah88','sarawak','singapore','sandakan','toto'],
      date : ''
    }
  },
  computed:{
     getFutherDate(){
      var result = [];
      var now = new Date();
      Date.prototype.getMonthDay = function(){
        return this.getDay()+'.'+(this.getMonth() + 1) + '.' + this.getDate() + '.' + this.getFullYear();
      }
      for(var i = 0 ; i < 7 ; i ++){
        now.setDate(now.getDate() + 1);
        result.push(now.getMonthDay())
      }

      result = result.filter(item=>item.split('.')[0]==3 ||item.split('.')[0]==6 || item.split('.')[0]==0)
      return result;
    },
    allow_buy(){
      return this.form.filter(item=>{
        if(item.big=='' && item.small=='' && item.fourA==''){
          return false;
        }
        if(item.number.length !=4){
          return false;
        }
        if(item.numbers.length<=0){
          return false
        }
        return true;
      }).length>0;
    }
  },
  mounted(){
    
  },
  methods:{
    async init(){

      
    },
    subTotle(data){
      if(data.number.length<4){return 0};
      let number = data.number;
      let num = this.subRepeatNum(number);
      let big = data.big == '' ? 0 : parseInt(data.big);
      let small = data.small == '' ? 0 : parseInt(data.small);
      let fourA = data.fourA == '' ? 0 : parseInt(data.fourA);

      let mode = data.perms == 'BOX' ? 1 : 0;

      let select = data.numbers.length;
      console.log(num,(big+small+fourA),select)

      if(mode == 1){
        return num * (big+small+fourA) * select;
      }else{
        return (big+small+fourA) * select;
      }
    },
    subRepeatNum(str){
      let double = false;
      let oneDouble = '';
      let p = 0;
      let arr = str.split('');
      arr.forEach(item=>{
        let stemp = arr.filter(item2=>item2==item).length;
        if(stemp == 2 && p==2 && item!=oneDouble){double=true;};
        if(stemp == 2){oneDouble=item;};
        if(stemp > p){p=stemp};
      })
      if(double){
        return 6
      }else{
        switch(parseInt(p)){
          case 1 : return 24;break;
          case 2 : return 12;break;
          case 3 : return 4;break;
          case 4 : return 1;break;
          default : return 0;break;
        }
      }
    },
    async buy(){
      if(this.date == ''){alert('plsease select a date');return};
      let data = {
        date : this.date,
        sheets : this.form.filter(item=>{
                    if(item.big=='' && item.small=='' && item.fourA==''){
                      return false;
                    }
                    if(item.number.length !=4){
                      return false;
                    }
                    if(item.numbers.length<=0){
                      return false
                    }
                    return true;
                  })
      }
      // console.log(data);return;
      let res = await createOrder(data);
      if(res.data.state==0){alert(res.data.text);return};
      this.$router.push('/orders/'+res.data.body.oid)
    }
  },
  filters:{
    filterMmbers(value){
      switch (value){
        case 'magnum' : return 'M';break;
        case 'damacai' : return 'P';break;
        case 'sabah88' : return 'B';break;
        case 'sarawak' : return 'D';break;
        case 'singapore' : return 'S';break;
        case 'sandakan' : return 'W';break;
        case 'toto' : return 'T';break;
        default : return '';break;
      }
    },
    date2str(value){
      let week = value.split('.')[0];
      let month = value.split('.')[1];
      let day = value.split('.')[2];
      let year = value.split('.')[3];
      let weekStr = '';

      switch(parseInt(week)){
        case 0 : weekStr = 'Sun';break;
        case 1 : weekStr = 'Mon';break;
        case 2 : weekStr = 'Tues';break;
        case 3 : weekStr = 'Wed';break;
        case 4 : weekStr = 'Thur';break;
        case 5 : weekStr = 'Fri';break;
        case 6 : weekStr = 'Sat';break;
        default : weekStr = '' ;break;
      }
      return weekStr+', '+day+'/'+month+'/'+year;
    },
    date2value(value){
      let month = value.split('.')[1];
      let day = value.split('.')[2];
      let year = value.split('.')[3];
      return year+'-'+month+'-'+day;
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
  }
}
.input-group-addon {
  display: flex;
  align-items: center;
    padding: 6px 2px;
    font-size: 12px;
    font-weight: 400;
    line-height: 1;
    color: #555;
    text-align: center;
    background-color: #eee;
    border: 1px solid #ccc;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}
.number-input{
  width:20%;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
    margin: 0;
}
.noRam-12{
  font-size: 12px !important;
}
.line{
  .btn-sm{
    padding:4px;
  }
}
.second{
  input{
    width: 32%;
  }
}
.third{
  input{
    width:20px;
  }
}
.fourth{
  input{
    padding:2px;
    font-size: 12px;
  }
}
.first,.second,.third,.fourth{
  margin-top: 10px;
}

.cb-lg{
  width:30px !important;
  height:30px !important;
  display: block;
  border-radius: 10px !important;
  background-color: #fff;
}
@keyframes noticeAnime
{
	0%   {left: 100%;}
	99.9%  {left: -100%;}
	100% {opacity: 100%;}
}
</style>
