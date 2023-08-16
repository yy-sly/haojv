import { render, createVNode } from "vue";

import loginPage from "./loginPage.vue";

export default function (url,router) {
    const mountNode = document.createElement("div");
    const hideNotice = () => {
        // document.body.removeChild(mountNode);
    };
    const app = createVNode(loginPage, {target:mountNode,name: 'notice',url:url,router:router});
    render(app, mountNode);
    document.body.appendChild(mountNode);
    hideNotice();
}