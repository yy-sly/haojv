function phoneInput(e) {
    console.log(e)
}
export default {
    errorToBack: errorToBack,
    getStorage: getStorage,
    removeStorage: removeStorage,
    phoneInput: phoneInput,
    isWeiXinBrowser:isWeiXinBrowser,
    jumpToLoginWeiXin:jumpToLoginWeiXin,
    titleID: [{ name: "先生", titleID: '1d88af067fff4d6e95575e77f7365029' }, { name: "女士", titleID: '384aba23a5ac4344b5848250d793cd64' }],
    //站点ID
    siteID: '8a2f462a894988b901894cc087610223',
    //公司ID
    companyID: '8a2f462a894988b901894cbf772c01c1',
    //导航ID
    navIdList: {
        navId: '09048fa4d8cb4537b510a377f86f2932',
        headerId: '8ba24a6021614dcc831921495b356ef4',
        footerId: 'f50a388f4be0464a96d7edb614a74d2c'
    },
    //轮播图ID
    swiper:{
        homeId:'db0889fb56c04c0ea6f616fac969ebb7'
    },
    deviceID: '0268fffba23f48bf877f445e0536e45a',//火星
    // deviceID: '2c9fa8bb89f9bb900189fd7f25020134',//好聚
    // defaultAvatarURL:'',
    periodType:[{id:'1',name:'日'},{id:'2',name:'月'},{id:'3',name:'年'},{id:'10',name:'次'}]
}
// 获取localStorage
function getStorage(name) {
    if (!name) return
    return window.localStorage.getItem(name)
}

// 删除localStorage
function removeStorage(name) {
    if (!name) return
    window.localStorage.removeItem(name)
}
// 当出错的时候，显示错误信息，并且跳转
function errorToBack(msg = '出错了，请重试', time = 1500) {
    console.log(msg)
    // _this.$dialog.toast({
    //     mes: msg,
    //     timeout: time
    // })
}
function isWeiXinBrowser() {
    // window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
    var ua = window.navigator.userAgent.toLowerCase()
    // 通过正则表达式匹配ua中是否含有MicroMessenger字符串
    var uas = ua.match(/MicroMessenger/i)
    if (uas) {
        if (ua.match(/MicroMessenger/i)[0] === 'micromessenger') {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}
function jumpToLoginWeiXin() {
    let that = _this;
    removeStorage('sessionID');
    removeStorage('memberID');
    that.code = ''
    var local = location.origin + '/authNew';
    var appid = 'wxa41d50db32b07abc';
    that.code = getUrlCode().code // 截取code
    if (that.code == null || that.code === '') { // 如果没有code，则去请求
        setStorage('beforeUrl', route.fullPath)
        window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${encodeURIComponent(local)}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect`
    } else {
        // 有code
    }
}