import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "element-plus/packages/theme-chalk/src/base.scss";
import "@/assets/stylesheets/stylesheets.scss";

createApp(App).use(router).mount("#app");
