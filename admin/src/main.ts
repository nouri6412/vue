
import "mdb-vue-ui-kit/css/mdb.rtl.min.css";

import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");
