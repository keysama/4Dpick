const path = require('path');

const timeStemp = new Date();//获取当前日期时间戳
const time = timeStemp.getFullYear() + '_' + timeStemp.getMonth() + '_' + timeStemp.getDate();//保证每天日志放在不同文件夹

module.exports = {

	port : 8083,//监听端口号

	logger : {//配置日志
		respondTime : true,//是否开启记录相应时间
		type : 'console',//类型，file：保存到文件，dateFile：保存到日期文件，console：控制台
		filename : path.resolve(__dirname,`../../logs/daily_${time}.log`),//输出的文件路径和文件名
		level : 'trace',//级别，保存以上的错误信息trace<debug<info<warn<error<fatal
	},

	staticPath : 'static',//静态资源目录（在网站根目录），可以是二级如static/www

	mysql : {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: '4dpick',
        port:'3306',
        dateStrings: true
	},

	schedule : {//定时器
		switch : false,//开关
		time : '* 1 * * * *'//秒(0-59)，分(0-59)，时(0-23)，日(1-31)，月(1-12)，周(0-7)(0\7是周日)
							 //每周1的1点1分30秒触发 ：'30 1 1 * * 1'
	}
}