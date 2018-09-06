const Router = require('koa-router');

const accountController = require('../../controller/account/')//引入需要的controller

router = new Router({
	prefix: '/account'//路由前缀
});

router
	.post('/registe', accountController.registe)
	.post('/checkLogin',accountController.checkLogin)
	.post('/login', accountController.login)
	.post('/logout', accountController.logout)
	.post('/editInfo',accountController.edit)
	.post('/editPass',accountController.editPass)

	

module.exports = router;