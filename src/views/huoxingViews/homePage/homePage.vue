<template>
  <div class="appbox">
    <div class="swiper">
      <el-carousel height="680px" autoplay>
        <el-carousel-item
          v-for="(item, index) in store.state.homeSwiper"
          :key="index"
        >
          <img :src="item.picturePath" alt="" />
          <div class="echarts" v-if="index === 0">
          <!-- <div class="echarts"> -->
            <div class="echartsHeader">
              <h3>今日收益<span>全网</span></h3>
              <ul class="echartsTable">
                <li>本月</li>
                <li>本周</li>
                <li>今天</li>
              </ul>
            </div>
            <ul class="echartsMessage">
              <li>
                <span>84653</span>
                <span>收益</span>
              </li>
              <li>
                <span>6541</span>
                <span>收益</span>
              </li>
              <li>
                <span>1324</span>
                <span>收益</span>
              </li>
            </ul>
            <multipleXAxes />
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script setup>
import login from "@/components/login/index.js";
import multipleXAxes from "@/components/echarts/multipleXAxes.vue";
import { useStore } from "vuex";
const store = useStore();
</script>
<style lang="scss" scoped>
.appbox {
  width: 100%;
  height: 100%;
}
.swiper {
  width: 1336px;
  margin: 0 auto;
  img {
    width: 100%;
    height: 100%;
  }
  .echarts {
    position: absolute;
    right: 24px;
    top: 31px;
    width: 486px;
    height: 563px;
    background: #5d5d5d;
    .echartsHeader {
      width: 100%;
      height: 99px;
      background: #888888;
      position: relative;
      h3 {
        width: 100%;
        font-size: 30px;
        font-weight: bold;
        color: #000000;
        line-height: 23px;
        padding-top: 23px;
        text-align: center;
      }
    }
    .echartsTable,
    .echartsMessage {
      width: 100%;
      padding-top: 26px;
      display: flex;
      justify-content: space-around;
      li {
        font-size: 18px;
        font-weight: bold;
        color: #1e1e1e;
        line-height: 23px;
      }
    }
    .echartsMessage li {
      width: 121px;
      height: 121px;
      background: #afaeae;
      border: 3px solid #4e4e4e;
      opacity: 0.3;
      border-radius: 50%;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      span{
        color: #1E1E1E;
      }
    }
  }
}
:deep(.el-carousel__button) {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
</style>