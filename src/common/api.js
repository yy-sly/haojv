/* eslint-disable no-undef */
/* eslint-disable no-constant-condition */
import _axios from 'axios'
import qs from 'qs'
import _this from '../main'
import common from './common'
import {
    dApiUrl,
    wApiUrl
} from './serviceUrl'

const axios = _axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
})
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 无session请求
export const nspost = (method, data, fun) => {
    data = data ? data : "";
    sendPost(dApiUrl + method, data, false, fun)
}
export const nspost2 = (method, data, fun) => {
    data = data ? data : "";
    sendPost(process.env.VUE_APP_BASE_API + method, data, false, fun)
}
// 普通nspste请求 无session
export const nspste = (method, data, fun) => {
    data = data ? data : "";
    sendPost(dApiUrl + method, data, false, fun)
}
// 普通post请求
export const post = (method, data, fun) => {
    // data = data?data:"";
    data.sessionID = common.getStorage("sessionID")
    sendPost(dApiUrl + method, data, false, fun)
}
// 微服务post请求
export const wPost = (method, data, fun) => {
    sendPost(wApiUrl + method, data, false, fun)
}
// 独立接口post请求
export const dPost = (method, data, fun) => {
    data = data ? data : "";
    if (common.getStorage("sessionID")) {
        if (method == 'searchMemberByPhone.json' || 'getActionList.json' || 'getStoryList.json') {//微信一键登录   查询用户手机号  不传sessionid

        } else {
            data.sessionID = common.getStorage("sessionID")
        }
    } else {
        // delete data.sessionID
        // delete data.memberID
    }
    // if (method == 'standardCreateOneMemberOrder.json') {
    //     if (common.getRecommendCode()) {
    //         data.recommendCode = getRecommendCode() || '';
    //         data.recommendMemberID = ''
    //     } else {
    //         data.recommendMemberID = common.getStorage("userInfo").recommendID || ''
    //         data.recommendCode = '';
    //     }
    // }
    if (method == 'submitOneAgainst.json') {
        data.siteID = common.siteID;
    }
    sendPost(dApiUrl + method, data, false, fun)
}
// 独立接口post请求 安卓
export const dPostAndroid = (method, domainName, data, fun) => {
    data = data ? data : "";
    if (common.getStorage("sessionID")) {
        if (method == 'searchMemberByPhone.json' || 'getActionList.json') {//微信一键登录   查询用户手机号  不传sessionid

        } else {
            data.sessionID = common.getStorage("sessionID")
        }
    } else {
        // delete data.sessionID
        // delete data.memberID
    }
    sendPost(domainName + '/interface-server/api/' + method, data, false, fun)
}

// axios 发送请求统一处理
export const sendPost = async (url, data, config, fun) => {
    if (url == 'interface-server/api/getCartGoodsList.json'||url == 'interface-server/api/addGoodsToCart.json') {
        data = {
            sessionID: window.localStorage.getItem("sessionID"),
            memberID: window.localStorage.getItem("memberID"),
            ...data,
        }
    } else {
        data = {
            siteID: common.siteID,
            // focusID: common.focusID,
            sessionID: window.localStorage.getItem("sessionID"),
            memberID: window.localStorage.getItem("memberID"),
            applicationID: common.applicationID,
            ...data,
        }
    }
    if (config) {
        // _this.$dialog.loading.open('上传中...')
    } else {
        data = data ? qs.stringify(data) : "";
    }
    try {
        const res = await axios({
            method: 'post',
            url,
            data,
            timeout: 150000
        })
        if (fun) fun(res)
        if (res.data.header.code === 10000) {
            let isWeiXin = common.isWeiXinBrowser()
            // 微信内 并且正式服
            if (isWeiXin) {
                common.removeStorage('sessionID')
                common.removeStorage('member')
                common.removeStorage('weixinToken')
                common.jumpToLoginWeiXin()
            } else {
                common.removeStorage('sessionID')
                common.removeStorage('member')
                common.removeStorage('weixinToken')
            }
        }
    } catch (err) {
        if (err) {
            if (err.response) {
                switch (err.response.status) {
                    case 400:
                        err.message = '请求参数错误'
                        break
                    case 401:
                        err.message = '未授权，请登录'
                        break
                    case 403:
                        err.message = '跨域拒绝访问'
                        break
                    case 404:
                        err.message = `请求地址出错: ${err.response.config.url}`
                        break
                    case 408:
                        err.message = '请求超时'
                        break
                    case 500:
                        err.message = '服务器内部错误'
                        break
                    case 501:
                        err.message = '服务未实现'
                        break
                    case 502:
                        err.message = '网关错误'
                        break
                    case 503:
                        err.message = '服务不可用'
                        break
                    case 504:
                        err.message = '网关超时'
                        break
                    case 505:
                        err.message = 'HTTP版本不受支持'
                        break
                    default:
                        break
                }

                // _this.$dialog.loading.close()
                common.errorToBack(err.message)
            }
            else {
                // common.errorToBack("请求超时，请重试。")
                //js判断手机操作系统(ios或者是Android)
                var u = navigator.userAgent
                //如果输出结果是true就判定是android终端或者uc浏览器
                var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1
                //根据输出结果true或者false来判断ios终端
                var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
                //!!双叹号一般用来将后面的表达式转换为布尔型的数据（boolean）
                if (isAndroid) {
                    // _this.$dialog.loading.close()
                } else if (isiOS) {
                    console.log("请求超时，请重试。")
                }

            }
        }
    }
}
// 获取导航列表
export const getNavigatorList = (data, callback) => dPost('getNavigatorList.json', data, callback)
// 发送邮箱验证码
export const submitEmailBandingMember = (data, callback) => dPost('submitEmailBandingMember.json', data, callback)
// 获取轮播图
export const getFocusList = (data, callback) => dPost('getFocusPictureList.json', data, callback)
// 注册
export const memberPhoneRegister = (data, callback) => dPost('memberPhoneRegister.json', data, callback)
// 登陆
export const memberLogin = (data, callback) => dPost('memberLogin.json', data, callback)
// 获取会员详细信息
export const getOneMemberDetail = (data, callback) => dPost('getOneMemberDetail.json', data, callback)
// 绑定邮箱
export const applyEmailBindingMember = (data, callback) => dPost('applyEmailBindingMember.json', data, callback)
// 获取商品列表
export const getGoodsShopList = (data, callback) => dPost('getGoodsShopList.json', data, callback)
// 获取商品详情
export const getGoodsShopDetail = (data, callback) => dPost('getGoodsShopDetail.json', data, callback)
// 添加购物车
export const addGoodsToCart = (data, callback) => dPost('addGoodsToCart.json', data, callback)
// 删除购物车商品
export const deleteGoodsFromCart = (data, callback) => dPost('deleteGoodsFromCart.json', data, callback)
// 获取购物车列表
export const getCartGoodsList = (data, callback) => dPost('getCartGoodsList.json', data, callback)
// 创建订单
export const standardCreateOneMemberOrder = (data, callback) => dPost('standardCreateOneMemberOrder.json', data, callback)