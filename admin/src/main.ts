
import "mdb-vue-ui-kit/css/mdb.rtl.min.css";

import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";


const app = createApp(App)

app.use(router).mount("#app")
//createApp(App).use(router).mount("#app");
