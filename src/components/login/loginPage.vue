<template>
    <div :class="['message-box', messageType ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut']"
        style="animation-duration: 400ms">
        <div :class="['content', messageType ? 'animate__animated animate__zoomInDown' : 'animate__animated animate__zoomOutDown']"
            style="animation-duration: 400ms">
            <i class="iconfont icon-guanbi close" @click="closeFun"></i>
            <div class="login">
                <div v-if="loginType == 'email'"
                    :class="['signUp', loginType == 'email' ? 'animate__animated animate__flipInY' : 'animate__animated animate__flipOutY']">
                    <h3 class="title">
                        绑定邮箱
                    </h3>
                    <p>电子邮件</p>
                    <div class="inputBox">
                        <el-input v-model="input.email" type="email" @blur="(e) => { emailInput(e.target.value) }"
                            @input="emailInput" placeholder="请输入用户名或电子邮件地址" />
                        <el-button size="large" type="primary" :disabled="errorType.errorEmailType"
                            style="margin-left: 15px;" @click="submitForm('email')" :loading='loadingType.EmailLoadingType'
                            round>
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
                        <el-button size="large" type="primary" @click="emailBinding" :loading='loadingType.loginLoadingType'
                            :disabled="errorType.errorEmailType || errorType.errorCodeType" round>绑定</el-button>
                    </div>
                </div>
                <div :class="['signIn', loginType ? 'animate__animated animate__flipInY' : 'animate__animated animate__flipOutY']"
                    v-else-if="loginType">
                    <h3 class="title">
                        登录
                    </h3>
                    <p>用户名</p>
                    <!-- <el-input :parser='emailInput' v-model="input.email" placeholder="请输入用户名或电子邮件地址" /> -->

                    <div class="inputBox">
                        <el-input v-model="input.phone" type="phone" @blur="(e) => { phoneInput(e.target.value) }"
                            @input="phoneInput" placeholder="请输入用户名" />
                        <!-- <el-button type="primary" :disabled="errorType.errorEmailType" style="margin-left: 15px;"
                            @click="submitForm('email')" :loading='loadingType.EmailLoadingType' round>
                            发送验证码
                        </el-button> -->
                    </div>
                    <p class="error">{{ error.errorEmail }}</p>
                    <p>密码</p>
                    <div class="inputBox">
                        <el-input v-model="input.password" type="password" @blur="(e) => { passwordInput(e.target.value) }"
                            @input="passwordInput" placeholder="请输入密码" />
                    </div>
                    <p class="error">{{ error.errorPassword }}</p>

                    <p>
                        <el-checkbox v-model="checked2" label="" size="large" />
                        记住我
                    </p>
                    <div class="loginFooter">
                        <el-button size="large" type="primary" :loading="login.loginLoadingType" @click="login"
                            :disabled="errorType.errorPhoneType || errorType.errorPasswordType" round>登录</el-button>
                        <el-button size="large" type="primary" link @click="loginType = false">去注册</el-button>
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
                        <el-input v-model="input.confirmPassword" type="password"
                            @blur="(e) => { confirmPasswordInput(e.target.value) }" @input="confirmPasswordInput"
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
                        <el-button size="large" type="primary" :loading='loadingType.loginLoadingType'
                            :disabled="errorType.errorshortNameType || errorType.errorPhoneType || errorType.errorPasswordType || errorType.errorloginNameType"
                            round @click="register">注册</el-button>
                        <el-button size="large" type="primary" link @click="loginType = true">去登录</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import 'element-plus/dist/index.css'
import {
    submitEmailBandingMember,
    memberPhoneRegister,
    memberLogin,
    getOneMemberDetail,
    applyEmailBindingMember,
} from '@/common/api'
import { useStore } from 'vuex';
import Common from '@/common/common.js'
import { ElInput, ElButton, ElCheckbox, ElMessage } from "element-plus";
import { ref, reactive } from 'vue'
const store = useStore();
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
    },
    url: {
        default: ''
    },
    router: {
        type: Function,
    }
});
const input = reactive({
    email: '',//电子邮箱
    code: '',//验证码
    shortName: '',//用户名
    password: '',//密码
    loginName: '',//登录名
    confirmPassword: '',//确认密码
    phone: ''
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
const messageType = ref(true)
const loginType = ref(true)
const checked1 = ref(false)
const checked2 = ref(false)

const pageCut = () => {
    props.router.push(props.url)
}
//关闭
const closeFun = () => {
    messageType.value = false
    setTimeout(() => {
        document.body.removeChild(props.target);
    }, 400);
}
//输入邮箱
const emailInput = (value) => {
    if (value.length > 4) {
        errorType.errorEmailType = false
        error.errorEmail = ''
    } else if (!value) {
        errorType.errorEmailType = true
        error.errorEmail = '用户名或电子邮件不能为空'
    } else {
        errorType.errorEmailType = true
        error.errorEmail = '用户名或电子邮件不正确'
    }
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
    input.loginName = value
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
const confirmPasswordInput = (value) => {
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
    window.localStorage.clear()
    loadingType.registerType = true
    memberPhoneRegister({
        companyID: Common.companyID,
        deviceID: Common.deviceID, verifyCode: '111111', ...input
    }, res => {
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
//登录
const login = () => {
    window.localStorage.clear()
    loadingType.loginLoadingType = true
    memberLogin({
        companyID: Common.companyID,
        loginName: input.phone,
        password: input.password,
        deviceID: Common.deviceID,
    }, res => {
        loadingType.loginLoadingType = false
        if (res.data.header.code === 0) {
            ElMessage({
                message: '登录成功',
                type: 'success',
            })
            window.localStorage.setItem("sessionID", res.data.body.sessionID);
            window.localStorage.setItem("memberID", res.data.body.memberID);
            getOneMemberDetail({}, res => {
                if (res.data.header.code != 0) {
                    ElMessage({
                        message: res.data.header.msg,
                        type: 'error',
                    })
                    return
                }
                if (!res.data.body.email) {
                    loginType.value = 'email'
                } else {
                    closeFun()
                    pageCut()
                }
            })
        } else {
            ElMessage({
                message: res.data.header.msg,
                type: 'error',
            })
        }
    })
}
//绑定邮箱
const emailBinding = () => {
    applyEmailBindingMember({
        email: input.email,
        authCode: input.code,
    }, res => {
        if (res.data.header.code == 0) {
            ElMessage({
                message: '邮箱绑定成功',
                type: 'success',
            })
            closeFun()
            pageCut()
        } else {
            ElMessage({
                message: res.data.header.msg,
                type: 'error',
            })
        }
    })
}
const submitForm = (type) => {
    if (type === 'email') {
        submitEmailBandingMember({
            email: input.email
        }, res => {
            console.log('', res)
            if (res.data.header.code == -1) {
                ElMessage({
                    message: '验证码发送失败',
                    type: 'error',
                })
            } else if (res.data.header.code == 0) {
                ElMessage({
                    message: '验证码已发送',
                    type: 'success',
                })
            }
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
    z-index: 777;
    background: rgba(141, 141, 141, 0.363);
    backdrop-filter: saturate(150%) blur(7px);
    display: flex;
    align-items: center;
    justify-content: center;
}


.content {
    width: 650px;
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