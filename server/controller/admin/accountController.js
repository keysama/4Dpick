const accountModules = require('../../modules/admin/accountModules.js');
module.exports = {
	randerLogin : async (ctx,next) => {
		console.log('randerLogin');
		await ctx.render('login',{info:'hello ejs!'})
		await next();
	},
	login : async (ctx,next) => {
		let username = ctx.request.body.username,
			password = ctx.request.body.password

		let step1 = await accountModules.login(username,password);
		if(step1 === false){ctx.errorCode=0;next();return};
		if(step1 === 1){ctx.errorCode=4;next();return};
		if(step1 === 2){ctx.errorCode=5;next();return};
		console.log('用户登陆成功,login id: '+username)

		ctx.session.admin = step1;

		ctx.redirect('/admin')
		await next();
	},
	logout : async (ctx,next) => {
		delete ctx.session.admin;
		ctx.redirect('/admin/login');
		await next();
	}
}