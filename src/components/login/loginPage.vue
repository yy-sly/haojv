<template>
    <div :class="['message-box', messageType ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut']"
        style="animation-duration: 400ms">
        <div :class="['content', messageType ? 'animate__animated animate__zoomInDown' : 'animate__animated animate__zoomOutDown']"
            style="animation-duration: 400ms">
            <i class="iconfont icon-guanbi close" @click="closeFun"></i>
            <div class="login">
                <div :class="['signIn', loginType ? 'animate__animated animate__flipInY' : 'animate__animated animate__flipOutY']"
                    v-if="loginType">
                    <h3 class="title">
                        登录
                    </h3>
                    <p>用户名或电子邮件地址</p>
                    <el-input v-model="phone" placeholder="请输入用户名或电子邮件地址" />
                    <p>密码</p>
                    <el-input v-model="password" placeholder="请输入密码" />
                    <p>
                        <el-checkbox v-model="checked1" label="" size="large" />
                        进行人机验证
                    </p>
                    <p>
                        <el-checkbox v-model="checked2" label="" size="large" />
                        记住我
                    </p>
                    <div class="loginFooter">
                        <el-button type="primary" round>登录</el-button>
                        <el-button type="primary" link @click="loginType = false">去注册</el-button>
                    </div>

                </div>
                <div v-else
                    :class="['signUp', loginType ? 'animate__animated animate__flipOutY' : 'animate__animated animate__flipInY']">
                    <h3 class="title">
                        注册
                    </h3>
                    <p>电子邮件地址</p>
                    <el-input v-model="phone" placeholder="请输入用户名或电子邮件地址" />
                    <p>设置新密码的链接将发送到您的电子邮件地址</p>
                    <!-- <el-input v-model="password" placeholder="请输入密码" /> -->
                    <div class="loginFooter">
                        <el-button type="primary" round>注册</el-button>
                        <el-button type="primary" link @click="loginType = true">去登录</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import 'element-plus/dist/index.css'
import { ElInput, ElButton, ElCheckbox } from "element-plus";
import { ref } from 'vue'
const phone = ref('')
const password = ref('')
const messageType = ref(true)
const loginType = ref(false)
const checked1 = ref(false)
const checked2 = ref(false)
const props = defineProps({
    notice: {
        type: String,
        default: "请注意安全哦",
    },
    header: {
        type: String,
        default: '登录'
    },
    name: {
        type: String,
        default: '111'
    },
    target: {
        default: '1111'
    }
});
const closeFun = () => {
    messageType.value = false
    setTimeout(() => {
        document.body.removeChild(props.target);
    }, 400);

}
</script>
<style lang="scss" scoped>
.message-box {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 10000;
    background: rgba(141, 141, 141, 0.363);
    backdrop-filter: saturate(150%) blur(7px);
    display: flex;
    align-items: center;
    justify-content: center;
}


.content {
    width: 480px;
    height: 560px;
    background: #fff;
    border-radius: 8px;
    padding: 37px 44px;
    position: relative;

    .close {
        position: absolute;
        right: 20px;
        top: 20px;
        width: 40px;
        height: 41px;
        border-radius: 50%;
        overflow: hidden;
        font-size: 40px;
        line-height: 40px;
        cursor:pointer;
    }

}


.title {
    width: 100%;
    text-align: left;
    font-size: 36px;
    font-weight: bold;
}

.login {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-weight: 600;

    >div {
        flex: 1;
    }

    p {
        font-weight: 600;
        margin-top: 10px;
        margin-bottom: 5px;
    }

    .loginFooter {
        margin-top: 20px;
        display: flex;
        button:first-child{
            flex: 1;
        }
    }

    .signUp,
    .signIn {
        width: 100%;
        height: 100%;
    }

    .signUp {}

    .signIn {}
}
</style>