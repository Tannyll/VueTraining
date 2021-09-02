import Vue from 'vue';
import { router } from '../../router';

const state = {
    products: []
}


const getters = {
    getProducts(state) { return state.products },
    getProduct(state) {

    }
}


const actions = {
    initApp({ commit }) {
        // vue resource işlemleri

    },
    saveProduct({ dispatch, commit, state }, product) {
        // vue resource işlemleri
        Vue.http.post("https://tannyll-default-rtdb.europe-west1.firebasedatabase.app/products.json", product).then((response) => {
            //**** ÜRÜN LİSTESİNİN GÜNCELLEME */
            product.key = response.body.name;
            commit("updateProductList", product);

            //** Alış satış Bakiye güncelleme */
            let tradeResult = {
                purchase: product.price,
                sale: 0,
                count: product.count
            };

            //TODO : dispatch ile action metodunu dışarı gönderiyoruz
            dispatch("setTradeResult", tradeResult);
            router.replace("/");


        });
    },
    saleProduct({ commit }, payload) {
        // vue resource işlemleri
    }
}


const mutations = {
    updateProductList(state, product) {
        state.products.push(product);
    }
}


export default {
    getters,
    mutations,
    actions,
    state
}