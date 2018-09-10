const Router = require('koa-router');

const configController = require('../../controller/config/')//引入需要的controller

router = new Router({
	prefix: '/config'//路由前缀
});

router
	.post('/getConfig', configController.getConfig)
	.post('/getSpecialDate', configController.getSpecialDate)


module.exports = router;