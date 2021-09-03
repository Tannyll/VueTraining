import Vue from 'vue';
import { router } from '../../router';

const state = {
    products: []
}


const getters = {
    getProducts(state) { return state.products },
    getProduct(state) {
        return key => state.products.filter(element => {
            return element.key == key;
        });
    }
}


const actions = {
    initApp({ commit }) {
        // vue resource işlemleri asenkron işlem dış dünya erişimi
        Vue.http.get("https://tannyll-default-rtdb.europe-west1.firebasedatabase.app/products.json").then((response) => {
            console.log(response);
            let data = response.body;
            for (let key in data) {
                data[key].key = key;
                commit("updateProductList", data[key]);
            }

        });

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
    saleProduct({ dispatch, state, commit }, payload) {
        // vue resource işlemleri
        // call by referance
        // pass by value...
        let product = state.products.filter(element => {
            return element.key == payload.key;
        });

        if (product) {
            let totalCount = product[0].count - payload.count;

            Vue.http.patch("https://tannyll-default-rtdb.europe-west1.firebasedatabase.app/products/" + payload.key + ".json", { count: totalCount }).then((response) => {
                console.log(response);

                product[0].count = totalCount;
                let tradeResult = {
                    purchase: 0,
                    sale: product[0].price,
                    count: payload.count
                };

                //TODO : dispatch ile action metodunu dışarı gönderiyoruz
                dispatch("setTradeResult", tradeResult);
                router.replace("/");

            });
        }
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