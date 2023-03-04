import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "./assets/toast.css";

import toast from "./plugins/toast";

const app = createApp(App);

app.use(createPinia()); // not using the store in this home-made Toast plugin
app.use(router);
app.use(toast); // register our home-made toast plugin

app.mount("#app");
