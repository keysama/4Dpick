const resultModules = require('../../modules/resultModules');

module.exports={
	get4dResult : async (ctx,next) => {
		let step1 = await resultModules.localResult(1);
		if(step1 === false){ctx.errorCode=0;next();return};

		ctx.body={state:1,text:'success',body:step1};
		await next();
	}
}