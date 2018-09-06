module.exports = {
	handle :  async (ctx,next) => {//错误处理
		if(!ctx.errorCode && ctx.errorCode != 0){
			await next();
			return;
		}

		switch(ctx.errorCode){
			case 0:ctx.body={state:0,text:'数据库错误'};break;
			case 1:ctx.body={state:0,text:'Login ID已存在'};break;
			case 2:ctx.body={state:0,text:'注册失败，请检查输入'};break;
			case 3:ctx.body={state:0,text:'银行账户添加失败'};break;
			case 4:ctx.body={state:0,text:'Login ID不存在'};break;
			case 5:ctx.body={state:0,text:'密码错误'};break;
			case 6:ctx.body={state:0,text:'用户信息校验失败'};break;
			case 7:ctx.body={state:0,text:'未登录'};break;
			case 8:ctx.body={state:0,text:'输入信息有误，请检查'};break;
			case 9:ctx.body={state:0,text:'支付失败！'};break;
			default:ctx.body={state:0,text:ctx.errorMessage};break;
		}
	},
}
