const db = require('../tools/promise.js').db;
const startTrans = require('../tools/promise.js').startTrans;
const dbs = require('../tools/promise.js').dbs;


module.exports = {
	getConfig : async (key) => {
		let sql1 = `SELECT * FROM config WHERE name='${key}'`;
		let step1 = await db(sql1);
		if(step1===false){return false}

		return step1;
	},
	getSpecialDate: async (key) => {
		let sql1 = `SELECT * FROM specialDate ORDER by id DESC`;
		let step1 = await db(sql1);
		if(step1===false){return false}

		return step1;
	},
}
