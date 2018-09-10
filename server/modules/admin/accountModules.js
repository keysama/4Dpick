const db = require('../../tools/promise.js').db;

module.exports = {
	login : async (username,password) => {
		let sql = `SELECT * from admin WHERE username='${username}'`;
		let step1 = await db(sql);
		if(step1 === false){return false}
		if(step1.length <= 0){return 1}//没有该用户
		if(step1[0].password != password){return 2}//密码错误
		step1[0].password = '***';
		return step1[0];
	}
}
