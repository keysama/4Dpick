import App from '../App';
const home= r => require.ensure([],() => r(require('../page/home/index.vue')),'home')
const buy = r => require.ensure([],() => r(require('../page/buy/buy.vue')),'buy')
const login = r => require.ensure([],() => r(require('../page/account/login')),'login')
const registe = r => require.ensure([],() => r(require('../page/account/registe')),'registe')
const forget = r => require.ensure([],() => r(require('../page/account/forget')),'forget')
// const user= r => require.ensure([],() => r(require('../page/user/user')),'user')
const mypage = r => require.ensure([],() => r(require('../page/account/mypage/mypage')),'mypage')
const mypage_detail = r => require.ensure([],() => r(require('../page/account/mypage/children/detail')),'mypage_detail')
const mypage_setting = r => require.ensure([],() => r(require('../page/account/mypage/children/setting')),'mypage_setting')
const mypage_bank = r => require.ensure([],() => r(require('../page/account/mypage/children/bank')),'mypage_bank')
//
const pup = r => require.ensure([],() => r(require('../page/pup/index')),'pup')
const history = r => require.ensure([],() => r(require('../page/history/index')),'history')
const orders = r => require.ensure([],() => r(require('../page/orders/index')),'orders')
const payResult = r => require.ensure([],() => r(require('../page/orders/result')),'payResult')

const Top_up = r => require.ensure([],() => r(require('../page/pup/Top_up')),'Top_up')
export default [{
	path:'/',
	component:App,				//顶级路由，www.xxx.com/#/
	children:[
		{						//二级路由
			path:'',			//www.xxx.com/#/
			redirect:'/home'	//为空的时候调转到/home
		},
		{
			path:'/home',
			component:home,		//www.xxx.com/#/home
		},
		{
			path:'buy',
			component:buy,		//www.xxx.com/#/home
			meta:{checkLogin:true}
		},
		{
			path:'/login',
			component:login		//www.xxx.com/#/home
		},
		{
			path:'/registe',
			component:registe		//www.xxx.com/#/home
		},
		{
			path:'/forget',
			component:forget		//www.xxx.com/#/home
		},
		{
			path:'/user',
			component:mypage,
			meta:{checkLogin:true},
			children:[
				{
					path:'/',
					redirect:'/user/detail',
					meta:{checkLogin:true}
				},
				{
					path:'detail',
					component:mypage_detail,
					meta:{checkLogin:true}
				},
				{
					path:'setting',
					component:mypage_setting,
					meta:{checkLogin:true}
				},
				{
					path:'bank',
					component:mypage_bank,
					meta:{checkLogin:true}
				}
				
			]
		},
		{
			path:'/pup',
			component:pup,
			meta:{checkLogin:true}
		},
		{
			path:'/Top-up',
			component:Top_up,
			meta:{checkLogin:true}
		},
		{
			path:'/history',
			component:history,
			meta:{checkLogin:true}
		},
		{
			path:'/orders/:id',
			component:orders,
			meta:{checkLogin:true}
		},
		{
			path:'/payResult',
			component:payResult,
			meta:{checkLogin:true}
		}
	]

}]
