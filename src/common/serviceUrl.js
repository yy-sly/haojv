let host = ''
let apiUrl = '' // kpbase接口
let wApiUrl = '' // 微服务接口
let dApiUrl = '' // 独立接口

// if (process.env.NODE_ENV === 'development') {
//     // 开发环境
//     // host = 'https://kpinterface.shejidedao.cn/'
// 	host = 'https://web.shejidedao.com/'
// 	// host = 'https://111.229.139.82/'
//     apiUrl = host + 'kpbase/api/'
//     wApiUrl = host
//     dApiUrl = host + 'interface-server/api/'
// } else if (process.env.NODE_ENV === 'production') {
//     // 生产环境
//     // host = 'https://kpinterface.shejidedao.cn/'
// 	host = 'https://web.shejidedao.com/'
// 	// host = 'https://111.229.139.82/'
//     apiUrl = host + 'kpbase/api/'
//     wApiUrl = host
//     dApiUrl = host + 'interface-server/api/'
// }

// vue配置文件
// 区分开发  测试  正式环境 20220916
// console.log("+++++++++++++++++++++++++process.env.VUE_APP_TITLE++++++++++++++++++++++++++++++++++++");
// console.log(process.env.VUE_APP_TITLE);
// console.log("+++++++++++++++++++++++++process.env++++++++++++++++++++++++++++++++++++");
// console.log(process.env);
// console.log(process);

if (process.env.VUE_APP_TITLE === 'productionVUE_APP_TITLEDwp') {//正式环境
	// host = 'https://web.shejidedao.com/'
    host = 'http://kpbase.bonjourmed.com/'
    // host = 'https://www.haoju.me/'
console.log('1')	
} else{//测试环境
    host = 'http://118.25.123.35:6007/'
console.log('2')	
}
// else{//开发环境
// console.log('3')
// 	host = 'https://kpinterface2.shejidedao.cn/'
// }

// 判断访问域名
// if(location.href.includes('https://m.shejidedao.com') 
//    || location.href.includes('https://m.shejidedao.cn') 
//    || location.href.includes('https://m.shejidedao.com') 
//    || location.href.includes('https://m.shejidedao.cn') 
// ){//正式服
// 	host = 'https://web.shejidedao.com/'
// }else{//测试服
// 	host = 'https://118.25.123.35:6007/'
// 	// host = 'https://web.shejidedao.com/'
// }

apiUrl = host + 'interface-server/api/'
wApiUrl = host
dApiUrl = host + 'interface-server/api/'




export {
    host,
    apiUrl,
    wApiUrl,
    dApiUrl
}
