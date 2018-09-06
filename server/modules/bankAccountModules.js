const db = require('../tools/promise.js').db;

module.exports = {
	addBank : async (uid,bankName,accountNumber,accountName) => {
		let time = Date.now();

		let sql = `INSERT INTO bankAccounts (user,bankName,accountNumber,accountName,createTime) VALUES (${uid},'${bankName}','${accountNumber}','${accountName}','${time}')`
		let step1 = await db(sql);

		if(step1 === false){return false}

		return true;
	}
}
