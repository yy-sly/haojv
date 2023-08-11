<template>
    <div class="appbox">
        <div class="swiper">
            <el-carousel height="680px" autoplay>
                <el-carousel-item v-for="(item, index) in store.state.homeSwiper" :key="index">
                    <img :src="item.picturePath" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>

    </div>
</template>
<script setup>
import login from "@/components/login/index.js"
import { useStore } from 'vuex';
const store = useStore();
</script>
<style lang="scss" scoped>
.appbox {
    width: 100%;
    height: 100%;
}
.swiper{
    width: 1336px;
    margin: 0 auto;
    img{
        width: 100%;
        height: 100%;
    }
}
:deep(.el-carousel__button){
    width: 10px;
    height: 10px;
    border-radius: 50%;
}
</style>