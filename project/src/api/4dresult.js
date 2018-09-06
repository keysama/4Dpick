import axios from './index.js';

export const get4dResult = ()=>{
	return axios.post('api/result/get4dResult')
};

export const get4dDate = ()=>{
	return axios.post('api/result/get4dDate')
};
