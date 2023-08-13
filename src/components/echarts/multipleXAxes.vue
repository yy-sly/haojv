<template>
  <div class="echarts-box">
    <div ref="multipleXAxes" :style="{ width: '470px', height: '292px' }"></div>
  </div>
</template>
<script setup>
import * as echarts from "echarts";
import { onMounted, onUnmounted, ref } from "vue";
let echart = echarts;
const multipleXAxes = ref(null)
onMounted(() => {
  initChart();
});

onUnmounted(() => {
  echart.dispose;
});
// 基础配置一下Echarts
function initChart() {
  let chart = echart.init(multipleXAxes.value);
  // 把配置和数据放这里
  chart.setOption({
    tooltip: {
      trigger: "none",
      axisPointer: {
        type: "cross",
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#818181",
        },
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["1", "2", "3", "4", "5", "6", "7"],
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        textStyle: {
          color: "#ffffff",
        },
      },
    },
    yAxis: {
      type: "value",
      show: false,
    },
    series: [
      {
        symbol: "circle", //隐藏点
        symbolSize: "4",
        itemStyle: {
          color: "#676767",
        },
        lineStyle: {
          width: 2,
          color: "#ffffff",
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(250, 250, 250, .3)" },
              { offset: 1, color: "rgba(250, 250, 250, 0)" },
            ]),
          },
        },
        data: [320, 216, 318, 428, 234, 361, 421],
        type: "line",
        smooth: true,
      },
      {
        symbol: "circle", //隐藏点
        symbolSize: "4",
        itemStyle: {
          color: "#a1a1a1",
        },
        lineStyle: {
          width: 2,
          color: "#ffffff",
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(250, 250, 250, .3)" },
              { offset: 1, color: "rgba(250, 250, 250, 0)" },
            ]),
          },
        },
        data: [124, 358, 345, 245, 532, 245, 354],
        type: "line",
        smooth: true,
      },
      {
        symbol: "circle", //隐藏点
        symbolSize: "4",
        itemStyle: {
          color: "#393939",
        },
        lineStyle: {
          width: 2,
          color: "#ffffff",
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(250, 250, 250, .3)" },
              { offset: 1, color: "rgba(250, 250, 250, 0)" },
            ]),
          },
        },
        data: [253, 425, 352, 125, 352, 145, 253],
        type: "line",
        smooth: true,
      },
    ],
  });
  window.onresize = function () {
    //自适应大小
    chart.resize();
  };
}
</script>
<style lang="scss" scoped>
.echarts-box {
  width: 100%;
  height: 100%;
}
</style>