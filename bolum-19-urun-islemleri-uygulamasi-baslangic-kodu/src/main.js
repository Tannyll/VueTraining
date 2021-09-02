import Vue from 'vue'
import App from './App.vue'
import { router } from './router';
import { store } from './store/store.js';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.filter("currency", (value) => {
    return parseFloat(value).toLocaleString(undefined, { minimumFractionDigits: 2 }) + " ₺"
});
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})