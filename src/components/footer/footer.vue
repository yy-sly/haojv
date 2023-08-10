<template>
    <footer>
        <div class="footer">
            <div v-for="(item, index) in store.state.footerList" :key="index">
                {{ item.name }}
            </div>

        </div>
    </footer>
</template>
<script setup>
import { useStore } from 'vuex';
const store = useStore();
</script>
<style lang="scss" scoped>
footer {
    width: 100%;
    height: 647px;
    background: #1F2A2C;
}

.footer {
    width: 1366px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: aliceblue;
    >ul {
        display: flex;

        li {
            margin-right: 54px;
            font-size: 18px;
            font-weight: bold;
            color: #545151;
            line-height: 23px;
        }
    }
}
</style>