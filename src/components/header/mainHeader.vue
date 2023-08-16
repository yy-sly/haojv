<template>
    <div class="mainheader">
        <h3>{{header}}</h3>
        <span>{{righrText}}</span>
    </div>
</template>
<script setup>
const props = defineProps({
    header: {
        type: String,
        default: '算力中心'
    },
    righrText: {
        type: String,
        default: `首页 > 算力中心`
    }
});
</script>
<style lang="scss">
.mainheader {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 43px 67px;

    h3 {
        height: 23px;
        font-size: 24px;
        font-weight: bold;
        line-height: 23px;
    }

    span {
        height: 14px;
        font-size: 14px;
        font-weight: 400;
        color: #000000;
        line-height: 23px;
    }
}
</style>