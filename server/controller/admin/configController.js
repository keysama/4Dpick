const configModules = require('../../modules/admin/configModules.js');
module.exports = {
	randerConfig : async (ctx,next) => {
		let step1 = await configModules.getConfig();
		if(step1 === false){ctx.body='获取数据出错';next();return}
		let info = {
			user : ctx.session.admin,
			path : ctx.req.url,
			config : step1
		}
		console.log('randerConfig');
		await ctx.render('config',info)
		await next();
	},
	addDate : async (ctx,next) => {
		let step1 = await configModules.getSpecialDate();
		if(step1 === false){ctx.body='获取数据出错';next();return}

		let info = {
			user : ctx.session.admin,
			path : ctx.req.url,
			dates : step1
		}
		console.log('addDate');
		await ctx.render('addDate',info)
		await next();
	},
	setConfig : async (ctx,next) => {
		let data = ctx.request.body;
		if(!/^([\d]|[1\d]|2[0-3])-([\d]|[1-5][\d])-([\d]|[1-5][\d])$/.test(data.timelimit)){
			ctx.body='输入时间格式有误！'
			next();
			return;
		}

		let step1 = await configModules.setConfig(data);
		if(step1 === false){ctx.body='更新出错';next();return;}

		ctx.redirect('/admin/config')
		await next();
	},
	insertSpecialDate : async (ctx,next) => {
		let date = ctx.request.body.date,
			remark = ctx.request.body.remark;

		let step1 = await configModules.addSpecialDate(date,remark);
		if(step1 === false){ctx.body='更新出错';next();return;}

		ctx.redirect('/admin/addDate')
		await next();
	},
	deleteDate : async (ctx,next) => {
		let id = ctx.params.id;
		let step1 = await configModules.deleteSpecialDate(id);
		if(step1 === false){ctx.body='更新出错';next();return;}

		ctx.redirect('/admin/addDate')
		await next();
	}
}