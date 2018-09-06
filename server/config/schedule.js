const schedule = require('node-schedule');
const config = require('../config').schedule;
const scheduleController = config.switch ? require('../controller/schedule/') : {};

function scheduleCronstyle(){
	if(!config.switch){
		console.log('定时任务关闭');
		return;
	}
	console.log('定时任务开启');
    schedule.scheduleJob(config.time, scheduleController.get4dResult); 
}
module.exports = scheduleCronstyle;
