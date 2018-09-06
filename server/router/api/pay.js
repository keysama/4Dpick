const Router = require('koa-router');

const payController = require('../../controller/pay/')//引入需要的controller

router = new Router({
	prefix: '/pay'//路由前缀
});

router
	.all('/payHandle', payController.payHandle)



module.exports = router;