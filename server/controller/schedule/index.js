const resultModules = require('../../modules/resultModules');

module.exports={
	test : async () => {
		console.log('定时任务测试')
	},
	get4dResult : async () =>{
		console.log('开始查询网络开采结果')
		
		let $ = await resultModules.webResult('http://4dpick.com/');

		let step1 = await resultModules.parseWebResult($);
		if(step1 === false){console.log('获取网络开彩结果失败！')};
		
		let step2 = await resultModules.localResult(1);
		if(step2 === false){console.log('获取本地开彩结果失败！')};

		for(let i = 0;i < step1.length;i++){
			let item = step1[i];
			if(!step2[item.title].date || step2[item.title].date != item.date){
				console.log('有最新开采结果')
				let step3 = await resultModules.insertResult(item);
				if(step3 === false){console.log('更新本地开采结果失败！')};
				ctx.logger.info('添加本地开采结果，title:'+item.title+',date:'+item.date);
			}
		}

		console.log('查询结束')
	}
}