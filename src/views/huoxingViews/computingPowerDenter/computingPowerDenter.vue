<template>
    <div class="computingPowerDenter">
        <mainHeader />
        <div class="goodsBox">
            <h3>
                {{ data.goods.name }}
            </h3>
            <p>
                购买须知：最小购买量为100G且每次增加不少于100G,使用年限每次增加不低于六个月 且每半年只可购买十次
            </p>
            <div class="shopbox">
                <div class="shopList">
                    <el-select v-model="data.value" @change="selectGoods" placeholder="请选择商品" value-key="goodsShopID"
                        class="m-2" size="large">
                        <el-option class="m-3" v-for="item in  data.goodsList" :key="item.goodsShopID"
                            :label="item.showName" :value="item"></el-option>
                    </el-select>
                    <h3>使用年限</h3>
                    <p>
                        <el-input-number class="input-number-style" v-model="data.QTYnumber" :step="data.goods.periodNumber"
                            :min="data.goods.periodNumber" :max="data.goods.periodNumber * 10" @change="handleChange" />
                    <p>单位/{{ getperiodType(data.goods.periodType) }}</p>
                    </p>
                </div>
                <div>
                    <el-table :data="data.tableData" border show-summary :summary-method="getSummaries"
                        :header-cell-style="{ color: '#000000' }" max-height="450" style="--el-table-border-color: #000;">
                        <el-table-column text-align="center" prop="" width="57">
                            <template #default="scope">
                                <el-button size="small" @click="delGoods(scope.row.cartGoodsID, scope.$index)"
                                    :disabled="!scope.row.cartGoodsID" type="info" :icon="Delete" circle />
                            </template>
                        </el-table-column>
                        <el-table-column text-align="center" prop="showName" label="计算力" width />
                        <el-table-column text-align="center" prop="periodNumber" label="租期" />
                        <el-table-column text-align="center" prop="realPrice" label="金额" />
                    </el-table>
                    <div class="tableFooter">
                        总价：{{ data.num }}
                    </div>
                </div>
            </div>
            <div class="addShopsCarStylebox">
                <el-button class="addShopsCarStyle" @click="addGoodsToCartfun" type="primary" size="large"
                    round>加入购物车</el-button>
            </div>

            <!-- <p>{{ data.goods.realPrice }}//销售价格</p>
            <p>{{ data.goods.salesUnit }}//销售单位</p>
            <p>{{ getperiodType(data.goods.periodType) }}//周期类型</p>
            <p>{{ data.goods.periodNumber }}周期个数</p> -->
        </div>
    </div>
</template>
<script setup>
import mainHeader from "@/components/header/mainHeader.vue";
import { getGoodsShopList, getGoodsShopDetail, addGoodsToCart, deleteGoodsFromCart } from "@/common/api.js"
import { ElMessage } from "element-plus";
import { Delete } from '@element-plus/icons-vue'
import { reactive, inject } from "vue";
let { periodType: periodTypelist } = inject('Common')
const getperiodType = (type) => {
    let arr = periodTypelist.filter(item => { if (item.id == type) return item })
    if (arr.length > 0) {
        return arr[0].name
    }
}
const data = reactive({
    num: 0,
    QTYnumber: 0,
    QTY: 1,
    goods: {},
    goodsList: [],
    value: {},
    tableData: []
})
const handleChange = (value) => {
    data.QTY = value / data.goods.periodNumber
    data.tableData[0] = {
        ...data.goods,
        periodNumber: data.goods.periodNumber * data.QTY,
        realPrice: data.goods.realPrice * data.QTY
    }
}
//选中商品
const selectGoods = () => {
    getGoodsShopDetailfun()
}
//计算总价
const getSummaries = (param) => {
    const { columns, data: arrlist } = param
    const sums = []
    columns.forEach((column, index) => {
        if (index === 0) {
            return
        }
        const values = arrlist.map((item) => Number(item[column.property]))
        if (column.property === 'realPrice') {
            sums[index] = `${values.reduce((prev, curr) => {
                const value = Number(curr)
                if (!Number.isNaN(value)) {
                    return prev + curr
                } else {
                    return prev
                }
            }, 0)}`
            data.num = sums[index]
        } else {
            sums[index] = ''
        }
    })
    return []
}
const getGoodsShopDetailfun = () => {
    getGoodsShopDetail({ goodsShopID: data.value.goodsShopID }, res => {
        if (res.data.header.code == 0) {
            data.goods = res.data.body.data
            data.tableData[0] = data.goods
            data.QTYnumber = data.goods.periodNumber
            data.QTY = 1
        } else {

        }
    })
}
//删除购物车
const delGoods = (cartGoodsID, num) => {
    console.log(num)
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
//获取商品列表
getGoodsShopList({ salesType: 33 }, res => {
    if (res.data.header.code == 0) {
        data.goodsList = res.data.body.data.rows
        data.value = data.goodsList[1]
        getGoodsShopDetailfun()
    }
})
//添加购物车
const addGoodsToCartfun = () => {
    addGoodsToCart({
        goodsID: data.goods.goodsID,
        QTY: 1,
        salesUnitQTY: data.QTY,
        periodType: data.goods.periodType,
        periodNumber: data.goods.periodNumber,
    }, res => {
        if (res.data.header.code === 0) {
            ElMessage({
                message: '添加购物车成功',
                type: 'success',
            })
            data.tableData[0].cartGoodsID = res.data.body.cartGoodsID
            data.tableData.unshift([])
            getGoodsShopDetailfun()
        } else {
            ElMessage({
                message: res.data.header.msg,
                type: 'error',
            })
        }
    })
}
</script>
<style lang="scss" scoped>
.addShopsCarStylebox {
    width: 100%;
    margin-bottom: 55px;
    margin-top: 60px;
    display: flex;
    justify-content: center;
}

.addShopsCarStyle {
    width: 309px;
    height: 59px;
    background: #3B83F1;
    border-radius: 29px;
}

.goodsBox,
.computingPowerDenter {
    width: 1366px;
    margin: 0 auto;
}

.goodsBox {
    padding: 0 145px;
    margin-top: 60px;

    :deep :focus-visible {
        outline-style: none;
    }

    .shopList {
        >h3 {
            margin-top: 46px;
            height: 23px;
            font-size: 24px;
            font-weight: 500;
            color: #000000;
            line-height: 23px;
        }

        >p {
            margin-top: 24px;
            display: flex;
            align-items: center;

            >p {
                margin-left: 19px;
                font-size: 16px;
                font-weight: 400;
                color: #555454;
            }

            margin-bottom: 60px;
        }
    }

    .input-number-style {
        :deep(.el-input__wrapper, .el-input__wrapper:hover) {
            box-shadow: 0 0 0 1px var(--el-input-border-color, var(--el-border-color)) inset !important;
        }
    }

    :deep(.el-input__suffix-inner::after) {
        content: "单位/G";
        position: absolute;
        right: 30px;
    }

    .m-3::after {
        content: "单位/G";
        position: absolute;
        right: 36px;
    }

    :deep(.el-table__footer-wrapper) {
        display: none;
    }

    :deep(.m-2 .el-input__wrapper::before) {
        content: "计算力：";
        white-space: nowrap;
        color: var(--el-input-icon-color, var(--el-text-color-placeholder));
    }

    .m-3::before {
        content: "计算力：";
    }

    :deep(.el-select .el-input .el-select__caret) {
        transform: rotateZ(-90deg);
        transition: transform var(--el-transition-duration);
    }

    :deep(.el-select .el-input .el-select__caret.is-reverse) {
        transform: rotateZ(0);
    }

    :deep(.el-input__wrapper.is-focus),
    :deep(.el-select .el-input.is-focus .el-input__wrapper),
    :deep(.el-input__wrapper:hover) {
        box-shadow: 0 0 0 1px var(--el-input-border-color, var(--el-border-color)) inset !important;
    }

    :deep(.m-2 .el-input__wrapper) {
        width: 461px;
        height: 59px;
        border: 1px solid #4F4F4F;
    }

    h3 {
        height: 23px;
        font-size: 24px;
        font-weight: 500;
        color: #000000;
        line-height: 23px;
    }

    >p {
        width: 680px;
        height: 40px;
        font-size: 18px;
        font-weight: 400;
        color: #000000;
        line-height: 23px;
        margin-top: 22px;
        margin-bottom: 16px;
    }

    .shopbox {
        width: 100%;
        display: flex;
        justify-content: space-between;

        >div:last-child {
            width: 425px;
            height: auto;
            max-height: 500px;
            overflow: hidden;

            :deep(.cell) {
                text-align: center;
            }
        }
    }

    .tableFooter {
        width: 100%;
        height: 41px;
        text-align: center;
        line-height: 40px;
        border: 1px solid #000000;
        border-top: none;
    }
}</style>