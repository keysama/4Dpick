const app = require('./config/koa.js');
const schedule = require('./config/schedule.js');//定时任务


schedule();
app();
