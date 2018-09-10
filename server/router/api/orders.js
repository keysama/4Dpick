const Router = require('koa-router');

const ordersController = require('../../controller/orders/')//引入需要的controller

router = new Router({
	prefix: '/orders'//路由前缀
});

router
	.post('/createOrder', ordersController.createOrder)
	.post('/getOrders', ordersController.getOrders)
	.post('/getPiedOrders', ordersController.getPiedOrders)
	.post('/createTopUp', ordersController.createTopUp)
	.post('/getTopUp', ordersController.getTopUp)
	.post('/getBets', ordersController.getBets)
	


module.exports = router;