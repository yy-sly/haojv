<template>
    <div class="shopCar">
        <mainHeader :righrText='"首页 > 购物车"' :header = '"购物车"'/>

    </div>
</template>
<script setup>
import mainHeader from "@/components/header/mainHeader.vue";
</script>
<style lang="scss" scoped>
.shopCar {
    width: 1366px;
    margin: 0 auto;
}
</style>