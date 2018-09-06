const db = require('../tools/promise.js').db;

module.exports = {
	registe : async (data) => {
		let {nickname,username,email,phone,password,password2} = data;

		let time = Date.now();

		if(password != password2){return false};

		let sql = `INSERT INTO user (nickname,username,email,phone,password,createTime) VALUES ('${nickname}','${username}','${email}','${phone}','${password}','${time}')`
		let step1 = await db(sql);

		if(step1 === false){return false}

		return step1.insertId;
	},
	checkUserName : async (username) => {
		let sql = `SELECT * FROM user WHERE username='${username}'`;
		let step1 = await db(sql);
		if(step1 === false){return false}
		return step1.length <=0;
	},
	login : async (username,password) => {
		let sql = `SELECT * from user WHERE username='${username}'`;
		let step1 = await db(sql);
		if(step1 === false){return false}
		if(step1.length <= 0){return 1}//没有该用户
		if(step1[0].password != password){return 2}//密码错误
		step1[0].password = '***';
		return step1[0];
	},
	edit : async (id,nickname,email,phone) => {
		let sql = `UPDATE user SET nickname='${nickname}',email='${email}',phone='${phone}' WHERE id=${id}`;
		let step1 = await db(sql);
		if(step1 === false){return false};

		let sql2 = `SELECT * from user WHERE id=${id}`;
		let step2 = await db(sql2);
		if(step2 === false){return false};
		step2[0].password = '***';

		return step2[0];

	},
	getUserInfo : async (id,mode = false) => {
		let sql = `SELECT * FROM user WHERE id=${id}`;
		let step1 = await db(sql);
		if(step1 === false || step1.length<=0){return false};

		if(!mode){
			step1[0].password = '***';
		}

		return step1[0];
	},
	editPass : async (id,newPass) => {
		let sql = `UPDATE user SET password='${newPass}' WHERE id=${id}`;
		let step1 = await db(sql);
		if(step1 === false || step1.length<=0){return false};
		return true;
	}
}
