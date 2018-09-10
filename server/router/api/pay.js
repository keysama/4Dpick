const Router = require('koa-router');

const payController = require('../../controller/pay/')//引入需要的controller

router = new Router({
	prefix: '/pay'//路由前缀
});

router
	.all('/payHandle', payController.payHandle)
	.all('/topUpHandle', payController.topUpHandle)
	.all('/localPay', payController.localPay)
	.all('/payPartHandle', payController.payPartHandle)
	.all('/payResult', async (ctx,next) => {
		ctx.response.body = `
		<h1 style="color:#28a745">
			Payment is successful: )
		</h1>
		<h2>
			Please close this page and refresh the web page to see the result.
		</h2>
		`;
	})


module.exports = router;