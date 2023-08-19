<template>
    <div class="shopCar">
        <mainHeader :righrText='"首页 > 购物车"' :header='"购物车"' />
        <div class="headerClick">
            <el-progress :stroke-width="39" :percentage="data.percentage">
            </el-progress>
            <div class="button">
                <div :class="data.percentage > 0 ? 'active' : ''">查看购物车</div>
                <div :class="data.percentage > 50 ? 'active' : ''">收款处</div>
                <div :class="data.percentage > 80 ? 'active' : ''">完成</div>
            </div>
        </div>
        <div class="table-box">
            <el-table :data="data.tableData" border show-summary :summary-method="getSummaries"
                :header-cell-style="{ color: '#000000' }" max-height="450" style="--el-table-border-color: #000;"
                empty-text='购物车空空如也~~' @selection-change="handleSelectionChange">
                <el-table-column text-align="center" type="selection" label="全选" width="80" />


                <el-table-column text-align="center" prop="goodsName" label="产品" width />
                <el-table-column text-align="center" prop="goodsShopName" label="型号" width />


                <el-table-column text-align="center" prop="showName" label="规格/G" width />
                <el-table-column text-align="center" prop="periodNumber" label="租期/月" />
                <el-table-column text-align="center" prop="priceNow" label="小计">
                    <template #default="scope">
                        {{ scope.row.salesUnitQTY * scope.row.priceNow }}
                    </template>
                </el-table-column>
                <el-table-column text-align="center" prop="" label="删除" width="57">
                    <template #default="scope">
                        <el-button size="small" @click="delGoods(scope.row.cartGoodsID, scope.$index)" type="info"
                            :icon="Delete" circle />
                    </template>
                </el-table-column>
            </el-table>
            <div class="tableFooter">
                <el-button class="addShopsCarStyle" @click="addGoodsToCartfun" type="primary" size="large"
                    round>更新购物车</el-button>
            </div>
        </div>
        <div class="shopPriceBox">
            <div class="shopPrice">
                <h3>
                    购物车总计
                </h3>
                <p>
                    <span>总价</span><span>{{ data.num }}</span>
                </p>
            </div>
        </div>
        <div class="submit">
            <el-button class="addShopsCarStyle" @click="orderFormFun" type="primary" size="large"
                round>继续结账</el-button>
        </div>
    </div>
</template>
<script setup>
import mainHeader from "@/components/header/mainHeader.vue";
import { getCartGoodsList, deleteGoodsFromCart, standardCreateOneMemberOrder } from "@/common/api.js"
import { ElMessage } from "element-plus";
import { Delete } from '@element-plus/icons-vue'
import { reactive } from "vue"
const data = reactive({
    percentage: 33,
    num: 0,
    tableData: [],
    summaryTableData: []
})
const orderFormFun = () => {
    console.log(data.tableData[0])
    standardCreateOneMemberOrder({
        // byCart:1,
        orderType:33,
        periodType:2,
        periodNumber:6,
        goodsQTY:1,//商品数量
        periodQTY:1,//商品周期数
        price:data.num,
        payFrom:1,
        contactName:'啦啦啦',
        // cartID:data.tableData[0].cartID,
        majorID:data.tableData[0].memberID,
        goodsShopID:data.tableData[0].goodsShopID
    },res=>{
        if (res.data.header.code === 0) {
            ElMessage({
                message: '订单添加成功',
                type: 'success',
            })
            data.tableData.splice(num, 1);
        } else {
            ElMessage({
                message: res.data.header.msg,
                type: 'error',
            })
        }
    })
}
//计算总价
const getSummaries = () => {
    const sums = []
    let addNum = 0
    data.summaryTableData.forEach((column) => {
        sums.push(column['priceNow'])
        addNum = addNum + (column['priceNow'] * column['salesUnitQTY'])
    })
    data.num = addNum
    return sums
}
//删除购物车
const delGoods = (cartGoodsID, num) => {
    deleteGoodsFromCart({ cartGoodsID: cartGoodsID }, res => {
        if (res.data.header.code === 0) {
            ElMessage({
                message: '删除购物车商品成功',
                type: 'success',
            })
            data.tableData.splice(num, 1);
        } else {
            ElMessage({
                message: res.data.header.msg,
                type: 'error',
            })
        }
    })
}
//选中的商品
const handleSelectionChange = (val) => {
    data.summaryTableData = val
}
getCartGoodsList({}, res => {
    if (res.data.header.code == 0) {
        data.tableData = res.data.body.data.rows
    } else {
        ElMessage({
            message: res.data.header.msg,
            type: 'error',
        })
    }
})
</script>
<style lang="scss" scoped>
.shopCar {
    width: 1366px;
    margin: 0 auto;
}

.shopPriceBox,
.submit {
    width: 100%;
    padding: 0 105px;
    display: flex;
    justify-content: right;

    .shopPrice {
        width: 578px;

        h3 {
            height: 24px;
            font-size: 24px;
            font-weight: bold;
            color: #353535;
            line-height: 24px;
            margin-top: 74px;
        }

        >p {
            margin-top: 22px;
            display: flex;
            border: 1px solid #000000;

            span {
                height: 55px;
                width: 195px;
                font-size: 16px;
                font-weight: bold;
                color: #353535;
                padding: 0 18px;
                line-height: 55px;
            }

            span:last-child {
                flex: 1;
                border-left: 1px solid #000000;
            }
        }
    }
}

.submit {
    margin-top: 57px;
    margin-bottom: 79px;
    .addShopsCarStyle{
        margin-right: 30px;
    }
}


.headerClick {
    height: 39px;
    background: #D8E9FE;
    border-radius: 19px;
    margin: 0 105px;
    margin-top: 13px;
    position: relative;
    overflow: hidden;

    :deep(.el-progress__text) {
        display: none;
    }

    .button {
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        position: absolute;
        display: flex;
        justify-content: space-between;

        div {
            height: 100%;
            flex: 1;
            text-align: center;
            line-height: 39px;
            font-size: 16px;
            font-weight: bold;
            color: #9FB6F9;
        }

        div.active {
            color: #ffffff;
        }
    }
}

.table-box {
    margin-top: 97px;
    padding: 0 105px;

    :deep(.el-table__header-wrapper .el-table-column--selection .cell:before) {
        content: "全选";
        position: absolute;
        right: 18px;
    }

    :deep(.el-table__row .el-table-column--selection) {
        text-align: center;
    }

    :deep(.cell) {
        text-align: center;
    }

    .tableFooter {
        width: 100%;
        height: 102px;
        display: flex;
        justify-content: right;
        line-height: 40px;
        border: 1px solid #000000;
        border-top: none;
        align-items: center;
        padding-right: 30px;

    }

    :deep(.el-table__footer-wrapper) {
        display: none;
    }

    :deep(.el-checkbox__inner) {
        border-radius: 50%;
    }
}
.addShopsCarStyle {
    height: 48px;
    background: #3B83F1;
    border-radius: 24px;
    padding: 0 25px;
}</style>