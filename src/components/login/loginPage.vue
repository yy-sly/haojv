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
                    <el-input :parser='emailInput' v-model="input.email" placeholder="请输入用户名或电子邮件地址" />
                    <p>密码</p>
                    <el-input v-model="password" placeholder="请输入密码" />
                    <p>
                        <el-checkbox v-model="checked2" label="" size="large" />
                        记住我
                    </p>
                    <div class="loginFooter">
                        <el-button type="primary" round>登录</el-button>
                        <el-button type="primary" link @click="loginType = false">去注册</el-button>
                    </div>

                </div>
                <!--aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa-->
                <div v-else-if="!loginType"
                    :class="['signUp', loginType ? 'animate__animated animate__flipOutY' : 'animate__animated animate__flipInY']">
                    <h3 class="title">
                        注册
                    </h3>
                    <p>用户名</p>
                    <div class="inputBox">
                        <el-input v-model="input.shortName" type="shortName"
                            @blur="(e) => { shortNameInput(e.target.value) }" @input="shortNameInput"
                            placeholder="请输入用户名" />
                    </div>
                    <p class="error">{{ error.errorshortName }}</p>
                    <p>登录名</p>
                    <div class="inputBox">
                        <el-input v-model="input.phone" type="shortName" @blur="(e) => { phoneInput(e.target.value) }"
                            @input="phoneInput" placeholder="请输入用户名 尽量使用手机号" />
                    </div>
                    <p class="error">{{ error.errorPhone }}</p>
                    <p>密码</p>
                    <div class="inputBox">
                        <el-input v-model="input.password" type="password" @blur="(e) => { passwordInput(e.target.value) }"
                            @input="passwordInput" placeholder="请输入密码" />
                    </div>
                    <p class="error">{{ error.errorPassword }}</p>
                    <p>确认密码</p>
                    <div class="inputBox">
                        <el-input v-model="input.loginName" type="loginName"
                            @blur="(e) => { loginNameInput(e.target.value) }" @input="loginNameInput"
                            placeholder="请在次输入密码" />
                    </div>
                    <p class="error">{{ error.errorloginName }}</p>

                    <!-- <p>验证码</p>
                    <div class="inputBox">
                        <el-input style="width: 120px;" v-model="input.code" type="code"
                            @blur="(e) => { codeInput(e.target.value) }" @input="codeInput" placeholder="请输入验证码" />
                    </div> -->
                    <!-- <p class="error">{{ error.errorCode }}</p> -->
                    <!-- <p>设置新密码的链接将发送到您的电子邮件地址</p> -->
                    <!-- <el-input v-model="password" placeholder="请输入密码" /> -->
                    <div class="loginFooter">
                        <el-button type="primary" :loading='loadingType.registerType'
                            :disabled="errorType.errorshortNameType || errorType.errorPhoneType || errorType.errorPasswordType || errorType.errorloginNameType"
                            round @click="register">注册</el-button>
                        <el-button type="primary" link @click="loginType = true">去登录</el-button>
                    </div>
                </div>
                <div v-else
                    :class="['signUp', loginType ? 'animate__animated animate__flipOutY' : 'animate__animated animate__flipInY']">
                    <h3 class="title">
                        绑定邮箱
                    </h3>
                    <p>电子邮件</p>
                    <div class="inputBox">
                        <el-input v-model="input.email" type="email" @blur="(e) => { emailInput(e.target.value) }"
                            @input="emailInput" placeholder="请输入用户名或电子邮件地址" />
                        <el-button type="primary" :disabled="errorType.errorEmailType" style="margin-left: 15px;"
                            @click="submitForm('email')" :loading='loadingType.EmailLoadingType' round>
                            发送验证码
                        </el-button>
                    </div>
                    <p class="error">{{ error.errorEmail }}</p>

                    <p>验证码</p>
                    <div class="inputBox">
                        <el-input style="width: 120px;" v-model="input.code" type="code"
                            @blur="(e) => { codeInput(e.target.value) }" @input="codeInput" placeholder="请输入验证码" />
                    </div>
                    <p class="error">{{ error.errorCode }}</p>
                    <!-- <p>设置新密码的链接将发送到您的电子邮件地址</p> -->
                    <!-- <el-input v-model="password" placeholder="请输入密码" /> -->
                    <div class="loginFooter">
                        <el-button type="primary" :loading='loadingType.loginLoadingType'
                            :disabled="errorType.errorEmailType || errorType.errorCodeType" round>注册</el-button>
                        <el-button type="primary" link @click="loginType = true">去登录</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import 'element-plus/dist/index.css'
import { submitEmailBandingMember } from '../../common/api'
import { ElInput, ElButton, ElCheckbox, ElMessage } from "element-plus";
import { ref, reactive } from 'vue'
import { memberPhoneRegister } from '@/common/api'
const input = reactive({
    email: '',//电子邮箱
    code: '',//验证码
    shortName: '',//用户名
    password: '',//密码
    loginName: '',//确认密码
    phone: ''//登录名
})
const error = reactive({
    errorEmail: '',
    errorCode: '',
    errorshortName: '',
    errorPassword: '',
    errorloginName: '',
    errorPhone: ''
})
const errorType = reactive({
    errorEmailType: true,
    errorCodeType: true,
    errorshortNameType: true,
    errorPasswordType: true,
    errorloginNameType: true,
    errorPhoneType: true
})
const loadingType = reactive({
    EmailLoadingType: false,
    loginLoadingType: false,
    registerType: false

})
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
    messageType.value = true
    setTimeout(() => {
        document.body.removeChild(props.target);
    }, 400);
}
//输入邮箱
const emailInput = (value) => {
    let Regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let data = checkInput(value, Regex, '电子邮箱')
    errorType.errorEmailType = data.boolean
    error.errorEmail = data.text
}
//输入验证码
const codeInput = (value) => {
    let Regex = /^[A-Za-z0-9]{4}$/
    let data = checkInput(value, Regex, '验证码')
    errorType.errorCodeType = data.boolean
    error.errorCode = data.text
}
//输入用户名
const shortNameInput = (value) => {
    let Regex = /^[\w-]{4,16}$/
    let data = checkInput(value, Regex, '用户名')
    errorType.errorshortNameType = data.boolean
    error.errorshortName = data.text
}
//输入登录名
const phoneInput = (value) => {
    let Regex = /^[A-Za-z0-9]+$/
    let data = checkInput(value, Regex, '登录名')
    errorType.errorPhoneType = data.boolean
    if (data.text) {
        error.errorPhone = data.text + '账号只能由数字大小写字母组成'
    } else {
        error.errorPhone = data.text
    }
}
//输入密码
const passwordInput = (value) => {
    let Regex = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
    let data = checkInput(value, Regex, '密码')
    errorType.errorPasswordType = data.boolean
    if (data.text) {
        error.errorPassword = data.text + ' 密码必须大于6位且包含数字大小写字母特殊字符'
    } else {
        error.errorPassword = data.text
    }

}
//请在次输入密码
const loginNameInput = (value) => {
    console.log(value, '========', input.password)
    if (value === input.password) {
        errorType.errorloginNameType = false
        error.errorloginName = ''
    } else if (!value) {
        errorType.errorloginNameType = true
        error.errorloginName = '密码不能为空'
    } else {
        errorType.errorloginNameType = true
        error.errorloginName = '密码不一致'
    }
}
const checkInput = (value, Regex, str) => {
    let text = ''
    let boolean = false
    if (!value) {
        text = `${str}不能为空`
        boolean = true
        return {
            text, boolean
        }
    }
    if (Regex.test(value)) {
        boolean = false
    } else {
        text = `${str}不正确`
        boolean = true
    }
    return {
        text, boolean
    }
}
//注册
const register = () => {
    loadingType.registerType = true
    memberPhoneRegister({ deviceID: '0268fffba23f48bf877f445e0536e45a', verifyCode: '111111', ...input }, res => {
        loadingType.registerType = false
        if (res.data.header.code == 0) {
            ElMessage({
                message: '注册完成快去登陆吧',
                type: 'success',
            })
        } else {
            ElMessage(res.data.header.msg)
        }
    })
}
const submitForm = (type) => {
    if (type === 'email') {
        submitEmailBandingMember({
            email: input.email
        }, res => {
            console.log('===================', res)
        })
    }
}
</script>
<style lang="scss" scoped>
.message-box {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 30;
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

    .error {
        font-weight: normal;
        margin-top: 5px;
        margin-bottom: 5px;
        font-size: 14px;
        color: #e20000;
        height: 14px;
        line-height: 14px;
    }

    .loginFooter {
        margin-top: 20px;
        display: flex;

        button:first-child {
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

.inputBox {
    display: flex;
}
</style>