const db = require('../tools/promise.js').db;
const crawler = require('../tools/promise.js').crawler;
const myFunc = require('../tools/index.js');

module.exports = {
	localResult : async (mode = 0) => {//0:获取所有，1:获取最新
		let titleList = myFunc.title2name('list');
		let sql = '';
		let result = {};
		let clear = true;

		for(let i = 0;i < titleList.length;i++){
			let item = titleList[i];

			if(mode){
				sql=`SELECT * FROM 4dresult WHERE title='${item}' ORDER BY id desc LIMIT 1`
			}else{
				sql=`SELECT * FROM 4dresult WHERE title='${item}' ORDER BY id desc`
			}

			let step = await db(sql);
			if(step === false){clear = false};

			if(mode){
				result[item] = step[0] || {};
			}else{
				result[item] = step;
			}
		}

		if(clear){
			return result;
		}else{
			return false;
		}
		
	},
	webResult : async (url) => {
		let step1 = await crawler(url);
		return step1;
	},
	parseWebResult : async ($) => {
		let result = [];
		$('.result').each(function(key,item){
			if(key>6){return}
			result.push({
				title : myFunc.title2name($(this).find('.result-title').text().split('\t')[0]),
				date : $(this).find('.result-date').text().split(' ')[1],
				drawNumber : $(this).find('.result-draw-no').text().split(': ')[1],
				firstPrize : $(this).find('.result-primary .result-row').eq(0).find('.result-number').text().replace(/[\t|\n]/g,''),
				secondPrize : $(this).find('.result-primary .result-row').eq(1).find('.result-number').text().replace(/[\t|\n]/g,''),
				thirdPrize : $(this).find('.result-primary .result-row').eq(2).find('.result-number').text().replace(/[\t|\n]/g,''),
				specials : myFunc.spliceStr($(this).find('.result-normal').eq(0).find('.number').text(),4),
				consolations : myFunc.spliceStr($(this).find('.result-normal').eq(1).find('.number').text(),4)
			})
		})
		return result;
	},
	insertResult : async (data) => {
		let time = Date.now();

		let sql = `INSERT INTO 4dresult (
			title,
			date,
			drawNumber,
			firstPrize,
			secondPrize,
			thirdPrize,
			specials0,
			specials1,
			specials2,
			specials3,
			specials4,
			specials5,
			specials6,
			specials7,
			specials8,
			specials9,
			consolations0,
			consolations1,
			consolations2,
			consolations3,
			consolations4,
			consolations5,
			consolations6,
			consolations7,
			consolations8,
			consolations9,
			createTime
		) VALUES (
		'${data.title}',
		'${data.date}',
		'${data.drawNumber}',
		'${data.firstPrize}',
		'${data.secondPrize}',
		'${data.thirdPrize}',
		'${data.specials[0]}',
		'${data.specials[1]}',
		'${data.specials[2]}',
		'${data.specials[3]}',
		'${data.specials[4]}',
		'${data.specials[5]}',
		'${data.specials[6]}',
		'${data.specials[7]}',
		'${data.specials[8]}',
		'${data.specials[9]}',
		'${data.consolations[0]}',
		'${data.consolations[1]}',
		'${data.consolations[2]}',
		'${data.consolations[3]}',
		'${data.consolations[4]}',
		'${data.consolations[5]}',
		'${data.consolations[6]}',
		'${data.consolations[7]}',
		'${data.consolations[8]}',
		'${data.consolations[9]}',
		'${time}'
		)`
		let step = await db(sql);
		if(step === false){clear = false};
		return true;
	}
}
