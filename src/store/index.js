import { createStore } from 'vuex'
import {getNavigatorList} from "../common/api"
import { ElMessage } from "element-plus";
import Common from "../common/common"
export default createStore({
  state: {
    // 这里定义你的共享状态
    navList:[],
    headerList:[],
    footerList:[],
  },
  mutations: {
    // 这里定义修改状态的方法（同步）
    navId(state,data){
      state.navList = data
    },
    footerId(state,data){
      state.headerList = data
    },
    headerId(state,data){
      state.footerList = data
    },
  },
  actions: {
    //这里定义异步操作和提交mutations的方法
    //获取导航列表
    getNavList(context){
      for(let key in Common.navIdList){
        getNavigatorList({
          siteID:Common.siteID,
          navigatorID:Common.navIdList[key],
          sortTypeOrder:1
        },res=>{
          if(res.data.header.code===0){
            context.commit(key,res.data.body.data.rows)
          }else{
            ElMessage({
              message: '请求失败',
              type: 'error',
            })
          }
        })
      }
    }
  },
  getters: {
    // 这里定义计算属性
  }
})
