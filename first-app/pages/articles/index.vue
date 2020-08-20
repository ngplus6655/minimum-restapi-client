<template>
  <div v-if="displayArticles.length !== 0">
    <div>Cookieの値</div>
    <v-card
      v-for="article in displayArticles"
      :key="article.ID"
      class="mx-auto mb-4"
      max-width="700"
      outlined
    >
      <v-card-text class="text-left">
        <span class="text--primary"> ID: {{ article.ID }} </span>
        <div class="display-1 text--primary">
          {{ article.title }}
        </div>
        <p class="text--primary">
          {{ article.desc }}
        </p>
      </v-card-text>
      <v-card-actions>
        <v-btn
          text
          color="deep-purple accent-4"
          :to="{ name: 'articles-id', params: { id: article.ID } }"
          nuxt
        >
          詳細を表示
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-pagination
      v-model="page"
      :length="length"
      @input="pageChange"
    ></v-pagination>
  </div>
  <v-progress-circular indeterminate :size="50" v-else></v-progress-circular>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  layout: 'default',
  data() {
    return {
      page: 1,
      length: 0,
      articles: [],
      displayArticles: [],
      pageSize: 20,
    }
  },
  mounted() {
    this.fetchArticle().then((a) => {
      a.forEach((v) => {
        this.articles.push(v)
      })
      this.length = Math.ceil(this.articles.length / this.pageSize)
      this.displayArticles = this.articles.slice(
        this.pageSize * (this.page - 1),
        this.pageSize * this.page
      )
    })
  },
  methods: {
    ...mapActions({
      getArticles: 'articles/getArticles',
    }),
    async fetchArticle() {
      this.getArticles()
      return await this.$store.getters['articles/articles']
    },
    pageChange(pageNumber) {
      this.displayArticles = this.articles.slice(
        this.pageSize * (pageNumber - 1),
        this.pageSize * pageNumber
      )
    },
  },
}
</script>
