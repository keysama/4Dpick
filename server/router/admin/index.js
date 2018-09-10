const Router = require('koa-router');

const test = require('./test.js');
const adminController = require('../../controller/admin/adminController.js')
const accountController = require('../../controller/admin/accountController.js')
const configController = require('../../controller/admin/configController.js')

router = new Router({
	prefix: '/admin'
});

router
	.use('/', adminController.checklogin)
	.get('/', adminController.randerIndex)
	.get('/login',accountController.randerLogin)
	.post('/login',accountController.login)
	.all('/logout',accountController.logout)
	.get('/config',configController.randerConfig).post('/config',configController.setConfig)
	.get('/addDate',configController.addDate).post('/addDate',configController.insertSpecialDate)
	.post('/',configController.addDate)
	.get('/deleteDate/:id',configController.deleteDate)

	

	.use(test.routes())

module.exports = router;