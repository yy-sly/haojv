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
                    <el-input v-model="email" placeholder="请输入用户名或电子邮件地址" />
                    <p>密码</p>
                    <el-input v-model="password" placeholder="请输入密码" />
                    <!-- <p>
                        <el-checkbox v-model="checked1" label="" size="large" />
                        进行人机验证
                    </p> -->
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
                <el-form>
                        <el-form-item label="电子邮件地址" prop="email">
                            <el-input v-model="ruleForm.email" clearable placeholder="请输入用户名或电子邮件地址" />
                            <el-button type="primary" style="margin-left: 15px;" @click="submitForm(1)" round>发送验证码</el-button>
                        </el-form-item>
                        <el-form-item>
                            <div class="loginFooter">
                                <el-button type="primary" @click="submitForm()" round>注册</el-button>
                                <el-button type="primary" link @click="loginType = true">去登录</el-button>
                            </div>
                        </el-form-item>
                    </el-form>
                    <!-- <p>电子邮件地址</p>
                    <el-input v-model="email" placeholder="请输入用户名或电子邮件地址" /> -->
                    <p>设置新密码的链接将发送到您的电子邮件地址</p>
                    <!-- <el-input v-model="password" placeholder="请输入密码" /> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import 'element-plus/dist/index.css'
import { ElInput, ElButton, ElCheckbox, ElForm, ElFormItem } from "element-plus";
import { ref, reactive } from 'vue'
const email = ref('')
const password = ref('')
const messageType = ref(true)
const loginType = ref(false)
// const checked1 = ref(false)
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
const checkAge = (rule, value, callback) => {
    if (!value) {
        return callback(new Error('电子邮箱不能为空'))
    }
    let Regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (Regex.test(value)) {
        callback()
    } else {
        callback(new Error('请输入正确的电子邮箱'))
    }
}

const ruleForm = reactive({
    email: '',
})

const rules = reactive({
    email: [{ validator: checkAge, trigger: 'blur' }],
})

const submitForm = (formEl) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!')
            return false
        }
    })
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
        cursor: pointer;
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

    .signUp,
    .signIn {
        width: 100%;
        height: 100%;
    }

    .signUp {}

    .signIn {}
}

.el-form-item {
    display: flow;
}

:deep(.el-form-item__label) {
    justify-content: left;
}

:deep(.loginFooter) {
    margin-top: 20px;
    display: flex;
    width: 100%;

    button:first-child {
        flex: 1;
    }

}

:deep(.el-input__validateIcon) {
    display: none;
}
:deep(.el-form-item__content){
    flex-wrap: nowrap;
}
</style>