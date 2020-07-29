<template>
  <div>
    <v-card
      v-for="article in displayArticles"
      :key="article.id"
      class="mx-auto mb-4"
      max-width="700"
      outlined
    >
      <v-card-text class="text-left">
        <span class="text--primary"> ID: {{ article.id }} </span>
        <div class="display-1 text--primary">
          {{ article.title }}
        </div>
        <p class="text--primary">
          {{ article.description }}
        </p>
      </v-card-text>
      <v-card-actions>
        <v-btn
          text
          color="deep-purple accent-4"
          :to="{ name: 'articles-id', params: { id: article.id } }"
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
</template>

<script>
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
    this.articles = this.$store.getters['articles/articles']
    this.length = Math.ceil(this.articles.length / this.pageSize)
    this.displayArticles = this.articles.slice(
      this.pageSize * (this.page - 1),
      this.pageSize * this.page
    )
  },
  methods: {
    pageChange(pageNumber) {
      this.displayArticles = this.articles.slice(
        this.pageSize * (pageNumber - 1),
        this.pageSize * pageNumber
      )
    },
  },
}
</script>
