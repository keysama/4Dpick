module.exports = {
	spliceStr : (str,num) =>{
		let res = [];

		let stemp = '';

		str.split('').forEach((item,key)=>{
			if(key%num < num-1){
				stemp += item;
			}else{
				stemp += item;
				res.push(stemp);
				stemp = '';
			}
		})

		return res;
	},
	title2name : (title) =>{
		if(title==='list'){
			return ['magnum','damacai','toto','sabah88','sarawak','sandakan','singapore'];
		}
		switch (title){
			case 'Magnum 4D' : return 'magnum';break;
			case 'Da Ma Cai 1+3D' : return 'damacai';break;
			case 'SportsToto 4D' : return 'toto';break;
			case 'Sabah 88 4D' : return 'sabah88';break;
			case 'Special CashSweep' : return 'sarawak';break;
			case 'Sandakan 4D' : return 'sandakan';break;
			case 'Singapore 4D' : return 'singapore';break;
			default : 'unknow';break;
		}
	}

}