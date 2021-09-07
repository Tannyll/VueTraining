import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import { routes } from "./routes";
import axios from 'axios';

// TODO : AXIOS https://github.com/axios/axios

axios.defaults.baseURL = "https://tannyll-default-rtdb.europe-west1.firebasedatabase.app";

axios.defaults.headers.common["Authorization"] = "serdar_auth_key";
axios.defaults.headers.get["Accepts"] = "application/json";


Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})