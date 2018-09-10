const configModules = require('../../modules/configModules');

module.exports={
	getConfig : async (ctx,next) => {
		let key = ctx.request.body.key;

		let step1 = await configModules.getConfig(key);
		if(step1 === false){ctx.errorCode=0;next();return};

		ctx.body={state:1,text:'success',body:step1};
		await next();
	},
	getSpecialDate : async (ctx,next) => {

		let step1 = await configModules.getSpecialDate();
		if(step1 === false){ctx.errorCode=0;next();return};

		ctx.body={state:1,text:'success',body:step1};
		await next();
	},
}
