import axios from './index.js';

export const getOrders = (oid)=>{
	return axios.post('api/orders/getOrders',{id:oid})
};

export const createOrder = (data)=>{
	return axios.post('api/orders/createOrder',data)
};

export const getPiedOrders = ()=>{
	return axios.post('api/orders/getPiedOrders')
};

export const createTopUp = (data)=>{
	return axios.post('api/orders/createTopUp',data)
};

export const getTopUp = ()=>{
	return axios.post('api/orders/getTopUp')
};

export const getBets = ()=>{
	return axios.post('api/orders/getBets')
};

