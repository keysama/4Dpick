const mysql = require('../config/mysql.js');
const mysqlTrans = require('../config/mysqlTrans.js');
const http = require('http');
const cheerio = require('cheerio')

module.exports = {
	db : (sql) => {
		return new Promise(function(resolve, reject) {
	        mysql(sql, function(error,results){
	            if(error){
	            	console.log('数据库查询出错啦')
	            	console.log(error);
	              	resolve(false)
	            }else{
	               resolve(results)
	            }
	        })
	    });
	},
	startTrans : (prom) => {
		return new Promise(async function(resolve, reject) {
			let trans = await mysqlTrans();
			if(trans === false){resolve(false)};

			trans.beginTransaction(async (err)=>{
				if(err){resolve(false)};

				let res = await prom(trans);
				if(res === false){
					trans.rollback(function() {console.log('事务回滚')});
					resolve(false);
					return;
				}
				console.log('完成')
				trans.commit(function(){ console.log('发送事务') })
				resolve(res)
			})
	    });
	},
	dbs : (sql,trans) => {
		return new Promise(function(resolve, reject){
			trans.query(sql,function(error,results){
		        if(error){
	            	console.log('事务查询出错啦','sql:'+sql)
	            	console.log(error)
	              	resolve(false)
	            }else{
	               	resolve(results)
	            }
		    })
		})
	},
	crawler : (url) => {
		return new Promise(function(resolve,reject){
			http.get(url, (res)=>{
				
	            let html = '';
	            // 获取页面数据
	            res.on('data', function(data) {
	                html += data;
	            });
	            // 数据获取结束
	            res.on('end', function() {
	                resolve(cheerio.load(html))
	            });

	        }).on('error', function() {
	            resolve(false)
	        });
		})
	}
}