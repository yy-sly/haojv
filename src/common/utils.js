import { dPost, sendPost } from "./api";
import common from "./common"
import {
    apiUrl, dApiUrl, wApiUrl
} from './serviceUrl'
function request1(q, u, n, rf) { // 接口类型  接口名称  是否列表接口  列表名称
    var url = ["d","ds","y","ys","w","ws","l","ls"];
    // 不带 s 为非 session 接口
    //d // 独立接口
    //y  // 一般接口
    //w // 微服务接口
    //  短接口

    if(q.indexOf("d")>= 0){
        u = dApiUrl +u;
    }else if(q.indexOf("y")>=0){
        u =apiUrl+u;
    }else if(q.indexOf("w")>=0){
        u =wApiUrl+u;
    }


    return function (data, that, fun, ffn) {
        var req = {};

        q.indexOf('s')!==-1 && (req.sessionID = common.getStorage("sessionID") )
        for (var key in data) {
            if (data[key]) {
                req[key] = data[key];
            }
        }
        if (n && !data.noPage) FY(req, that, n)
        var AjaxSend = sendPost(u, req, false, res => {
            if (n && !data.noPage) {
                if (res.data.header.code == 0) {
                    var rbody = res.data.body.data;
                    if (rf) rf(rbody)
                    ListPage(n, [], rbody, that)
                }
            }
            if (fun) fun(res)
        }, err => {
            if (ffn) ffn(err)
        })
        var AjaxArray = that.AjaxArray ? that.AjaxArray : [];
        AjaxArray.push(AjaxSend)
        that.AjaxArray = AjaxArray

    }
}

// 分页
function FY(req, that, n) { // 请求参数  页面  标识符  假如一个页面有多个列表
    req.currentPage = that.currentPage ? that.currentPage : 1;
    req.pageNumber = that.pageNumber ? that.pageNumber : 20;
}
// name-"列表名"  list-"列表"  data-"res.data.body.data" that-"that"
function ListPage(name, list, data, that) {
    if (data.currentPage > 1) {
        list = that[name]
    }

    list = list.concat(data.rows);
    that[name] = list,
        that.listTotal = data.total,
        that.currentPage = data.currentPage,
        that.hasNextPage = data.hasNextPage,
        that.showAjaxLoad = false;

}



var ports = {};
// 系统参数 站点模块
ports.ModuleSite = {};
ports.ModuleSite.getSiteParameterList = (data, that, fun) => {
    data = data ? data : {
        siteID: that.GLOBAL.siteID,
        pageNumber: 100
    }
    request1("d", 'getSiteParameterList.json')(data, that, fun)
}

// 优惠券接口模块
ports.ModuleCoupon = {}
//获取可领取的红包列表
ports.ModuleCoupon.getCanGetBonusList = request1("ds", "getCanGetBonusList.json", "BonusList") // (data, that, callback) => dPost("getCanGetBonusList.json", data, callback)
ports.ModuleCoupon.getOneBonus = request1("ds","getOneBonus.json")
ports.ModuleCoupon.getMyMemberBonusList = request1("ds","getMyMemberBonusList.json","BonusList")


//
var ModuleSearch = {};
ModuleSearch.getHotWordList = function(data,that,fun,ffn){
    var req = {};
    req.searchDefineID = common.searchID
    // req.companyID = common.companyID
    request1("d","getHotWordList.json")(req,that,fun,ffn)
}
ports.ModuleSearch = ModuleSearch;



/************************* */
// 课程 模块 ---- 视屏
/****************
 *  视屏故事
 *
 * **************** */

var ModuleCourse = {};

ModuleCourse.getStoryList = request1("d","getStoryList.json","StoryList")
// 获取故事详情
ModuleCourse.getStoryDetail = request1("d", "getStoryDetail.json")
//  获取故事段落列表
ModuleCourse.getStorySectionList = request1("d", "getStorySectionList.json","SectionList")


// 获取我的订阅列表
ModuleCourse.getMyBuyReadStoryList = request1("ds", "getMyBuyReadStoryList.json","ReadStoryList")

ports.ModuleCourse = ModuleCourse;



//
var ModuleShop = {}

ModuleShop.getShopList = request1("ds","getShopList.json","ShopList")

ModuleShop.getMyShopApplyList = request1("ds","getMyShopApplyList.json","ShopApplyList")


ports.ModuleShop = ModuleShop

//
var MemberDetail = {}

MemberDetail.getOneMemberDetail = request1("d","getOneMemberDetail.json")

export default ports
