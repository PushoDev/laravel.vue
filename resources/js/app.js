import "./bootstrap";

import { createApp } from "vue";

import app from "./vue/App.vue";

import router from "./vue/router";

createApp(app).use(router).mount("#app");
