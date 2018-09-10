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
	},
	getConfig : async () => {
		let sql = `SELECT * FROM config`;
		let step1 = await db(sql);
		if(step1 === false){return false}

		let data = {};
		step1.forEach(item=>{
			data[item.name] = item.value
		})

		return data;
	},
	setConfig : async (con) => {
		let keys = Object.keys(con);

		console.log(con)
		console.log(keys)

		for (let i = 0;i < keys.length;i++){
			let item = keys[i];
			let sql = `UPDATE config SET value='${con[item]}' WHERE name='${item}'`;
			console.log(sql)
			let step1 = await db(sql);
			if(step1 === false){return false}
		}

		return true;
	},
	getSpecialDate : async () => {
		let sql =`SELECT * FROM specialDate ORDER BY id DESC`;
		let step1 = await db(sql);
		if(step1 === false){return false}
		return step1;
	},
	addSpecialDate : async (date,remark) => {
		let sql =`INSERT INTO specialDate (date,remark,createTime) VALUES ('${date}','${remark}','${Date.now()}')`;
		let step1 = await db(sql);
		if(step1 === false){return false}
		return true;
	},
	deleteSpecialDate : async (id) => {
		let sql = `DELETE FROM specialDate WHERE id=${id}`;
		let step1 = await db(sql);
		if(step1 === false){return false}
		return true;
	}
}
