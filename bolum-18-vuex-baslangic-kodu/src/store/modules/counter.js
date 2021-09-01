const state = {
    counter: 0,
}

const getters = {
    getDoubleCounter(state) {
        return state.counter * 2;
    },
    getStringCounter(state) {
        return state.counter + ".kezTıklandı";
    },
}

const mutations = {
    increaseCounter(state, payload) {
        state.counter += payload;

    },
    decreaseCounter(state) {
        state.counter--

    },
}

const actions = {
    increment({ commit }, payload) {
        commit("increaseCounter", payload);
    },
    decrement({ commit }) {
        commit("decreaseCounter")
    },
    incAsync({ commit }, payload) {
        setTimeout(() => {
            commit("increaseCounter", payload.count)
        }, payload.time);
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}