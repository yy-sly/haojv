<template>
    <header>
        <div class="header">
            <h3>BIT ELEPHANT</h3>
            <ul>
                <li v-for="(item, index) in store.state.headerList" :key="index">
                    {{
                        item.name
                    }}
                </li>
            </ul>
        </div>
    </header>
</template>
<script setup>
import { useStore } from 'vuex';
const store = useStore();
</script>
<style lang="scss" scoped>
header {
    width: 100%;
    height: 80px;
    position: absolute;
    top: 0;
    left: 0;
    border-bottom: 1px solid #000000;
}

.header {
    width: 1366px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    >h3 {
        height: 28px;
        font-size: 36px;
        font-weight: bold;
        color: #000000;
        line-height: 23px;
    }

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