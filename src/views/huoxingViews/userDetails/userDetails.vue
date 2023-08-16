<template>
    <div class="userDetails">
        <mainHeader  :righrText='"首页 > 个人信息"' :header = '"个人信息"'/>
    </div>
</template>
<script setup>
import mainHeader from "@/components/header/mainHeader.vue";
import { } from "@/common/api.js"

</script>
<style lang="scss" scoped>
.userDetails {
    width: 1366px;
    margin: 0 auto;
}
</style>