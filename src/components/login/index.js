import { render, createVNode } from "vue";

import loginPage from "./loginPage.vue";

export default function () {
    const mountNode = document.createElement("div");
    const hideNotice = () => {
        // document.body.removeChild(mountNode);
    };
    const app = createVNode(loginPage, { name: 'notice' });
    render(app, mountNode);
    document.body.appendChild(mountNode);
    hideNotice();
}