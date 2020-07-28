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
      article: {},
    }
  },
  mounted() {
    this.article = {
      id: 1,
      title: 'Title1',
      description: 'DSECRIPTION OF ARICLE1',
      content: 'HELLO WORLD!!',
    }
  },
}
</script>
