const db = require('../tools/promise.js').db;
const startTrans = require('../tools/promise.js').startTrans;
const dbs = require('../tools/promise.js').dbs;


module.exports = {
	getComments : async (page,nums) => {
		console.log('page',page)
		console.log('nums',nums)
		let start = (page-1)*nums;
		let end = page*nums;

		let sql1 = `SELECT * FROM comment ORDER BY id DESC LIMIT ${start},${end}`;
		let step1 = await db(sql1);
		if(step1===false){return false}

		return step1;
	},
	getCommentsNum: async (nums) => {
		let sql1 = `SELECT count(*) FROM comment`;
		let step1 = await db(sql1);
		if(step1===false){return false}

		return step1[0]['count(*)'];
	},
	addComment: async (content,creater,user) => {
		let date = Date.now();

		let sql1 = `INSERT INTO comment (content,creater,${user == ''?'':'user,'}createTime) VALUES ('${content}','${creater}',${user == ''?'':user+','}'${date}')`;
		let step1 = await db(sql1);
		if(step1===false){return false}

		return step1;
	},
}
