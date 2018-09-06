import {
    LOGIN,
    LOGOUT,
    LOADING_START,
    LOADING_END
} from './mutation_types.js'

import {setStore, getStore} from '../config/mUtils.js'
// import {logout} from '../api/account.js';
export default {
	[LOGIN](state,data){
        //存到state
        state.userInfo=data;
        //存到缓存
        setStore('userInfo',data);
    },
    [LOGOUT](state){
        state.userInfo='';
        window.localStorage.removeItem('userInfo')
    },
    [LOADING_START](state){
        state.loading=true;
    },
    [LOADING_END](state){
        state.loading=false;
    },
}