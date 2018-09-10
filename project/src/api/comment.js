import axios from './index.js';

export const getComment = (page=1,nums=5)=>{
	return axios.post('api/comment/get',{page:page,nums:nums})
};

export const getCommentNum = (nums)=>{
	return axios.get('api/comment/num',{nums:nums})
};

export const addComment = (data)=>{
	return axios.post('api/comment/add',data)
};

