const Router = require('koa-router');

const account = require('./account.js');
const result = require('./result.js');
const orders = require('./orders.js');
const pay = require('./pay.js');
const config = require('./config.js');
const comment = require('./comment.js');
const apiController = require('../../controller/api/apiController.js')
const test = require('./test.js')

router = new Router({
	prefix: '/api'
});

router
	.use(account.routes())
	.use(result.routes())
	.use(orders.routes())
	.use(pay.routes())
	.use(config.routes())
	.use(comment.routes())
	.use(test.routes())
	.all('/handle',async (ctx, next)=>{
		console.log('有返回')
		console.log(ctx)
		await next();
	})
	.all('/back',async (ctx,next)=>{
		console.log('back');
		console.log('Reference',ctx.request.body.Reference);
		console.log('Customer',ctx.request.body.Customer);
		console.log('Customer',ctx.request.body.Customer);
		console.log('Amount',ctx.request.body.Amount);
		console.log('Currency',ctx.request.body.Currency);
		console.log('Status',ctx.request.body.Status);
		console.log('Key',ctx.request.body.Key);
console.log('Status',ctx.request.body.Status);
		ctx.body = 0;
		await next()
	})
	.all('/front',async (ctx,next)=>{
		console.log('front');
		console.log('Reference',ctx.request.body.Reference);
		console.log('Customer',ctx.request.body.Customer);
		console.log('Customer',ctx.request.body.Customer);
		console.log('Amount',ctx.request.body.Amount);
		console.log('Currency',ctx.request.body.Currency);
		console.log('Status',ctx.request.body.Status);
		console.log('Key',ctx.request.body.Key);
console.log('Status',ctx.request.body.Status);
		ctx.body = 1;
		await next()
	})


module.exports = router;