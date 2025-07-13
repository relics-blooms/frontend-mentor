import { createApp } from "vue";
import Main from "./main.vue";
import router from "./router";

createApp(Main).use(router).mount("#root");
