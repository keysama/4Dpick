import App from '../App';
const home= r => require.ensure([],() => r(require('../page/home/index.vue')),'home')
const buy = r => require.ensure([],() => r(require('../page/buy/buy.vue')),'buy')
const login= r => require.ensure([],() => r(require('../page/account/login')),'login')
const registe= r => require.ensure([],() => r(require('../page/account/registe')),'registe')
// const user= r => require.ensure([],() => r(require('../page/user/user')),'user')

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
			meta:{checkLogin:true}
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
	]

}]
