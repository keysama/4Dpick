import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes.js';
import store from '../store/index.js';
import {LOGIN} from '../store/mutation_types.js';
import {checkLogin,getAmount} from '../api/account';

Vue.use(VueRouter)
const router=new VueRouter({
	routes
})

router.beforeEach(async (to,from,next)=>{
	if(store.state.userInfo==''){
		if(window.localStorage.userInfo){
            let res = await checkLogin(JSON.parse(window.localStorage.userInfo).id);
            if(res.data.state != 0){
                store.commit(LOGIN,JSON.parse(window.localStorage.userInfo),true);
            }else{
                window.localStorage.removeItem('userInfo')
            }
		}
	}
	next();
})
router.beforeEach((to,from,next)=>{
    if(to.meta.checkLogin){
        if(store.state.userInfo){
            next()
        }else{
            if(window.localStorage.userInfo){
                store.commit(LOGIN,JSON.parse(window.localStorage.userInfo),true);
                next();
            }else{
                next('/login')
            }
        }
    }else{
        next()
	}
})
router.beforeEach(async (to,from,next)=>{
	if(store.state.userInfo!=''){
        let res = await getAmount(store.state.userInfo.id);
        if(res.data.state == 0){alert(res.data.text);return;}
        store.state.userInfo.amount = res.data.body.amount;
        store.state.userInfo.first = res.data.body.first;
        window.localStorage.setItem('userInfo', JSON.stringify(store.state.userInfo));
	}
	next();
})
export default router;