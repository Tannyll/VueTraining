import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.http.options.root = "https://gopdestek-c4e3e-default-rtdb.europe-west1.firebasedatabase.app";

Vue.http.interceptors.push((request, next) => {
    console.log("interceptors :" + request.method);
    // if(request.method == "POST"){
    //     request.method = "PUT"
    // }
    // next;

    next(response => {
        console.log(response);
        response.json = () => {
            return {
                userList: response.body
            }
        }
    });

});

new Vue({
    el: '#app',
    render: h => h(App)
})