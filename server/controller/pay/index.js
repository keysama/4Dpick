const orderModules = require('../../modules/orderModules');

module.exports={
	payHandle : async (ctx,next) => {
		let status = ctx.request.body.Status;
		let oid = ctx.request.body.Reference;
		let user = ctx.request.body.Customer;

		if(status != '000'){ctx.errorCode=9;next();return};

		let step1 = await orderModules.payHandle(oid,user);
		if(step1 === false){ctx.errorCode=0;next();return};
		console.log('用户付款成功，uid：'+user);
		
		await next();
	}
}