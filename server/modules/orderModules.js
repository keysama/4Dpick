const db = require('../tools/promise.js').db;
const startTrans = require('../tools/promise.js').startTrans;
const dbs = require('../tools/promise.js').dbs;


module.exports = {
	createOrder : async (date,sheets,user) => {
		let time = Date.now();

		let sheetsStr = sheets;

		let res = await startTrans(async (trans)=>{
			let sql = `INSERT INTO orders (user,date,createTime,state) VALUES (${user},'${date}','${time}',0)`
			let step1 = await dbs(sql,trans);
			if(step1===false){return false}

			let oid = step1.insertId;
			let sqlStr = '';


			for(let i = 0;i<sheets.length;i++){
				let item = sheets[i],
				 	number = item.number,
				 	perms = item.perms,
				 	big = item.big,
				 	small = item.small,
				 	fourA = item.fourA,
				 	numbers = item.numbers.join('|'),
				 	total = subTotal(item);
				sqlStr += `(${oid},'${number}','${perms}',${big?big:0},${small?small:0},${fourA?fourA:0},'${numbers}',${total}),`
			}
			sqlStr=sqlStr.substring(0,sqlStr.length-1);

			let sql2 = `INSERT INTO order_sheets (oid,number,perms,big,small,fourA,numbers,totle) VALUES ${sqlStr}`
			let step2 = await dbs(sql2,trans);
			if(step2===false){return false}

			return {oid:oid}
		})
		return res;

	},
	getOrders : async (id) => {
		let sql1 = `SELECT * FROM orders WHERE id=${id}`;
		let step1 = await db(sql1);
		if(step1===false){return false}

		let sql2 = `SELECT * FROM order_sheets WHERE oid=${id}`;
		let step2 = await db(sql2);
		if(step2===false){return false}

		if(step1.length <= 0 || step2.length == 0){return false}
		step1[0].sheets = step2;

		return step1[0];
	},
	getPaidOrders : async (user) => {
		let sql1 = `SELECT * FROM orders WHERE user=${user} ORDER BY id DESC`;
		let step1 = await db(sql1);
		if(step1===false){return false}

		return step1;
	},
	payHandle : async (oid,user) => {
		let sql1 = `UPDATE orders SET state=1 WHERE id=${oid} AND user=${user}`;
		let step1 = await db(sql1);
		if(step1===false){return false}
			
		return true;
	},
	topUpHandle : async (tid,user,amount) => {

		let res = await startTrans(async (trans)=>{
			console.log('开始充值操作，订单id：'+tid+'，用户：'+user+'，钱：'+amount)
			console.log('将订单状态变为1')
			let sql1 = `UPDATE topUp SET state=1 WHERE id=${tid} AND user=${user}`;
			let step1 = await dbs(sql1,trans);
			if(step1===false){return false}

			if(step1.changedRows==0){return false};
			let sql2 = `SELECT amount,first FROM user WHERE id=${user}`;
			let step2 = await dbs(sql2,trans);
			if(step2===false){return false}
			console.log('查询用户账户：'+step2[0].amount+'，是否第一次：'+step2[0].first)

			let addAt = parseInt(amount);
			let oldAt = step2[0].amount=='' ? 0 : parseInt(step2[0].amount);

			let reward = 0;
			if(step2[0].first==1){
				let sql3 = `SELECT value FROM config WHERE name='reward'`;
				let step3 = await dbs(sql3,trans);
				if(step3 === false){return false}
				reward = step3[0].value;
				console.log('用户第一次充值，奖励:'+reward)
			}

			let sql4 = `UPDATE user SET amount='${oldAt+addAt+parseInt(reward)}',first=0 WHERE id=${user}`;
			let step4 = await dbs(sql4,trans);
			if(step4===false){return false}
			console.log('更新用户钱包，原来的钱：'+oldAt+'，充值的钱：'+addAt+'，奖励的钱：'+reward+'计算后:'+(oldAt+addAt+parseInt(reward)))

			return true;
		})

		if(res===false){return false}
		return true;
	},
	createTopUp : async (user,date,amount) => {
		let sql1 = `INSERT INTO topUp (user,date,amount,state,createTime) VALUES (${user},'${date}','${amount}',0,'${Date.now()}')`;
		let step1 = await db(sql1);
		if(step1===false){return false}
			
		return step1.insertId;
	},
	getTopUp : async (user) => {
		let sql1 = `SELECT * FROM topUp WHERE user=${user} ORDER BY id DESC`;
		let step1 = await db(sql1);
		if(step1===false){return false}
			
		return step1;
	},
	localPay : async (id,money,user) => {
		let res = await startTrans(async (trans)=>{
			let sql1 = `SELECT amount FROM user WHERE id=${user}`;
			let step1 = await dbs(sql1,trans);
			if(step1===false){return false}

			let oldAt = step1[0].amount=='' ? 0 : parseInt(step1[0].amount);

			if(money > oldAt){return false};//余额不足

			let sql2 = `UPDATE user SET amount='${oldAt-money}' WHERE id=${user}`;
			let step2 = await dbs(sql2,trans);
			if(step2===false){return false}

			let sql3 = `UPDATE orders SET state=1 WHERE id=${id}`;
			let step3 = await dbs(sql3,trans);
			if(step3===false){return false}

			return true;
		})

		if(res===false){return false}
		return true;
	},
	getBets : async (user) => {
		let sql1 = `SELECT * FROM orders right join order_sheets on orders.id=order_sheets.oid WHERE orders.user=${user} AND orders.state=1 ORDER BY orders.id DESC`;
		let step1 = await db(sql1);
		if(step1===false){return false};
		return step1;
	} 
}

function subTotal(data){
	  let number = data.number;
	  let num = subRepeatNum(number);
	  let big = data.big == '' ? 0 : parseInt(data.big);
	  let small = data.small == '' ? 0 : parseInt(data.small);
	  let fourA = data.fourA == '' ? 0 : parseInt(data.fourA);

	  let mode = data.perms == 'BOX' ? 1 : 0;

	  let select = data.numbers.length;

	  if(mode == 1){
	    return num * (big+small+fourA) * select;
	  }else{
	    return (big+small+fourA) * select;
	  }
};
function  subRepeatNum(str){
	  let double = false;
	  let oneDouble = '';
	  let p = 0;
	  let arr = str.split('');
	  arr.forEach(item=>{
		    let stemp = arr.filter(item2=>item2==item).length;
		    if(stemp == 2 && p==2 && item!=oneDouble){double=true;};
		    if(stemp == 2){oneDouble=item;};
		    if(stemp > p){p=stemp};
	  })
	  if(double){
	    	return 6
	  }else{
		    switch(parseInt(p)){
			      case 1 : return 24;break;
			      case 2 : return 12;break;
			      case 3 : return 4;break;
			      case 4 : return 1;break;
			      default : return 0;break;
		    }
	  }
}