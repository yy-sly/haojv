<template>
    <div class="details">
        <div>
            <p>名字</p>
            <input :value="data.userinfo.Name" />
        </div>
        <div>
            <p>姓氏</p>
            <input :value="data.userinfo.familyName" />
        </div>
        <div>
            <p>显示名称</p>
            <input :value="data.userinfo.loginName" />
        </div>
        <div>
            <p>邮箱地址</p>
            <input :value="data.userinfo.email" />
        </div>
        <h3>
            修改密码
        </h3>
        <div>
            <p>当前密码 （留空则不修改）</p>
            <el-input v-model="data.oldPassword" show-password type="password" placeholder="请输入旧密码" />
        </div>
        <div>
            <p>新密码 （留空则不修改）</p>
            <el-input v-model="data.password" show-password type="password" placeholder="请输入密码" />
        </div>
        <div>
            <p>确认新密码</p>
            <el-input v-model="data.confirmPassword" show-password @input="confirmPasswordInput" type="password" placeholder="请在次输入密码" />
        </div>
        <div>
            <el-button size="large" type="primary" round>保持修改</el-button>
        </div>
    </div>
</template>
<script setup>
import { useStore } from 'vuex';
import { reactive } from 'vue';
const store = useStore()
const data = reactive({
    userinfo: store.state.userinfo,
    oldPassword: '',//旧密码
    password: '',//密码
    confirmPassword: '',//确认密码
})
const confirmPasswordInput = (data) => {
    console.log(data)
}
</script>
<style lang="scss" scoped>
.details {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    div {
        width: 100%;
        font-size: 14px;
        font-weight: 400;
        color: #000000;

        >input,:deep(.el-input__wrapper) {
            width: 100%;
            padding: 11px;
            border: 1px solid #000000;
            margin: 9px 0 28px 0;
            border-radius: 0;
            box-shadow: 0 0 0 0;
        }
        :deep(.el-input__wrapper.is-focus),:deep(.el-input__wrapper:hover){
            box-shadow: 0 0 0 0;
        }
        :deep(.el-button) {
            height: 50px;
            border-radius: 25px;
            padding-right: 25px;
            padding-left: 25px;
        }
    }

    h3 {
        width: 100%;
        height: 24px;
        font-size: 24px;
        font-weight: bold;
        color: #000000;
        margin-top: 31px;
        margin-bottom: 34px;
    }

    >div:nth-child(1),
    >div:nth-child(2) {
        width: 370px;
    }
}
</style>