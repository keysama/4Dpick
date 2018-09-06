const Router = require('koa-router');

const resultController = require('../../controller/result/')//引入需要的controller

router = new Router({
	prefix: '/result'//路由前缀
});

router
	.post('/get4dResult', resultController.get4dResult)


module.exports = router;