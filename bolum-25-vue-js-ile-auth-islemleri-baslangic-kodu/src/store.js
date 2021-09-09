import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
import { router } from './router';

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
        initAuth({ commit, dispatch }) {
            let token = localStorage.getItem("token")
            if (token) {
                let expirationDate = localStorage.getItem("expirationDate");
                let time = new Date().getTime()


                if (time >= +expirationDate) {
                    console.log("token süresi bitmiş")
                    dispatch("logout");
                } else {
                    commit("setToken", token)
                    let timerSecond = +expirationDate - time
                    dispatch("setTimeoutTimer", timerSecond)
                    console.log("Kalan Saniye : " + timerSecond)
                    router.push("/")
                }
            } else {
                router.replace("/")
            }
        },
        login({ commit, dispatch, state }, authData) {
            let authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
            if (authData.isUser) {
                authLink =
                    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
            }
            axios
                .post(authLink + firebaseConfig.apiKey, {
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true,
                })
                .then((response) => {
                    commit("setToken", response.data.idToken)
                    localStorage.setItem("token", response.data.idToken);
                    localStorage.setItem("expirationDate", new Date().getTime() + response.data.expiresIn * 1000);
                    //localStorage.setItem("expirationDate", new Date().getTime() + 10000);

                    dispatch("setTimeoutTimer", +response.data.expiresIn * 1000)
                        //dispatch("setTimeoutTimer", 10000)

                    console.log(response.data);
                }).catch((response) => {
                    console.log(response);
                });

        },
        logout({ commit, dispatch, state }) {
            commit("clearToken");
            localStorage.removeItem("token");
            localStorage.removeItem("expirationDate");
            router.replace("/auth");
        },
        setTimeoutTimer({ dispatch }, expiresIn) {
            setTimeout(() => {
                dispatch("logout");
            }, expiresIn)
        }
    }
})

export default store