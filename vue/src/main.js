import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store.js";

import axios from "axios";
import VueAxios from "vue-axios";
window.axios = axios;

// IVIEW-UI
import ViewUIPlus from "view-ui-plus";
import "view-ui-plus/dist/styles/viewuiplus.css";
// IVIEW-UI ENDS

// BOOTSTRAP IMPORTS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
// BOOTSTRAP IMPORTS ENDS

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueAxios, axios);
app.use(ViewUIPlus)
app.mount("#app");
