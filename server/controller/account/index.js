const accountModules = require('../../modules/accountModules');
const bankAccountModules = require('../../modules/bankAccountModules');

module.exports={
	registe : async (ctx, next) => {
		let bankName = ctx.request.body.bank_name,
			accountNumber = ctx.request.body.bank_accountName,
			accountName = ctx.request.body.bank_number

		ctx.logger.info('用户尝试注册，nickname:'+ctx.request.body.nickname);

		console.log('检查Login ID：'+ctx.request.body.username+'是否存在')
		let step1 = await accountModules.checkUserName(ctx.request.body.username);
		if(step1 === false){ctx.errorCode=1;next();return};
		console.log('Login ID：'+ctx.request.body.username+'不存在，可以注册')

		console.log('尝试注册')
		let step2 = await accountModules.registe(ctx.request.body);
		if(step2 === false){ctx.errorCode=2;next();return};
		console.log('用户:'+ctx.request.body.nickname+'注册成功,注册id:'+step2)

		console.log('尝试添加银行账户')
		let step3 = await bankAccountModules.addBank(step2,bankName,accountNumber,accountName);
		if(step3 === false){ctx.errorCode=3;next();return};
		console.log('添加银行账户成功')

		ctx.body={state:1,text:'注册成功'};
		await next();
	},
	login : async (ctx,next) => {
		let username = ctx.request.body.username,
			password = ctx.request.body.password

		ctx.logger.info('用户尝试登陆，login id:'+ctx.request.body.username);

		let step1 = await accountModules.login(username,password);
		if(step1 === false){ctx.errorCode=0;next();return};
		if(step1 === 1){ctx.errorCode=4;next();return};
		if(step1 === 2){ctx.errorCode=5;next();return};
		console.log('用户登陆成功,login id: '+username)

		ctx.session.user = step1;

		ctx.body={state:1,text:'登陆成功',body:step1};
		await next();
	},
	logout : async (ctx,next) => {
		// ctx.logger.info('用户退出登陆，login id:'+ctx.session.user?(ctx.session.user.username || '无记录'):'无记录');
		delete ctx.session.user;
		ctx.body={state:1,text:'退出成功'};
	},
	edit : async (ctx,next) => {
		let {id,nickname,email,phone} = ctx.request.body;
		if(!ctx.session.user || ctx.session.user.id != id){ctx.errorCode=6;next();return}

		ctx.logger.info('用户:'+ctx.session.user.username+'修改信息');
		
		let step1 = await accountModules.edit(id,nickname,email,phone);
		if(step1 === false){ctx.errorCode=0;next();return};

		ctx.session.user=step1;

		console.log('用户:'+ctx.session.user.username+'修改信息成功');
		ctx.body={state:1,text:'修改成功',body:step1};
		await next();
	},
	checkLogin : async (ctx,next) => {
		let id = ctx.request.body.id;

		if(!ctx.session.user || ctx.session.user.id != id){ctx.errorCode=7;next();return}

		ctx.body={state:1,text:'已登陆',body:ctx.session.user};
		await next();
	},
	editPass : async (ctx,next) => {
		let {id,oldPass,newPass,newPass2} = ctx.request.body;

		if(!ctx.session.user || ctx.session.user.id != id){ctx.errorCode=7;next();return}
		if(newPass != newPass2 || newPass == oldPass || oldPass == ''){ctx.errorCode=8;next();return}

		let step1 = await accountModules.getUserInfo(id,true);
		if(step1 === false){ctx.errorCode = 4;next();return};
		if(step1.password != oldPass){ctx.errorCode = 5;next();return}

		let step2 = await accountModules.editPass(id,newPass);
		if(step2 === false){ctx.errorCode = 0;next();return};

		ctx.logger.info('用户:'+ctx.session.user.username+'修改密码');
		ctx.body={state:1,text:'修改成功'};
		await next();
	},
	getAmount : async (ctx,next) => {
		let id = ctx.request.body.id;

		let step1 = await accountModules.getAmount(id);
		if(step1 === false){ctx.errorCode = 0;next();return};

		ctx.body={state:1,text:'获取余额',body:step1};
		await next();
	}
}