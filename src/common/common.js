function phoneInput(e) {
    console.log(e)
}
export default {
    errorToBack: errorToBack,
    getStorage: getStorage,
    removeStorage: removeStorage,
    phoneInput: phoneInput,
    titleID: [{ name: "男", titleID: '1d88af067fff4d6e95575e77f7365029' }, { name: "女", titleID: '384aba23a5ac4344b5848250d793cd64' }],
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