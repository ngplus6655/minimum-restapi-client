<template>
  <v-simple-table height="300px" v-if="article.length !== 0">
    <template v-slot:default>
      <tbody>
        <tr>
          <th>ID</th>
          <td>{{ article.ID }}</td>
        </tr>
        <tr>
          <th>Title</th>
          <td>{{ article.title }}</td>
        </tr>
        <tr>
          <th>Description</th>
          <td>{{ article.desc }}</td>
        </tr>
        <tr>
          <th>Content</th>
          <td>{{ article.content }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  <v-progress-circular indeterminate :size="50" v-else></v-progress-circular>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  layout: 'default',
  data() {
    return {
      article: [],
    }
  },
  mounted() {
    this.fetchArticle().then((a) => {
      console.debug(a)
      this.article = a
    })
  },
  methods: {
    ...mapActions({
      getArticle() {
        this.$store.dispatch('articles/getArticle', this.$route.params.id)
      },
    }),
    async fetchArticle() {
      this.getArticle()
      return await this.$store.getters['articles/article']
    },
  },
}
</script>
