<template>
  <div>
    <v-card
      v-for="article in articles"
      :key="article.id"
      class="mx-auto mb-4"
      max-width="600"
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
          :to="'article/' + article.id"
          nuxt
        >
          詳細を表示
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-pagination
      v-model="page"
      :length="articles.length / 5 + 1"
    ></v-pagination>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return {
      page: 1,
      displayLists: [],
      pageSize: 10,
      articles: [
        {
          id: 1,
          title: 'Test Article1',
          description: 'Testing Article1',
        },
        {
          id: 2,
          title: 'Test Article2',
          description: 'Testing Article2',
        },
        {
          id: 3,
          title: 'Test Article3',
          description: 'Testing Article3',
        },
        {
          id: 4,
          title: 'Test Article4',
          description: 'Testing Article4',
        },
        {
          id: 5,
          title: 'Test Article5',
          description: 'Testing Article5',
        },
        {
          id: 6,
          title: 'Test Article6',
          description: 'Testing Article6',
        },
        {
          id: 7,
          title: 'Test Article7',
          description: 'Testing Article7',
        },
        {
          id: 8,
          title: 'Test Article8',
          description: 'Testing Article8',
        },
      ],
    }
  },
  mounted: function(){
    this.displayLists = this.articles.slice(0,this.pageSize);
  }
}
</script>
