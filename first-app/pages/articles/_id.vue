<template>
  <v-simple-table height="300px">
    <template v-slot:default>
      <tbody>
        <tr>
          <th>ID</th>
          <td>{{ article.id }}</td>
        </tr>
        <tr>
          <th>Title</th>
          <td>{{ article.title }}</td>
        </tr>
        <tr>
          <th>Description</th>
          <td>{{ article.description }}</td>
        </tr>
        <tr>
          <th>Content</th>
          <td>{{ article.content }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return {
      articles: [],
      article: {},
    }
  },
  mounted() {
    this.articles = this.$store.getters['articles/articles']
    this.articles.forEach((v) => {
      if (v.id === parseInt(this.$route.params.id)) {
        this.article = v
      }
    })
  },
}
</script>
