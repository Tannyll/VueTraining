import Vue from "vue";

export const setTradeResult = ({ state, commit }, tradeResult) => {
    commit("updateTradeResult", tradeResult);
    let tradeData = {
        purchase: state.purchase,
        sale: state.sale
    }
    Vue.http.put("https://tannyll-default-rtdb.europe-west1.firebasedatabase.app/traderesult.json", tradeData)
        .then(response => {
            console.log(response);
            console.log(state.purchase);
            console.log(state.sale);
            console.log(state.balance);
        });
}

export const getTradeResult = ({ commit }) => {
    Vue
        .http.get("https://tannyll-default-rtdb.europe-west1.firebasedatabase.app/traderesult.json")
        .then(response => {
            console.log(response);
            //TODO : commit stor çinde değişiklik yapar
            commit("updateTradeResult", response.body);
        });
}