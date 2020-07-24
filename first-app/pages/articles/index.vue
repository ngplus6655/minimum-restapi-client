<template>
  <v-card>
    <v-data-table :headers="headers" :items="articles"></v-data-table>
  </v-card>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return {
      search: '',
      headers: [
        {
          text: 'ID',
          align: 'start',
          filterable: false,
          value: 'id',
        },
        { text: 'Title', value: 'title' },
        { text: 'Description', value: 'description' },
      ],
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
}
</script>
