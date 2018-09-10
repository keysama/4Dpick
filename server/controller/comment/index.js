const commentModules = require('../../modules/commentModules');

module.exports={
	get : async (ctx,next) => {
		let page = ctx.request.body.page;
		let nums = ctx.request.body.nums;

		console.log(ctx.request.body)

		let step1 = await commentModules.getComments(page,nums);
		if(step1 === false){ctx.errorCode=0;next();return};

		ctx.body={state:1,text:'success',body:step1};
		await next();
	},
	num : async (ctx,next) => {
		let nums = ctx.request.body.nums;

		let step1 = await commentModules.getCommentsNum(nums);
		if(step1 === false){ctx.errorCode=0;next();return};

		ctx.body={state:1,text:'success',body:step1};
		await next();
	},
	add : async (ctx,next) => {
		let content = ctx.request.body.content,
			creater = ctx.session.user ? ctx.session.user.nickname : 'tourist',
			user = ctx.session.user ? ctx.session.user.id : '';

		let step1 = await commentModules.addComment(content,creater,user);
		if(step1 === false){ctx.errorCode=0;next();return};

		ctx.body={state:1,text:'success',body:step1};
		await next();
	}
}
