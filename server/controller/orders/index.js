const orderModules = require('../../modules/orderModules');

module.exports={
	createOrder : async (ctx,next) => {
		let date = ctx.request.body.date,
			sheets = ctx.request.body.sheets,
			user = ctx.session.user.id;

		let step1 = await orderModules.createOrder(date,sheets,user);
		if(step1 === false){ctx.errorCode=0;next();return};

		ctx.body={state:1,text:'success',body:step1};
		await next();
	},
	getOrders : async (ctx,next) => {
		let id = ctx.request.body.id;

		let step1 = await orderModules.getOrders(id);
		if(step1 === false){ctx.errorCode=0;next();return};

		ctx.body={state:1,text:'success',body:step1};
		await next();
	},
	getPiedOrders : async (ctx,next) => {
		let user = ctx.session.user.id;

		let step1 = await orderModules.getPaidOrders(user);
		if(step1 === false){ctx.errorCode=0;next();return};

		ctx.body={state:1,text:'success',body:step1};
		await next();
	}
}