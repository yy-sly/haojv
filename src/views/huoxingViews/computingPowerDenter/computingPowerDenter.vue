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
                <div>
                    123123
                </div>
                <div>
                    <el-table :data="tableData" border style="width: 100%">
                        <el-table-column text-align="center" prop="" width="57" />
                        <el-table-column text-align="center" prop="date" label="计算力" width/>
                        <el-table-column text-align="center" prop="name" label="租期"/>
                        <el-table-column text-align="center" prop="address" label="金额" />
                    </el-table>
                </div>
            </div>
            <p>{{ data.goods.realPrice }}//销售价格</p>
            <p>{{ data.goods.salesUnit }}//销售单位</p>
            <p>{{ data.goods.periodType }}//周期类型</p>
            <p>{{ data.goods.periodNumber }}周期个数</p>
        </div>
    </div>
</template>
<script setup>
import mainHeader from "@/components/header/mainHeader.vue";
import { getGoodsShopList, getGoodsShopDetail } from "@/common/api.js"
import { reactive } from "vue";
const data = reactive({
    goods: {}
})
const tableData = [
    {
        date: '100',
        name: '6',
        address: '$1325645',
    }
]
getGoodsShopList({}, res => {
    if (res.data.header.code == 0) {
        getGoodsShopDetail({ goodsShopID: res.data.body.data.rows[0].goodsShopID }, res => {
            if (res.data.header.code == 0) {
                data.goods = res.data.body.data
            } else {

            }
        })
    }

})
</script>
<style lang="scss" scoped>
.goodsBox,
.computingPowerDenter {
    width: 1366px;
    margin: 0 auto;
}

.goodsBox {
    padding: 0 145px;
    margin-top: 60px;

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

        div:first-child {
            border: 1px solid #000000;
        }

        div:last-child {
            border-bottom: 1px solid #000000;
        }
    }
}
</style>