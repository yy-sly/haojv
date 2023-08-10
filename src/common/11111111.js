// 我的头像 图片上传
export const uploadFile = (data, callback) => {
    data.append('method', 'images.upload')
    data.timeout = 6000
    sendPost('http://kpbase.bonjourmed.com/interface-server/api/uploadOneFileToQiniu?fileServerID=8a2f462a88b377e10188bd1b2975053c&fileBucketID=8a2f462a88b377e10188bd20a3e5053d', data, true, callback)
}
// 我的头像 上传文件
export const uploadFile2 = (data, callback) => {
    data.timeout = 6000
    sendPost('http://kpbase.bonjourmed.com/interface-server/api/' + 'uploadOneFileToQiniu.json', data, true, callback)
}
//建议反馈 图片上传
export const uploadFileProposal = (data, callback) => {
    data.append('method', 'images.upload')
    data.timeout = 6000
    sendPost('http://kpbase.bonjourmed.com/interface-server/api/' + 'uploadOneFileToQiniu.json', data, true, callback)
}
export { dPost, sendPost }
//获取时段
export const getTimeZoneList = (data, callback) => nspost('getTimeIntervalInstanceList.json', data, callback)
//获取下级导航列表
export const getNavigatorChildList = (data, callback) => nspost('getNavigatorChildList.json', data, callback)
//获取关系列表
export const getRelationshipList = (data, callback) => nspost('getRelationshipList.json', data, callback)
//创建会员
export const createOnePatientMember = (data, callback) => nspost('createOnePatientMember.json', data, callback)

// 网站获取一个导航的文章列表20210526
// export const webGetArticleListByNavigator = (data, callback) => nspost('getMemberOrderListByMember.json', data, callback)
// 获取文章详情
export const webGetArticleDetail = (data, callback) => nspost('webGetArticleDetail.json', data, callback)
// 获取物流信息
export const getExpNoInfo = (data, callback) => nspost2('getExpNoInfo.json', data, callback)
// 导航商品列表
export const getNavigatorGoodsRecommendList = (data, callback) => nspost('getNavigatorGoodsRecommendList.json', data, callback)

// 获取对象附件图
export const getObjectFeatureItemList = (data, callback) => nspost('getObjectFeatureItemList.json', data, callback)
// 获取卡券定义列表
export const getCardDefineList = (data, callback) => nspost('getCardDefineList.json', data, callback)
// 获取分类列表
export const getCategoryListForBig = (data, callback) => nspost('getCategoryListForBig.json', data, callback)
// 获取轮播列表 20210524
export const getFocusList = (data, callback) => dPost('getFocusPictureList.json', data, callback)
// 获取分会场列表 20210524
export const getSceneList = (data, callback) => dPost('getSceneList.json', data, callback)
// 获取导航列表20210524
export const getNavigatorList = (data, callback) => dPost('getNavigatorList.json', data, callback)
// 获取导航列表item20210524
export const getOneStoryRecommendList = (data, callback) => dPost('getOneStoryRecommendList.json', data, callback)
// 获取导航列表训练营
export const getTrainBusinessList = (data, callback) => dPost('getTrainBusinessList.json', data, callback)
// 获取最近搜索
export const getMemberSearchList = (data, callback) => dPost('getMemberSearchList.json', data, callback)
// 热门搜索
export const getHotWordList = (data, callback) => dPost('getHotWordList.json', data, callback)
// 搜索
export const getStoryList = (data, callback) => dPost('getStoryList.json', data, callback)
// 删除搜索记录
export const deleteMyMemberSearch = (data, callback) => dPost('deleteMyMemberSearch.json', data, callback)
// 获取分类列表
export const getCategoryList = (data, callback) => dPost('getCategoryList.json', data, callback)
// 获取故事详情
export const getStoryDetail = (data, callback) => dPost('getStoryDetail.json', data, callback)
// 获取故事章节
export const getChapterList = (data, callback) => dPost('getChapterList.json', data, callback)
// 获取故事章节item
export const getStorySectionList = (data, callback) => dPost('getStorySectionList.json', data, callback)
// 课程获取标签
export const getStoryCategoryList = (data, callback) => dPost('getStoryCategoryList.json', data, callback)
// 修改密码
export const setMemberPassword = (data, callback) => dPost('setMemberPassword.json', data, callback)
// 发送验证码
export const sendSmsCommon = (data, callback) => dPost('sendSMSVerifyCode.json', data, callback)
// 找回密码
export const resetMemberPassword = (data, callback) => dPost('resetMemberPassword.json', data, callback)
//建议反馈
export const submitOneFeed = (data, callback) => dPost('submitOneFeed.json', data, callback)
// 收藏
export const submitCollect = (data, callback) => dPost('submitOneCollect.json', data, callback)
// 取消收藏
export const deleteCollect = (data, callback) => dPost('removeOneObjectCollect.json', data, callback)
//获取课程的详情
export const getObjectAttachmentList = (data, callback) => dPost('getObjectAttachmentList.json', data, callback)
// 获取优惠券列表
export const getMyMemberBonusList = (data, callback) => dPost('getMyMemberBonusList.json', data, callback)
// 获取可领取的优惠券列表
export const getCanGetBonusList = (data, callback) => dPost('getCanGetBonusList.json', data, callback)
// 获取我收到的消息
export const getMyReceivedMessageList = (data, callback) => dPost('getMyReceivedMessageList.json', data, callback)
// 清空未读消息
export const readAllObjMessage = (data, callback) => dPost('readAllObjMessage.json', data, callback)
// 清空一个未读消息
export const readOneMessage = (data, callback) => dPost('readOneMessage.json', data, callback)
// 获取消息未读数量
export const getNewMessageCount = (data, callback) => dPost('SJGetNewMessageCount.json', data, callback)
// 浏览记录
export const getMyBrowseList = (data, callback) => dPost('getMyBrowseList.json', data, callback)
// 获取收藏列表
export const SJGetMyCollectList = (data, callback) => dPost('SJGetMyCollectList.json', data, callback)
// 获取评论列表
export const getObjectDiscussList = (data, callback) => dPost('getObjectDiscussList.json', data, callback)
// 获取医院列表
export const getSimpleCompanyList = (data, callback) => dPost('getSimpleCompanyList.json', data, callback)
//发布一个评论
export const submitOneDiscuss = (data, callback) => dPost('submitOneDiscuss.json', data, callback)
//删除一个评论
export const deleteOneDiscuss = (data, callback) => dPost('deleteOneDiscuss.json', data, callback)
//点赞
export const submitOnePraise = (data, callback) => dPost('submitOnePraise.json', data, callback)
//取消点赞
export const removeOneObjectPraise = (data, callback) => dPost('removeOneObjectPraise.json', data, callback)
//获取1个评论的详细信息
export const getOneDiscussDetail = (data, callback) => dPost('getOneDiscussDetail.json', data, callback)
//清空用户所有未读信息
export const readAllMessage = (data, callback) => dPost('readAllMessage.json', data, callback)
//我的课程
export const getMyBuyReadStoryList = (data, callback) => dPost('getMyBuyReadStoryList.json', data, callback)
//钱包
export const getMemberStatisticsWallet = (data, callback) => dPost('getMemberStatisticsWallet.json', data, callback)
// 返现排行榜
export const getMemberStatisticsCashTotal = (data, callback) => dPost('getMemberStatisticsCashTotal.json', data, callback)
//邀请排行榜
export const getMemberStatisticsRecommendMembers = (data, callback) => dPost('getMemberStatisticsRecommendMembers.json', data, callback)
//用户vip信息
export const getMyMemberMajorList = (data, callback) => dPost('getMyMemberMajorList.json', data, callback)
//用户vip信息
export const submitMemberMajor = (data, callback) => dPost('submitMemberMajor.json', data, callback)
//编辑用户信息
export const updateMyMemberInfo = (data, callback) => dPost('updateMyMemberInfo.json', data, callback)
//训练营id 转换 故事id
export const getMemberRecommendStoryList = (data, callback) => dPost('getMemberRecommendStoryList.json', data, callback)
// 获取订单列表
export const getMemberOrderList = (data, callback) => dPost('getMemberOrderList.json', data, callback)
// 获取微服务订单列表
export const getMemberOrderList2 = (data, callback) => wPost('memberOrder/getMemberOrderList.json', data, callback)
// 组合订单列表
export const getMultiMemberOrderList = (data, callback) => dPost('getMultiMemberOrderList.json', data, callback)
// 获取兑换类型
export const getPresentDefineList = (data, callback) => dPost('getPresentDefineList.json', data, callback)
// 兑换
export const activationOnePresentRecord = (data, callback) => dPost('activationOnePresentRecord.json', data, callback)
// 提交举报
export const submitOneAgainst = (data, callback) => dPost('submitOneAgainst.json', data, callback)
// 手机号验证码登录
export const phoneFastLogin = (data, callback) => dPost('phoneFastLogin.json', data, callback)
// 获取vip权益列表
export const getArticlePublishList = (data, callback) => dPost('getArticlePublishList.json', data, callback)
// 获取分享列表
export const getShareList = (data, callback) => dPost('getShareList.json', data, callback)
// 购买设计贝
export const SJBuyGolden = (data, callback) => dPost('SJBuyGolden.json', data, callback)
// 发票管理列表
export const getMemberInvoiceDefineList = (data, callback) => dPost('getMemberInvoiceDefineList.json', data, callback)
// 新增发票
export const submitOneMemberInvoiceDefine = (data, callback) => dPost('submitOneMemberInvoiceDefine.json', data, callback)
// 编辑发票
export const updateMemberInvoiceDefine = (data, callback) => dPost('updateMemberInvoiceDefine.json', data, callback)
// 删除发票
export const deleteOneMemberInvoiceDefine = (data, callback) => dPost('deleteOneMemberInvoiceDefine.json', data, callback)
// 发票详情
export const getMemberInvoiceDefineDetail = (data, callback) => dPost('getMemberInvoiceDefineDetail.json', data, callback)
// 创建发票
export const createOneInvoice = (data, callback) => dPost('createOneInvoice.json', data, callback)
// 明细列表
export const getGoldenGetList = (data, callback) => dPost('getGoldenGetList.json', data, callback)
// 支付宝支付
export const getWebAliPayWapBody = (data, callback) => dPost('getWebAliPayWapBody.json', data, callback)
//微信一键登录
export const SJH5WeChatLogin = (data, callback) => dPost('SJH5WeChatLogin.json', data, callback)
// 手机号注册过 绑定手机号
export const memberWithWeixinUnionID = (data, callback) => dPost('memberWithWeixinUnionID.json', data, callback)
// 获取商品详情
export const getGoodsShopDetail = (data, callback) => dPost('getGoodsShopDetail.json', data, callback)
// export const getGoodsShopDetail = (data, callback) => wPost('goodsShop/getGoodsShopDetail.json', data, callback)
// 获取会员权益列表
export const getNavigatorArticleList = (data, callback) => dPost('getNavigatorArticleList.json', data, callback)
// 修改个人唯一ID
export const changeSJName = (data, callback) => dPost('changeSJName.json', data, callback)
// 订阅故事
export const buyReadOneStoryOrderSection = (data, callback) => dPost('buyReadOneStoryOrderSection.json', data, callback)
// 培训详情
export const getTrainBusinessDetail = (data, callback) => dPost('getTrainBusinessDetail.json', data, callback)
// 培训报名
export const applyTrainBusiness = (data, callback) => dPost('applyTrainBusiness.json', data, callback)
// 绑定手机号
export const SJMemberBindPhone = (data, callback) => dPost('SJMemberBindPhone.json', data, callback)
// 新增收货地址
export const createMemberAddress = (data, callback) => dPost('createMemberAddress.json', data, callback)
// 编辑收货地址
export const updateMemberAddress = (data, callback) => dPost('updateMemberAddress.json', data, callback)
// 获取地址列表
export const getMemberAddressList = (data, callback) => dPost('getMemberAddressList.json', data, callback)
// 删除地址
export const deleteMyMemberAddress = (data, callback) => dPost('deleteMyMemberAddress.json', data, callback)
// 获取地址详情
export const getOneMemberAddressDetail = (data, callback) => dPost('getOneMemberAddressDetail.json', data, callback)
// 获取用户密码
export const getMemberPassword = (data, callback) => dPost('getMemberPassword.json', data, callback)
// 获取新书列表
export const getGoodsRecommendList = (data, callback) => dPost('getGoodsRecommendList.json', data, callback)
// 获取新书列表
export const getActionList = (data, callback) => dPost('getActionList.json', data, callback)
// 获取段落详情
export const getSectionDetail = (data, callback) => dPost('getSectionDetail.json', data, callback)
// 设计贝购买
// export const useGoldenBuy  = (data, callback) => dPost('useGoldenBuy.json', data, callback)
export const useGoldenBuy = (data, callback) => dPost('useGoldenBuyMemberOrder.json', data, callback)
// 绑定银行卡
export const submitOneMemberBank = (data, callback) => dPost('submitOneMemberBank.json', data, callback)
// 银行卡列表
export const getMemberBankList = (data, callback) => dPost('getMemberBankList.json', data, callback)
// 银行卡详情
export const getMemberBankDetail = (data, callback) => dPost('getMemberBankDetail.json', data, callback)
// 银行卡修改
export const updateOneMemberBank = (data, callback) => dPost('updateOneMemberBank.json', data, callback)

// 解绑银行卡
export const deleteOneMemberBank = (data, callback) => dPost('deleteOneMemberBank.json', data, callback)
// 创建订单
export const SJCreateMemberOrder = (data, callback) => dPost('SJCreateMemberOrder.json', data, callback)
//提交页面浏览记录
export const submitOneObjectBrowse = (data, callback) => dPost('submitOneObjectBrowse.json', data, callback)
//提交页面浏览时间
export const addBrowseSeconds = (data, callback) => dPost('addBrowseSeconds.json', data, callback)
// 报名训练营
export const createOneMemberTrain = (data, callback) => dPost('createOneMemberTrain.json', data, callback)
// 获取优惠券详情
export const getOneBonusDetail = (data, callback) => dPost('getOneBonusDetail.json', data, callback)
// 领取优惠券
export const getOneBonus = (data, callback) => dPost('getOneBonus.json', data, callback)
// 会员提现
export const applyMemberWithdraw = (data, callback) => dPost('applyMemberWithdraw.json', data, callback)
// 获取银行总行列表
export const getBankList = (data, callback) => dPost('getBankList.json', data, callback)
//提现
export const applyOneMemberWithdraw = (data, callback) => dPost('applyOneMemberWithdraw.json', data, callback)
// 提现记录
export const getMemberWithdrawList = (data, callback) => dPost('getMemberWithdrawList.json', data, callback)
// 首页广告弹窗
export const getAdContentByCodeList = (data, callback) => dPost('getAdContentByCodeList.json', data, callback)
// 新增一个会员的播放记录
export const addOneMemberPlay = (data, callback) => dPost('addOneMemberPlay.json', data, callback)
// 更新一个会员播放记录
export const updateOneMemberPlay = (data, callback) => dPost('updateOneMemberPlay.json', data, callback)
// 完成一个会员的播放记录
export const finishOneMemberPlay = (data, callback) => dPost('finishOneMemberPlay.json', data, callback)
// 获取海报记录
export const getPosterRecordList = (data, callback) => dPost('getPosterRecordList.json', data, callback)
// 获取海报详情
export const getPosterRecordDetail = (data, callback) => dPost('getPosterRecordDetail.json', data, callback)
// 获取用户支付密码
export const getMyTradePassword = (data, callback) => dPost('getMyTradePassword.json', data, callback)
// 获取用户支付密码
export const setTradePassword = (data, callback) => dPost('setTradePassword.json', data, callback)
// 提交一次分享阅读记录
export const readOneShare = (data, callback) => dPost('readOneShare.json', data, callback)
// 创建shareID
export const submitOneShare = (data, callback) => dPost('submitOneShare.json', data, callback)
//获取文章的详情  用户协议
export const getArticleMoreDetail = (data, callback) => dPost('getArticleMoreDetail.json', data, callback)
// 获取邀请海报详情
export const getPosterDefineDetail = (data, callback) => dPost('getPosterDefineDetail.json', data, callback)
// 创建订单统一接口
export const standardCreateOneMemberOrder = (data, callback) => dPost('standardCreateOneMemberOrder.json', data, callback)
// 购买设计贝  创建一个获取记录
export const createOneGoldenGet = (data, callback) => dPost('createOneGoldenGet.json', data, callback)
//书城获取公告列表
export const getNoticeArticleList = (data, callback) => dPost('getNoticeArticleList.json', data, callback)
// 获取商品的属性
export const getAttributeValueList = (data, callback) => dPost('getAttributeValueList.json', data, callback)
// 商品加入购物车
export const addGoodsToCart = (data, callback) => dPost('addGoodsToCart.json', data, callback)
// 更改购物车商品数量
export const updateCartGoodsQTY = (data, callback) => dPost('updateCartGoodsQTY.json', data, callback)
// 清空购物车商品
export const clearMyCart = (data, callback) => dPost('clearMyCart.json', data, callback)
// 删除购物车商品
export const deleteGoodsFromCart = (data, callback) => dPost('deleteGoodsFromCart.json', data, callback)
// 邀请人数
export const getMemberRecommendList = (data, callback) => dPost('getMemberRecommendList.json', data, callback)
// 累计返现
export const getMemberIncomeList = (data, callback) => dPost('getMemberIncomeList.json', data, callback)
// 提交点击广告记录
export const submitAdContentClick = (data, callback) => dPost('submitAdContentClick.json', data, callback)
// 提交广告播放记录
// export const submitOneObjectBrowse = (data, callback) => dPost('submitOneObjectBrowse.json', data, callback)
// 反选购物车
export const noSelectToAllCartGoods = (data, callback) => dPost('noSelectToAllCartGoods.json', data, callback)
// 获取订单详情
export const getOneMemberOrderDetail = (data, callback) => dPost('getOneMemberOrderDetail.json', data, callback)
// 独立接口：修改一个企业会员订单 updateOneMemberOrder
export const updateOneMemberOrder = (data, callback) => dPost('updateOneMemberOrder.json', data, callback)
// 独立接口：获取会员订单商品列表 getMemberOrderGoodsList
export const getMemberOrderGoodsList = (data, callback) => dPost('getMemberOrderGoodsList.json', data, callback)
// 故事订阅
export const SJCreateOneMemberBuyRead = (data, callback) => dPost('SJCreateOneMemberBuyRead.json', data, callback)
// 获取当前会员订单可使用的红包优惠券列表
export const getCurrentCanUseMemberBonusList = (data, callback) => dPost('getCurrentCanUseMemberBonusList.json', data, callback)
// 刷新一个会员订单（优惠券变化）
export const refreshOneMemberOrder = (data, callback) => dPost('refreshOneMemberOrder.json', data, callback)
// 获取礼品卡详情
export const getOnePresentRecordDetail = (data, callback) => dPost('getOnePresentRecordDetail.json', data, callback)
// 兑换历史
export const getPresentRecordList = (data, callback) => dPost('getPresentRecordList.json', data, callback)
// 设置会员登录凭证扫描成功
export const setAuthCodeStatusToScan = (data, callback) => dPost('setAuthCodeStatusToScan.json', data, callback)
// 设置登录凭证登录完成
export const setAuthCodeLoginDone = (data, callback) => dPost('setAuthCodeLoginDone.json', data, callback)
//提交一个会员订阅的学习进度
export const submitOneMemberBuyReadRate = (data, callback) => dPost('submitOneMemberBuyReadRate.json', data, callback)
// 金币变动列表
export const getGoldenBalanceList = (data, callback) => dPost('getGoldenBalanceList.json', data, callback)
// 文章列表
export const getNavigatorSimpleArticleList = (data, callback) => dPost('getNavigatorSimpleArticleList.json', data, callback)
// 训练营详情
export const getTrainCourseDetail = (data, callback) => dPost('getTrainCourseDetail.json', data, callback)
// 客服列表
export const getSiteServicerList = (data, callback) => dPost('getSiteServicerList.json', data, callback)
// 学员作品
export const getTrainDocumentList = (data, callback) => dPost('getTrainDocumentList.json', data, callback)
// 作品详情
export const getMemberDocumentDetail = (data, callback) => dPost('getMemberDocumentDetail.json', data, callback)
// 排行榜
export const getGoodsShopList = (data, callback) => dPost('getGoodsShopList.json', data, callback)
// 训练营列表
export const getStoryRecommendList = (data, callback) => dPost('getStoryRecommendList.json', data, callback)
// 我的训练营列表
export const getMemberTrainList = (data, callback) => dPost('getMemberTrainList.json', data, callback)
// 浏览记录
export const getBrowseList = (data, callback) => dPost('getBrowseList.json', data, callback)
// 取消订单
export const cancelOneMemberOrder = (data, callback) => dPost('cancelOneMemberOrder.json', data, callback)
// 确认收货
export const getGoodsOneMemberOrder = (data, callback) => dPost('getGoodsOneMemberOrder.json', data, callback)
// 物流
export const getExpressLogisticsInfo = (data, callback) => dPost('getExpressLogisticsInfo.json', data, callback)
//获取我的意见历史列表
export const getMyFeedList = (data, callback) => dPost('getMyFeedList.json', data, callback)
// 收藏好物
export const getMyCollectList = (data, callback) => dPost('getMyCollectList.json', data, callback)
// 查询会员微信号小程序openID是否存在
export const getWeixinTokenFromMember = (data, callback) => dPost('getWeixinTokenFromMember.json', data, callback)
//通过手机号搜索会员查询会员
export const searchMemberByPhone = (data, callback) => dPost('searchMemberByPhone.json', data, callback)
//微信一键登录和注册
export const weiXinLogin = (data, callback) => dPost('weiXinLogin.json', data, callback)
// 服务器端获取微信公众号openID	
export const queryWeixinOpenIDByCode = (data, callback) => dPost('queryWeixinOpenIDByCode.json', data, callback)
// 第三方登录
export const thirdLogin = (data, callback) => dPost('thirdLogin.json', data, callback)
// 腾讯视频   获取psign
export const getPSign = (data, callback) => dPost('getPSign.json', data, callback)
//阅读文章的详情
export const readingOneArticle = (data, callback) => dPost('readingOneArticle.json', data, callback)
// 增加故事段落播放量 
export const addStorySectionPlayTimes = (data, callback) => dPost('addStorySectionPlayTimes.json', data, callback)
// 增加故事段落课程订阅量 
export const addStorySectionReadBuyTimes = (data, callback) => dPost('addStorySectionReadBuyTimes.json', data, callback)
// 增加故事段落的浏览量 
export const addStorySectionBrowseTimes = (data, callback) => dPost('addStorySectionBrowseTimes.json', data, callback)
// 订阅专栏
export const getMyColumnBuyReadStoryList = (data, callback) => dPost('getMyColumnBuyReadStoryList.json', data, callback)
// 获取我订阅的课程列表
export const getMyClassBuyReadStoryList = (data, callback) => dPost('getMyClassBuyReadStoryList.json', data, callback)
// 安卓 文章详情
export const getStoryDetailAndroid = (domainName, data, callback) => dPostAndroid('getStoryDetail.json', domainName, data, callback)
// 安卓 vip
export const getMyMemberMajorListAndroid = (domainName, data, callback) => dPostAndroid('getMyMemberMajorList.json', domainName, data, callback)
// 安卓 训练营详情
export const getTrainCourseDetailAndroid = (domainName, data, callback) => dPostAndroid('getTrainCourseDetail.json', domainName, data, callback)
// 课程获取标签
export const getAllStoryCategoryList = (data, callback) => dPost('getAllStoryCategoryList.json', data, callback)
// 系列课分类
export const getStoryAllList = (data, callback) => dPost('getStoryAllList.json', data, callback)
// 阅读回复
export const readOneFeedback = (data, callback) => dPost('readOneFeedback.json', data, callback)
// 创建1个故事 
export const submitOneStory = (data, callback) => dPost('submitOneStory.json', data, callback)
// 获取帖子列表
export const getSocialStoryList = (data, callback) => dPost('getSocialStoryList.json', data, callback)
// 删除故事
export const deleteOneStory = (data, callback) => dPost('deleteOneStory.json', data, callback)
// 发布故事
export const upOrDownOneStory = (data, callback) => dPost('upOrDownOneStory.json', data, callback)
// 关注
export const submitOneMemberFollow = (data, callback) => dPost('submitOneMemberFollow.json', data, callback)
//取消关注
export const deleteOneMemberFollow = (data, callback) => dPost('deleteOneMemberFollow.json', data, callback)
// 更新故事
export const updateOneStory = (data, callback) => dPost('updateOneStory.json', data, callback)
//上传对象的附件
export const submObjectAttachment = (data, callback) => dPost('submObjectAttachment.json', data, callback)
// 提交段落
export const submitOneSection = (data, callback) => dPost('submitOneSection.json', data, callback)
// 获取关注我的会员列表
export const getFollowMeMemberFollowList = (data, callback) => dPost('getFollowMeMemberFollowList.json', data, callback)
// 获取我关注的会员列表
export const getMyMemberFollowList = (data, callback) => dPost('getMyMemberFollowList.json', data, callback)
// 获取关注的会员列表
export const getMemberFollowList = (data, callback) => dPost('getMemberFollowList.json', data, callback)
// 获取会员积分和等级信息
export const getMemberPointRank = (data, callback) => dPost('getMemberPointRank.json', data, callback)
// 获取会员等级定义列表
export const getRankList = (data, callback) => dPost('getRankList.json', data, callback)
// 获取我的积分列表 
export const getMyPointList = (data, callback) => dPost('getMyPointList.json', data, callback)
// 获取特权定义列表
export const getPrivilegeDefineList = (data, callback) => dPost('getPrivilegeDefineList.json', data, callback)
//活动
export const getActionDetail = (data, callback) => dPost('getActionDetail.json', data, callback)
//创建一个预约记录
export const createOneAppointment = (data, callback) => dPost('createOneAppointment.json', data, callback)
//获取预约列表
export const getAppointmentList = (data, callback) => dPost('getAppointmentList.json', data, callback)
//获取预约详情
export const getOneAppointmentDetail = (data, callback) => dPost('getOneAppointmentDetail.json', data, callback)
// 登陆 20210524
export const loginPop = (data, callback) => dPost('memberLogin.json', data, callback)
// 修改订单地址列表20210529
export const updateMemberOrderAddress = (data, callback) => dPost('updateMemberOrderAddress.json', data, callback)
// 首页秒杀列表
export const getGoodsSecondDefineList = (data, callback) => dPost('getGoodsSecondDefineList.json', data, callback)
// 秒杀创建订单
export const submitOneGoodsSecond = (data, callback) => dPost('submitOneGoodsSecond.json', data, callback)
// 加入购物车
export const addGoodsShopToCart = (data, callback) => dPost('addGoodsToCart.json', data, callback)
// export const addGoodsShopToCart = (data, callback) => wPost('cart/addGoodsShopToCart', data, callback)
// 滚动条 首页
export const webGetArticleListByNavigator = (data, callback) => dPost('getMemberOrderListByMember.json', data, callback)
// 获取直播列表
export const getLiveVideoList = (data, callback) => dPost('getLiveVideoList.json', data, callback)
// 获取直播详情
export const getLiveVideoDetail = (data, callback) => dPost('getLiveVideoDetail.json', data, callback)
// 结束1个视频直播
export const quitOneMemberLivevideo = (data, callback) => dPost('quitOneMemberLivevideo.json', data, callback)
// 开始一个直播
export const applyOneMemberLivevideo = (data, callback) => dPost('applyOneMemberLivevideo.json', data, callback)
// 注销账号
export const memberApllyLeft = (data, callback) => dPost('memberApllyLeft.json', data, callback)
// 修改购物车商品数量
export const updateCartGoodsNumber = (data, callback) => wPost('cart/updateCartGoodsNumber.json', data, callback)
// 删除购物车商品
// export const removeCartGoods = (data, callback) => wPost('cart/removeCartGoods.json', data, callback)
export const removeCartGoods = (data, callback) => dPost('removeCartGoods.json', data, callback)
// 取消订单
export const cancelMemberOrder = (data, callback) => wPost('memberOrder/cancelMemberOrder.json', data, callback)
// 确认收货
export const confirmMemberOrder = (data, callback) => wPost('memberOrder/confirmMemberOrder.json', data, callback)
// 申请退单
export const submitOneMemberOrderReturn = (data, callback) => wPost('memberOrder/submitOneMemberOrderReturn.json', data, callback)
// 获取运费
export const getExpressTotal = (data, callback) => wPost('memberOrder/getExpressTotal.json', data, callback)
// 获取订单模板列表
export const getOrderTemplateList = (data, callback) => wPost('orderTemplate/getOrderTemplateList.json', data, callback)
// 获取订单模板列表
export const getOrderTemplateDetail = (data, callback) => wPost('orderTemplate/getOrderTemplateDetail.json', data, callback)
// 获取店铺商品列表
// export const getGoodsShopList = (data, callback) => wPost('goodsShop/getGoodsShopList.json', data, callback)
// 获取店铺商品详情
// 第三方登录
export const appLogin = (data, callback) => wPost('/wLogin/appLogin.json', data, callback)
// 手机号注册
export const memberPhoneRegisterr = (data, callback) => dPost('memberPhoneRegister.json', data, callback)
// 账号密码登录
export const memberLogin = (data, callback) => dPost('memberLogin.json', data, callback)
// 退出登录
export const loginOut = (data, callback) => wPost('wLogin/loginOut.json', data, callback)
// export const getMemberOrderList = (data, callback) => wPost('memberOrder/getMemberOrderList.json', data, callback)
// 获取订单详情
export const getMemberOrderDetail = (data, callback) => wPost('memberOrder/getMemberOrderDetail.json', data, callback)
// 获取购物车列表
// export const getCartGoodsList = (data, callback) => wPost('cart/getCartGoodsList.json', data, callback)
export const getCartGoodsList = (data, callback) => dPost('getCartGoodsList.json', data, callback)
// 选择购物车商品
// export const selectCartGoods = (data, callback) => wPost('cart/selectCartGoods.json', data, callback)
export const selectCartGoods = (data, callback) => dPost('selectCartGoods.json', data, callback)
// 加入购物车
// export const addGoodsShopToCart = (data, callback) => wPost('cart/addGoodsShopToCart.json', data, callback)
// 生成订单
export const createMemberOrder = (data, callback) => wPost('memberOrder/createMemberOrder.json', data, callback)
// 更改头像
export const saveAvatar = (data, callback) => dPost('updateMyMemberAvatar.json', data, callback)
// 评价
export const getObjectDiscuss = (data, callback) => post('getObjectDiscuss.json', data, callback)
// 获取购物车数量
export const getMemberCartGoodsNum = (data, callback) => post('getMemberCartGoodsNum.json', data, callback)
// 获取红包列表
export const getMemberBonus = (data, callback) => post('getMemberBonus.json', data, callback)
//阅读文章送积分
export const browseOneArticle = (data, callback) => dPost('browseOneArticle.json', data, callback)
// 标准通用的申请实名认证
export const applyRealNameVerify = (data, callback) => dPost('applyRealNameVerify.json', data, callback)
// 查询会员实名认证的状态
export const queryMemberRealNameStatus = (data, callback) => dPost('queryMemberRealNameStatus.json', data, callback)
// 获取我的积分列表
// export const getMyPointList = (data, callback) => dPost('getMyPointList.json', data, callback)
// 设置会员地址为默认值
export const setDefaultMemberAddress = (data, callback) => dPost('setMemberAddressIsDefault.json', data, callback)
// 获取我的会员股票列表
export const getMemberStockList = (data, callback) => dPost('getMemberStockList.json', data, callback)
// 获取会员积分
export const getMemberPoint = (data, callback) => post('getMemberPoint.json', data, callback)
// 获取会员等级定义
export const getRankPoint = (data, callback) => post('getRankPoint.json', data, callback)
// 获取地址详情
export const getMemberAddressDetail = (data, callback) => dPost('getOneMemberAddressDetail.json', data, callback)
// 获取会员收入的详细信息
export const getMemberIncomeDetail = (data, callback) => dPost('getMemberIncomeDetail.json', data, callback)
// 获取微信支付报文
export const getWeixinPayInfo = (data, callback) => dPost('getWeixinPayInfo.json', data, callback)
// 获取商品微信支付信息
export const getGoodsWeixinPayInfo = (data, callback) => dPost('getGoodsWeixinPayInfo.json', data, callback)
// 获取微信二维码支付url
export const getWeixinQrcodePayUrl = (data, callback) => dPost('getWeixinQrcodePayUrl.json', data, callback)
// 获取微信H5支付报文
export const getH5WeixinPayInfo = (data, callback) => dPost('getH5WeixinPayInfo.json', data, callback)
// 商品H5获取微信支付信息
export const getGoodsH5WeixinPay = (data, callback) => dPost('getGoodsH5WeixinPay.json', data, callback)
// 获取微信支付配置
export const getWeixinPayConfig = (data, callback) => dPost('getWeixinPayConfig.json', data, callback)
// 获取会员简化信息
export const getMemberBaseDetail = (data, callback) => dPost('getOneMemberDetail.json', data, callback)
// 修改会员信息
export const updateMemberInfoByZhiXiao = (data, callback) => post('updateMemberInfoByZhiXiao.json', data, callback)
// 修改登录密码
export const resetpassword = (data, callback) => post('resetpassword.json', data, callback)
// 获取我的下级列表
// export const getMemberChildMemberList = (data, callback) => post('getMemberRecommendList.json', data, callback)
// 设置默认会员银行卡
export const setMyMemberBankDefault = (data, callback) => dPost('setMyMemberBankDefault.json', data, callback)
// 获取会员统计新
export const getNewMemberTotalInfo = (data, callback) => post('getNewMemberTotalInfo.json', data, callback)
// 获取提现定义
export const getWithdrawDefineList = (data, callback) => dPost('getWithdrawDefineList.json', data, callback)
// 获取我的资金记录列表
export const getMyMemberbalance = (data, callback) => post('getMyMemberbalance.json', data, callback)
// 获取实名信息
export const getMemberRealName = (data, callback) => post('getMemberRealName.json', data, callback)
// 撤销1个会员提现
export const cancelOneMemberWithdraw = (data, callback) => dPost('cancelOneMemberWithdraw.json', data, callback)
// 会员删除1个提现记录
export const deleteMemberWithdraw = (data, callback) => dPost('deleteMemberWithdraw.json', data, callback)
// 获取省市县数据列表
export const getNewCityList = (data, callback) => dPost('getCityList.json', data, callback)
// 获取支付机构详情
export const getPaywayDetail = (data, callback) => post('getPaywayDetail.json', data, callback)
// 获取支付机构详情
export const getCityList = (data, callback) => dPost('getCityList.json', data, callback)
// 获取微信二维码
export const getWeixinQrcode = (data, callback) => post('getWeixinQrcode.json', data, callback)
// 获取支付机构详情
export const getMemberOrderPaySucccess = (data, callback) => dPost('getMemberOrderPaySucccess.json', data, callback)
// 发送验证码
export const sendSMSVerifyCode = (data, callback) => dPost('sendSMSVerifyCode.json', data, callback)
// 获取会员的推荐会员列表
// export const getMemberRecommendList = (data, callback) => dPost('getMemberRecommendList.json', data, callback)
// 获取会员接点下级列表
export const getMemberLinkList = (data, callback) => dPost('getMemberLinkList.json', data, callback)
// 用户领取红包 20210527
// export const getOneBonus = (data, callback) => dPost('getOneBonus.json', data, callback)
// 获取卡券定义列表
export const getMyMemberCardList = (data, callback) => dPost('getMyMemberCardList.json', data, callback)
// 获取机器详情
export const getMachineDetailByCode = (data, callback) => dPost('getMachineDetailByCode.json', data, callback)
// 机器开启
export const light = (data, callback) => dPost('light.json', data, callback)
// 准备治疗
export const submitMachineActionLog = (data, callback) => dPost('submitMachineActionLog.json', data, callback)


//会员余额列表
export const getMemberBalanceList = (data, callback) => dPost('getMemberBalanceList.json', data, callback)
//申请开店提交一个店铺申请
export const submitShopApply = (data, callback) => dPost('submitShopApply.json', data, callback)
//获取我的店铺申请列表
export const getMyShopApplyList = (data, callback) => dPost('getMyShopApplyList.json', data, callback)
//获取店铺申请的详细信息
export const getShopApplyDetail = (data, callback) => dPost('getShopApplyDetail.json', data, callback)
//提交一个意见
// export const submitOneFeed = (data, callback) => dPost('submitOneFeed.json', data, callback)
//获取一个意见的反馈列表
export const getOneFeedBackList = (data, callback) => dPost('getOneFeedBackList.json', data, callback)
//获取发票列表
export const getInvoiceList = (data, callback) => dPost('getInvoiceList.json', data, callback)
//取消我的店铺申请
export const cancelOneShopApply = (data, callback) => dPost('cancelOneShopApply.json', data, callback)
//删除我的店铺申请
export const deleteMyShopApply = (data, callback) => dPost('deleteMyShopApply.json', data, callback)
//获取店铺列表
export const getShopList = (data, callback) => dPost('getShopList.json', data, callback)
//获取店铺的详细信息
export const getShopDetail = (data, callback) => dPost('getShopDetail.json', data, callback)
//注册前签署一个空白协议
export const signOneBlankAgreement = (data, callback) => dPost('signOneBlankAgreement.json', data, callback)
//直接签署协议
export const signOneAgreement = (data, callback) => dPost('signOneAgreement.json', data, callback)
// 氧寿余额订单支付
export const yangShouPayMemberOrderByBalance = (data, callback) => dPost('payMemberOrderByBalance.json', data, callback)
//获取一个会员可用接点列表
export const getMemberBlankLinkList = (data, callback) => dPost('getMemberBlankLinkList.json', data, callback)
//修改一个会员的接点上级
export const resetMemberUpLinkMemberID = (data, callback) => dPost('resetMemberUpLinkMemberID.json', data, callback)
//签到初始化 20210526
export const getMembeSigninList = (data, callback) => dPost('getMembeSigninList.json', data, callback)
//会员签到 20210526
export const submitOneSignin = (data, callback) => dPost('submitOneSignin.json', data, callback)
// 分会场 优惠券列表
export const getBonusList = (data, callback) => dPost('getBonusList.json', data, callback)


//获取一个患者会员信息
export const getOnePatientMemberDetail = (data, callback) => dPost('getOnePatientMemberDetail.json', data, callback)
//获取一个会员的信息
export const getOneMemberDetail = (data, callback) => dPost('getOneMemberDetail.json', data, callback)
//获取一个会员的信息
export const getMajorList = (data, callback) => dPost('getMajorList.json', data, callback)
//获取我的推荐上级
export const getMemberRecommendUPList = (data, callback) => dPost('getMemberRecommendUPList.json', data, callback)
//获取我的接点上级
export const getMemberLinkUPList = (data, callback) => dPost('getMemberLinkUPList.json', data, callback)
//设置交易密码支付密码
// export const setTradePassword = (data, callback) => dPost('setTradePassword.json', data, callback)
//获取会员交易密码支付密码
// export const getMyTradePassword = (data, callback) => dPost('getMyTradePassword.json', data, callback)
//忘记交易密码支付密码
export const forgetTradePassword = (data, callback) => dPost('forgetTradePassword.json', data, callback)
//获取关于我们
export const getVersionDetail = (data, callback) => dPost('getVersionDetail.json', data, callback)
//通过手机号搜索会员查询会员
// export const searchMemberByPhone = (data, callback) => dPost('searchMemberByPhone.json', data, callback)
//会员钱包内部转账
export const submitMemberPaymentToOther = (data, callback) => dPost('submitMemberPaymentToOther.json', data, callback)
//获取我的治疗记录
export const getMemberMachineRecordList = (data, callback) => dPost('getMemberMachineRecordList.json', data, callback)

//获取店铺全部附件列
export const ObjectDefineAttachmentList = (data, callback) => nspste('getObjectAttachmentList.json', data, callback)
//独立接口：获取一个会员的会员团队下级列表
export const getMemberTeamList = (data, callback) => nspste('getMemberTeamList.json', data, callback)
//独立接口：获取我的会员团队上级信息
export const getMyMemberTeamLead = (data, callback) => nspste('getMyMemberTeamLead.json', data, callback)

//独立接口：获取健康测量记录详细信息
export const getHealthRecordDetail = (data, callback) => nspste('getHealthRecordDetail.json', data, callback)

//独立接口：获取健康测量记录列表
export const getHealthRecordList = (data, callback) => nspste('getHealthRecordList.json', data, callback)

//独立接口：提交健康测量记录
export const submitHealthRecord = (data, callback) => nspste('submitHealthRecord.json', data, callback)

//独立接口：删除1个健康测量记录
export const deleteOneHealthRecord = (data, callback) => nspste('deleteOneHealthRecord.json', data, callback)

//独立接口：修改一个健康测量记录
export const updateOneHealthRecord = (data, callback) => nspste('updateOneHealthRecord.json', data, callback)

//直接加其他会员成为的会员团队成员
export const addOneMemberTeam = (data, callback) => nspste('addOneMemberTeam.json', data, callback)

//会员申请成为其他会员的团队成员
export const applyOneMemberTeam = (data, callback) => nspste('applyOneMemberTeam.json', data, callback)

//获取会员参加直播列表
export const getMemberLivevideoList = (data, callback) => nspste('getMemberLivevideoList.json', data, callback)

//删除我的直播
export const removeMyLivevideo = (data, callback) => nspste('removeMyLivevideo.json', data, callback)

//删除我参加的直播记录
export const removeMyMemberLivevideo = (data, callback) => nspste('removeMyMemberLivevideo.json', data, callback)

//直接删除1个会员团队
export const deleteOneMemberTeam = (data, callback) => nspste('deleteOneMemberTeam.json', data, callback)

//应答别人申请成为我的会员团队
export const answerOneMemberTeam = (data, callback) => nspste('answerOneMemberTeam.json', data, callback)


//获取我的评论列表
export const getMyDIscussList = (data, callback) => nspste('getMyDIscussList.json', data, callback)



//会员推荐和服务的店铺列表
export const getRecommendOrServiceShopList = (data, callback) => nspste('getRecommendOrServiceShopList.json', data, callback)
//
// export const getMyMemberMajorList = (data, callback) => dPost('getMyMemberMajorList.json', data, callback)
//getQiniuList
export const getQiniuList = (data, callback) => nspste('getQiniuList.json', data, callback)
// 分享判断是否今日有记录20210529
export const getMeIsShare = (data, callback) => dPost('getMeIsShare.json', data, callback)
// 消费金额
export const getMemberConsumptionAmount = (data, callback) => dPost('getMemberConsumptionAmount.json', data, callback)
// 订单数量
export const getMemberOrderStatistics = (data, callback) => dPost('getMemberOrderStatistics.json', data, callback)

export const createOneAssistJoinRecord = (data, callback) => dPost('createOneAssistJoinRecord.json', data, callback)
export const createOneAssistRecord = (data, callback) => dPost('createOneAssistRecord.json', data, callback)
export const getAssistRecordList = (data, callback) => dPost('getAssistRecordList.json', data, callback)
export const getOneAssistRecordDetail = (data, callback) => dPost('getOneAssistRecordDetail.json', data, callback)
export const getAssistJoinRecordList = (data, callback) => dPost('getAssistJoinRecordList.json', data, callback)
export const updateOneAssistJoinRecord = (data, callback) => dPost('updateOneAssistJoinRecord.json', data, callback)

//页面浏览量
export const submitOneBrowseForPage = (data, callback) => dPost('submitOneBrowseForPage.json', data, callback)
//社交媒体浏览量
export const submitOneBrowseForChannel = (data, callback) => dPost('submitOneBrowseForChannel.json', data, callback)
// 获取消息未读数量
export const submitOneRelationship = (data, callback) => dPost('submitOneRelationship.json', data, callback)

//分享记录
// export const submitOneShare = (data, callback) => dPost('submitOneShare.json', data, callback)
// 微信浏览器分享
export const weixinShare = (shareTitle, shareImg, shareDesc, url, fn) => {
    console.log({ shareTitle, shareImg, shareDesc, url });
    var linkShare = location.href.split('#')[0];//接口参数
    var url2 = ''
    if (url) {
        url2 = url;//配置分享的链接  分享列表
    } else {
        url2 = location.href;//配置分享的链接  课程详情 等
    }
    // 所有h5页面  通过微信分享出去  都拼接推荐码recommandCodeReg
    // 用户登录后  缓存推荐码
    if (url2.indexOf('recommandCodeReg') != -1) {
        url2 = common.changeURLArg(url2, 'recommandCodeReg', common.getStorage("recommandCodeRegH5"))
    } else {
        // if(url2.indexOf("?") != -1){//有参数
        // 	url2=url2+'&recommandCodeReg='+ common.getStorage("recommandCodeRegH5")
        // }else{
        // 	url2=url2+'?recommandCodeReg='+ common.getStorage("recommandCodeRegH5")
        // }

        if (url2.indexOf("?code") == -1) {//不是授权网址 没有code
            if (url2.indexOf("?") != -1) {//有参数
                url2 = url2 + '&recommandCodeReg=' + common.getStorage("recommandCodeRegH5")
            } else {
                url2 = url2 + '?recommandCodeReg=' + common.getStorage("recommandCodeRegH5")
            }
            // url2=url2+'&recommandCodeReg='+ common.getStorage("recommandCodeRegH5")
        } else {//带有code
            if (url2.lastIndexOf("?") == 0) {
                url2 = url2 + '?recommandCodeReg=' + common.getStorage("recommandCodeRegH5")
            } else {
                url2 = url2 + '&recommandCodeReg=' + common.getStorage("recommandCodeRegH5")
            }
        }
    }
    if (url2.indexOf('?from=singlemessage#') == -1) {
        url2 = url2.split('#')[0] + '?from=singlemessage#' + url2.split('#')[1]
    }
    //   url2 =  url2.split('#')[0] + '?#' + url2.split('#')[1]
    var shareImg2 = ''
    if (shareImg) {
        shareImg2 = shareImg;
    } else {
        shareImg2 = 'http://public.shejidedao.com/app/static/image/share_logo.png';
    }
    var shareTitle2 = ''
    if (shareTitle) {
        shareTitle2 = shareTitle;
    } else {
        shareTitle2 = '有设计问题,问宝象医疗';//默认微信分享卡片title
    }
    var shareDesc2 = ''
    if (shareDesc) {
        shareDesc2 = shareDesc;
    } else {
        shareDesc2 = '宝象医疗-百万设计师的职业提升平台';
    }
    let param = {
        url: linkShare,
        publicNo: 'gh_847af8369bc7',

    }
    // "https://kpinterface.shejidedao.cn/interface-server/api/" + 'getWeiXinJsSdkConfig.json'
    axios.post("https://kpinterface.shejidedao.cn/interface-server/api/" + 'getWeiXinJsSdkConfig.json', qs.stringify(param)).then(res => {
        var getMsg = res.data.body
        // alert(url2)
        wx.config({
            debug: false, // 生产环境需要关闭debug模式
            appId: getMsg.appId, // appId通过微信服务号后台查看
            timestamp: getMsg.timestamp, // 生成签名的时间戳
            nonceStr: getMsg.nonceStr, // 生成签名的随机字符串
            signature: getMsg.signature, // 签名
            // jsApiList: [ // 需要调用的JS接口列表
            //     'onMenuShareTimeline', // 分享给好友
            //     'onMenuShareAppMessage' // 分享到朋友圈
            // ]
            jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData', 'onMenuShareTimeline',
                'onMenuShareAppMessage', 'chooseImage']
        })
        wx.ready(function () {
            if (wx.updateAppMessageShareData) {
                var sdata = {
                    title: shareTitle2, // 分享标题
                    desc: shareDesc2, // 分享描述
                    link: url2,
                    imgUrl: shareImg2, // 分享图标
                    success: function () {
                        if (fn) {
                            fn();
                        }
                    }
                };
                wx.updateAppMessageShareData(sdata); // 发送给朋友
                wx.updateTimelineShareData(sdata); //分享到朋友圈
            } else {
                // 分享到朋友圈
                wx.onMenuShareAppMessage({

                    title: shareTitle2, // 分享标题
                    desc: shareDesc2, // 分享描述
                    link: url2,
                    imgUrl: shareImg2, // 分享图标
                    success: function () {
                        if (fn) {
                            fn();
                        }
                    }
                })
                // 分享给朋友
                wx.onMenuShareTimeline({
                    title: shareTitle2, // 分享标题
                    desc: shareDesc2, // 分享描述
                    link: url2,
                    imgUrl: shareImg2, // 分享图标
                    success: function () {
                        if (fn) {
                            fn();
                        }
                    }
                })
            }
        })
    })
}
//微信sdk
//import wx from 'weixin-js-sdk'

