<template>
    <div class="userDetails">
        <mainHeader :righrText='"首页 > 个人信息"' :header='"个人信息"' />
        <div class="contentBox">
            <div class="left">
                <el-menu default-active="1" class="el-menu-vertical-demo">
                    <el-menu-item v-for="item in data.tableList" @click="tabClick(item)" :key="item.id" :index="item.id">
                        <!-- <el-icon><icon-menu /></el-icon> -->
                        <span>{{ item.name }}</span>
                    </el-menu-item>
                </el-menu>
            </div>
            <div class="right">
                <router-view/>
            </div>
        </div>
    </div>
</template>
<script setup>
import mainHeader from "@/components/header/mainHeader.vue";
import { reactive, inject } from "vue";
import { useRouter } from 'vue-router'
import { } from "@/common/api.js"
const router = useRouter()
const data = reactive({
    tableList: [{
        path: '/userDetails/dashBoard',
        id: '1',
        name: '仪表盘'
    }, {
        path: '/userDetails/orderForm',
        id: '2',
        name: '订单'
    }, {
        path: '/userDetails/details',
        id: '3',
        name: '账户详情'
    }, {
        path: '/userDetails/myPay',
        id: '4',
        name: '我的钱包'
    }, {
        path: '/userDetails/quit',
        id: '5',
        name: '退出'
    }]
})
//点击切换
const tabClick = (data) => {
    router.push(data.path)
}
</script>
<style lang="scss" scoped>
.userDetails {
    width: 1366px;
    margin: 0 auto;
}

.contentBox {
    padding:40px 67px;
    display: flex;

    .left {
        width: 336px;
        margin-right: 34px;

        :deep(.el-menu-item:hover) {
            background: none;
        }

        :deep(.el-menu-item.is-active, .el-menu-item) {
            color: #000000;
        }

        :deep(.el-menu) {
            border-right: none;
        }

        :deep(.el-menu-item) {
            font-size: 14px;
            font-weight: 400;
            color: #000000;
            border-bottom: 1px solid #000;
        }
    }

    .right {
        height: auto;
        flex: 1;
        li{
            height: 50px;
        }
    }
}</style>