import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { Icon } from "@iconify/vue";

import "./assets/styles/index.css";

const app = createApp(App);

app.use(router);
app.component("Icon", Icon);
app.mount("#app");
