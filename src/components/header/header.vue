<template>
    <header>
        <div class="header">
            <h3>BIT ELEPHANT</h3>
            <ul>
                <li v-for="(item, index) in store.state.headerList" @click="bthClick(item.name)" :key="index">
                    {{
                        item.name
                    }}
                </li>
            </ul>
        </div>
    </header>
</template>
<script setup>
import login from "../login/index.js"
import { useStore } from 'vuex';
const store = useStore();
let clickArr = ['我的账户','购物车']
// login()
const bthClick = (name) => {
    console.log(name)
    for (let i = 0; i < clickArr.length; i++) {
        if(clickArr[i] === name){
            login()
        }        
    }
}
</script>
<style lang="scss" scoped>
header {
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 666;
    border-bottom: 1px solid #000000;
    background: #fff;
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
            cursor:pointer;
        }
    }
}
</style>