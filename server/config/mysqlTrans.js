const mysql = require('mysql');

const config = require('./index.js').mysql;

var pool = mysql.createPool(config);


var trans = () => {
	return new Promise(function(resolve, reject) {
	    pool.getConnection(function(err,conn){
	        if(err){
	            resolve(false);
	        }else{
	            resolve(conn)
	        }
	    })
	})

};
module.exports = trans;