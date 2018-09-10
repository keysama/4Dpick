import axios from './index.js';

export const localPay = (id,money)=>{
	return axios.post('api/pay/localPay',{id:id,money:money})
};
