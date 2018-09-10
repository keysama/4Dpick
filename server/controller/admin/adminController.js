module.exports = {
	hello : async (ctx, next) => {
		console.log('HELLO ! Here is adminController !')
		await ctx.render('index',{info:'hello ejs!'})
		await next();
	},
	checklogin : async (ctx,next) => {
		console.log('检查登陆')
		if(!ctx.session.admin && ctx.req.url != '/admin/login'){
			ctx.redirect('/admin/login');
			return;
		}
		await next();
	},
	randerIndex : async (ctx,next) => {
		let info = {
			user : ctx.session.admin,
			path : ctx.req.url
		}

		await ctx.render('index',info)
		await next();
	}
}