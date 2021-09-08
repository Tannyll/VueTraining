import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);
const firebaseConfig = {

    apiKey: "AIzaSyDwu6F0srWIGyPCWI8nz4Wnld7CEhSWJ8A",

    authDomain: "tannyll.firebaseapp.com",

    databaseURL: "https://tannyll-default-rtdb.europe-west1.firebasedatabase.app",

    projectId: "tannyll",

    storageBucket: "tannyll.appspot.com",

    messagingSenderId: "173125466891",

    appId: "1:173125466891:web:c86041dd7075e00b92000e"

};

const store = new Vuex.Store({
    state: {
        token: "",
    },
    mutations: {
        setToken(state, token) {
            state.token = token
        },
        clearToken(state) {
            state.token = "";
        }
    },
    getters: {
        isAuthenticated(state) {
            return state.token !== ""
        }
    },
    actions: {
        login({ commit, dispatch, state }, authData) {
            let authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
            if (authData.isUser) {
                authLink =
                    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
            }
            axios
                .post(authLink + "AIzaSyDwu6F0srWIGyPCWI8nz4Wnld7CEhSWJ8A", {
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true,
                })
                .then((response) => {
                    commit("setToken", response.data.idToken)

                    console.log(response);
                });

        },
        logout({ commit, dispatch, state }) {

        }
    }
})

export default store