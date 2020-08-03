export const state = () => ({
  articles: [],
  article: [],
})

export const actions = {
  getArticles({ commit }) {
    const res = this.$axios.$get('http://localhost:10000/articles')
    commit('setArticles', res)
  },
  getArticle({ commit }, id) {
    const res = this.$axios.$get('http://localhost:10000/articles/' + id)
    commit('setArticle', res)
  },
}

export const mutations = {
  setArticles(state, data) {
    state.articles = data
  },
  setArticle(state, data) {
    state.article = data
  },

  add(state, article) {
    state.articles.push({
      title: article.title,
      description: article.description,
      content: article.content,
    })
  },
}

export const getters = {
  articles: (state) => {
    return state.articles
  },
  article: (state) => {
    return state.article
  },
}
