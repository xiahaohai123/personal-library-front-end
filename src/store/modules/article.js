const state = {
    content: '',
    changed: 0,
    tagId: null
}

const getters = {}

const actions = {
    setArticle({ commit }, articleInfo) {
        commit("setArticle", articleInfo)
    },
    change({ commit }, changeState) {
        commit('change', changeState)
    }
}

const mutations = {
    setArticle(state, articleInfo) {
        state.content = articleInfo.content
        state.tagId = articleInfo.tagId
    },
    change(state, changeState) {
        state.changed = changeState
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}