const Router = require('koa-router');

const commentController = require('../../controller/comment/')//引入需要的controller

router = new Router({
	prefix: '/comment'//路由前缀
});

router
	.post('/get', commentController.get)
	.get('/num', commentController.num)
	.post('/add', commentController.add)


module.exports = router;