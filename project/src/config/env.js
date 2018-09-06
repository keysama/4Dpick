let baseUrl = ''; //请求发送的域名
let routerMode = 'hash';


if (process.env.NODE_ENV == 'development') {
    baseUrl = 'http://localhost:8083/';

}else if(process.env.NODE_ENV == 'production'){
    baseUrl = 'http://111.230.249.243:8083/';
}
export {
	baseUrl,
	routerMode,
}