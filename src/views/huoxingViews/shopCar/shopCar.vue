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
                @selection-change="handleSelectionChange">
                <!-- <el-table-column text-align="center" prop="" width="57">
                    <template #default="scope">
                        <el-button size="small" @click="delGoods(scope.row.cartGoodsID, scope.$index)"
                            :disabled="!scope.row.cartGoodsID" type="info" :icon="Delete" circle />
                    </template>
                </el-table-column> -->
                <el-table-column text-align="center" type="selection" label="全选" width="80" />


                <el-table-column text-align="center" prop="showName" label="产品" width />
                <el-table-column text-align="center" prop="showName" label="型号" width />


                <el-table-column text-align="center" prop="showName" label="规格/G" width />
                <el-table-column text-align="center" prop="periodNumber" label="租期/月" />
                <el-table-column text-align="center" prop="realPrice" label="小计" />
                <el-table-column text-align="center" prop="" label="删除" width="57">
                    <template #default="scope">
                        <el-button size="small" @click="delGoods(scope.row.cartGoodsID, scope.$index)" type="info"
                            :icon="Delete" circle />
                    </template>
                </el-table-column>
            </el-table>
            <div class="tableFooter">
                总价：{{ data.num }}
            </div>
        </div>
    </div>
</template>
<script setup>
import mainHeader from "@/components/header/mainHeader.vue";
import { getCartGoodsList } from "@/common/api.js"
import { ElMessage } from "element-plus";
import { Delete } from '@element-plus/icons-vue'
import { reactive } from "vue"
const data = reactive({
    percentage: 33,
    num: 0,
    tableData: [{
        showName: '222',
        periodNumber: '222',
        realPrice: '111',
    }],
    multipleSelection: []
})
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

const handleSelectionChange = (val) => {
    data.multipleSelection = val
}
getCartGoodsList({},res=>{
    console.log(res)
})
</script>
<style lang="scss" scoped>
.shopCar {
    width: 1366px;
    margin: 0 auto;
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
        height: 41px;
        text-align: center;
        line-height: 40px;
        border: 1px solid #000000;
        border-top: none;
    }

    :deep(.el-table__footer-wrapper) {
        display: none;
    }

    :deep(.el-checkbox__inner) {
        border-radius: 50%;
    }
}
</style>