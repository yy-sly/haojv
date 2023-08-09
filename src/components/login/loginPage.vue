<template>
    <div class="message-box">{{ notice }}</div>
</template>
<script setup>
// eslint-disable-next-line no-undef
const props = defineProps({
    notice: {
        type: String,
        default: "请注意安全哦",
    },

});
console.log(process.env)
console.log(props);
</script>
<style scoped>
.message-box {
    position: fixed;
    left: 50%;
    top: 20%;
    width: 60%;
    font-size: 14px;
    text-align: center;
    background: white;
    padding: 10px;
    border-radius: 6px;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
    transform: translateX(-50%);
}
</style>