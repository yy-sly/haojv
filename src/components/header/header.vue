<template>
    <header>
        <div class="header">
            <h3>BIT ELEPHANT</h3>
            <ul>
                <li v-for="(item, index) in store.state.headerList" @click="bthClick(item)" :key="index">
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
import { useRouter } from "vue-router"
import { inject } from 'vue'
let login = inject('login')
const store = useStore();
const router = useRouter()
let clickArr = ['我的账户', '购物车']
let sessionID = window.localStorage.getItem("sessionID")
const bthClick = (data) => {
    if (!sessionID) {
        for (let i = 0; i < clickArr.length; i++) {
            if (clickArr[i] === data.name) {
                login(data.functionURL, router)
                return
            }
        }
    }

    router.push(data.functionURL)
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
        padding-left: 60px;
    }

    >ul {
        display: flex;
        margin-right: 67px;

        li {
            margin-left: 54px;
            font-size: 18px;
            font-weight: bold;
            color: #545151;
            line-height: 23px;
            cursor: pointer;
        }
    }
}
</style>