const resultModules = require('../../modules/resultModules');

module.exports={
	testGet : async (ctx, next) => {
		ctx.logger.info('test：收到get请求')
		console.log('body:',ctx.request.body)
		console.log('query:',ctx.request.query)
		console.log('session:',ctx.session)
		ctx.body='测试get';
		await next();
	},
	testPost : async (ctx, next) => {
		ctx.logger.info('test：收到post请求')
		console.log(ctx.request.body)
		console.log(ctx.request.query)
		console.log('session:',ctx.session)
		ctx.body='测试post';
		await next();
	},
	testAll : async (ctx, next) => {
		console.log('===test===')
		let $ = await resultModules.webResult('http://4dpick.com/');

		let step1 = await resultModules.parseWebResult($);
		if(step1 === false){console.log('获取网络开彩结果失败！')};
		
		let step2 = await resultModules.localResult(1);
		if(step2 === false){console.log('获取本地开彩结果失败！')};

		for(let i = 0;i < step1.length;i++){
			let item = step1[i];
			if(!step2[item.title] || !step2[item.title].date || step2[item.title].date != item.date){
				console.log('有最新开采结果')
				let step3 = await resultModules.insertResult(item);
				if(step3 === false){console.log('更新本地开采结果失败！')};
				ctx.logger.info('添加本地开采结果，title:'+item.title+',date:'+item.date);
			}
		}

		ctx.body='测试post';
		await next();
	}
}