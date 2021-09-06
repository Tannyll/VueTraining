import Vue from 'vue'
import App from './App.vue'
import Tags from 'vuejs-tagx-component'

Vue.component("vtag", Tags);

new Vue({
    el: '#app',
    render: h => h(App)
})
