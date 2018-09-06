<template>
	<div class="main">
		<div class="container">
			<div class="notice">
				<span>公告公告公告公告公告公告公告公告公告公告</span>
			</div>
			<div class="banner">
				<img src="/static/img/lottery-banner.jpg" alt="">
			</div>
			<div class="info">
				<span>Check Latest 4D Results (Keputusan 4d) for Malaysia Lottery | 4DPick</span>
			</div>
			<div class="row crads">
				<div class="col-md-4 cardBox" v-for="(item,key) in fourResult2" :key="key">
					<div class="card">
						<div class="card-header">
							<img class="float-left" :src="item.title | filterLogo">
							<div class="title d-flex align-items-center justify-content-center">
								<span>{{item.title}}</span>
							</div>
							<router-link class="buy_now hover" to="/buy" tag="span">Buy Now!</router-link>
						</div>
						<div class="card-time d-flex justify-content-between">
							<span>Date: {{item.date}}</span>
							<span>Draw No.: {{item.drawNumber}}</span>
						</div>
						<div class="card-body d-flex flex-column align-items-start">
							<div class="line">
								<div class="float-left d-50">First Prize</div>
								<div class="float-right d-50 bg-white ">{{item.firstPrize}}</div>
							</div>
							<div class="line">
								<div class="float-left d-50">Second Prize</div>
								<div class="float-right d-50 bg-white ">{{item.secondPrize}}</div>
							</div>
							<div class="line">
								<div class="float-left d-50">Third Prize</div>
								<div class="float-right d-50 bg-white text-black">{{item.thirdPrize}}</div>
							</div>
						</div> 
						<div class="card-footer">
							<div class="d-flex align-items-center justify-content-center">Specials</div>
							<div class="bg-white">
								<span>{{item.specials0}}</span>
								<span>{{item.specials1}}</span>
								<span>{{item.specials2}}</span>
								<span>{{item.specials3}}</span>
								<span>{{item.specials4}}</span>
								<span>{{item.specials5}}</span>
								<span>{{item.specials6}}</span>
								<span>{{item.specials7}}</span>
								<span>{{item.specials8}}</span>
								<span>{{item.specials9}}</span>
							</div>
						</div>
						<div class="card-footer">
							<div class="d-flex align-items-center justify-content-center">Consolations</div>
							<div class="bg-white">
								<span>{{item.consolations0}}</span>
								<span>{{item.consolations1}}</span>
								<span>{{item.consolations2}}</span>
								<span>{{item.consolations3}}</span>
								<span>{{item.consolations4}}</span>
								<span>{{item.consolations5}}</span>
								<span>{{item.consolations6}}</span>
								<span>{{item.consolations7}}</span>
								<span>{{item.consolations8}}</span>
								<span>{{item.consolations9}}</span>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
import {get4dResult} from '../../api/4dresult.js';
export default {
	created(){
		this.init();
	},
 	data() {
		return {
			fourResult : {},
		}
	},
	computed:{
		fourResult2(){
			switch(parseInt(this.$store.state.homeMode)){
				case 0 : return this.fourResult;break;
				case 1 : return {magnum:this.fourResult.magnum,damacai:this.fourResult.damacai,toto:this.fourResult.toto};break;
				case 2 : return {sabah88:this.fourResult.sabah88,sarawak:this.fourResult.sarawak,sandakan:this.fourResult.sandakan};break;
				case 3 : return {singapore:this.fourResult.singapore};break;
				default : return '';break;
			}
		}
	},
	methods:{
		async init(){
			let res = await get4dResult();
			if(res.data.state == 0){alert(res.data.text);return}
			this.fourResult = res.data.body;
		}
	},
	filters:{
		filterLogo(title){
			switch (title){
				case 'magnum' : return '/static/logo/logo-magnum.jpg';break;
				case 'damacai' : return '/static/logo/logo-pmp.jpg';break;
				case 'toto' : return '/static/logo/logo-toto.jpg';break;
				case 'sabah88' : return '/static/logo/logo-sabah88.jpg';break;
				case 'sarawak' : return '/static/logo/logo-sarawak.jpg';break;
				case 'sandakan' : return '/static/logo/logo-stc4d.jpg';break;
				case 'singapore' : return '/static/logo/logo-singapore.jpg';break;
			}

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
	  .banner{
		  img{
			  width: 100%;
		  }
	  }
	  .info{
		 	 font-size: 25px;
			font-weight: 500;
	  }
	  .card{
		  border-radius: 0;
		  border:none;
		  margin-top: 10px;
		  color:#fff;
		  position: relative;
		  .card-header{
			  border-top:5px solid #fff;
			  border-bottom:3px solid #fff;
			  border-radius: 0;
			  padding:1px;
			  overflow: hidden;
			  height:50px;
			  font-weight: 600;
			  font-size: 20px;
			  img{
				  width:50px;
			  }
			  .title{
				  width: calc(100% - 150px);
				  height: 100%;
			  }
		  }
		  .card-body{
			  padding:0;
			  .line{
				  border-bottom:5px splid #fff;
				  width:100%;
				  text-align: center;
				  border:2px solid #fff;
				 	font-size: 150%;
    				font-weight: bold;
				  .bg-white{
					  color: #000;
					  border:1px solid #ccc;
				  }
				  div{
					  width: 50%;
				  }
			  }
		  }
		  .card-footer{
			 	 padding:0;
				font-size: 120%;
				font-weight: bold;
				span{
					border: 1px solid #ccc;
					border-radius: 2px;
				}
				.bg-white{
					padding:2px;
					color: #000;
					text-align: center;
					span{
						display: inline-block;
						width: 17%;
						text-align: center;
						margin-bottom: 4px;
						border: 1px solid #ccc;
						border-radius: 2px;
						padding:2px 8px;
						font-size: 16px;
					}
				}
		  }
		  .card-time{
			  background-color: #fff;
			  color:#000;
			  font-size: 16px;
		  }
		  .buy_now{
			  color: rgb(255, 37, 55);
			  position: absolute;
			  top:10px;
			  right:2px;
			  animation:frash 1s ease-in-out infinite;
		  }
	  }
  }
}
@keyframes frash
{
	0%   {opacity: 0;}
	50%  {opacity: 1;}
	100% {opacity: 0;}
}
@keyframes noticeAnime
{
	0%   {left: 100%;}
	99.9%  {left: -100%;}
	100% {opacity: 100%;}
}
.cardBox:nth-child(1) .card{
	background-color: #000;
}
.cardBox:nth-child(2) .card{
	background-color: #292D50;
}
.cardBox:nth-child(3) .card{
	background-color: #AB0006;
}
.cardBox:nth-child(4) .card{
	background-color: #3333ff;
}
.cardBox:nth-child(5) .card{
	background-color: #016701;
}
.cardBox:nth-child(6) .card{
	background-color: #f8c100;
}
.cardBox:nth-child(7) .card{
	background-color: #0378bb;
}
.cardBox:nth-child(8) .card{
	background-color: #AB0006;
}
</style>
