const orderModules = require('../../modules/orderModules');

module.exports={
	payHandle : async (ctx,next) => {
		let status = ctx.request.body.Status;
		let oid = ctx.request.body.Reference;
		let user = ctx.request.body.Customer;

		if(status != '000'){ctx.errorCode=9;next();return};

		let step1 = await orderModules.payHandle(oid,user);
		if(step1 === false){ctx.errorCode=0;next();return};
		ctx.logger.info('用户:'+user+'通过help2pay付款成功');
		ctx.body={state:1,text:'success'};
		await next();
	},
	topUpHandle : async (ctx,next) => {
		let status = ctx.request.body.Status;
		let tid = ctx.request.body.Reference;
		let user = ctx.request.body.Customer;
		let amount = ctx.request.body.Amount;

		if(status != '000'){ctx.errorCode=9;next();return};

		let step1 = await orderModules.topUpHandle(tid,user,amount);
		if(step1 === false){ctx.errorCode=0;next();return};
		ctx.logger.info('用户:'+user+'通过help2pay充值成功,money:'+amount);
		ctx.body={state:1,text:'success'};
		await next();
	},
	localPay : async (ctx,next) => {
		let id = ctx.request.body.id;
		let money = ctx.request.body.money;

		if(!ctx.session.user){ctx.errorCode=7;next();return};

		let user = ctx.session.user.id;

		let step1 = await orderModules.localPay(id,money,user);
		if(step1 === false){ctx.errorCode=0;next();return};

		ctx.logger.info('用户:'+user+'通过钱包付款成功,money:'+step1);
		ctx.body={state:1,text:'success'};
		await next();
	},
	payPartHandle : async (ctx,next) => {
		let status = ctx.request.body.Status;
		let tid = ctx.request.body.Reference.split('|')[0];
		let lmoney = ctx.request.body.Reference.split('|')[1];
		let user = ctx.request.body.Customer;
		let amount = ctx.request.body.Amount;

		if(status != '000'){ctx.errorCode=9;next();return};
		ctx.logger.info('用户:'+user+'通过help2pay成功支付钱包不足金额'+amount);

		let step1 = await orderModules.localPay(tid,lmoney,user);
		if(step1 === false){ctx.errorCode=0;next();return};

		ctx.logger.info('用户:'+user+'通过钱包成功支付剩余金额'+lmoney);
		
		ctx.body={state:1,text:'success'};
		await next();
	}
}