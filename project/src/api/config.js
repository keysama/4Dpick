import axios from './index.js';

export const getConfig = (key)=>{
	return axios.post('api/config/getConfig',{key:key})
};

export const getSpecialDate = ()=>{
	return axios.post('api/config/getSpecialDate')
};

