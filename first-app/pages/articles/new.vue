<template>
  <v-form ref="form" v-model="valid">
    {{ $store.getters['articles/articles'] }}
    <v-text-field
      v-model="title"
      :counter="10"
      :rules="titleRules"
      label="Title"
      required
    ></v-text-field>

    <v-textarea
      v-model="description"
      :counter="100"
      :rules="descriptionRules"
      label="Description"
      required
    ></v-textarea>

    <v-textarea
      v-model="content"
      :counter="100"
      :rules="contentRules"
      label="Content"
      required
    ></v-textarea>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="submit">
      SUBMIT
    </v-btn>

    <v-btn color="error" class="mr-4" @click="reset">
      Reset Form
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    title: '',
    titleRules: [
      (v) => !!v || 'Title is required',
      (v) => (v && v.length <= 20) || 'Title must be less than 20 characters',
    ],
    description: '',
    descriptionRules: [
      (v) => !!v || 'Description is required',
      (v) =>
        (v && v.length <= 100) ||
        'Description must be less than 100 characters',
    ],
    content: '',
    contentRules: [
      (v) => !!v || 'Content is required',
      (v) =>
        (v && v.length <= 100) || 'Content must be less than 100 characters',
    ],
  }),
  methods: {
    submit() {
      this.$refs.form.validate()
      if (this.valid) {
        const newArticle = new FormData()
        newArticle.title = this.title
        newArticle.description = this.description
        newArticle.content = this.content
        this.$store.commit('articles/add', newArticle)
        this.reset()
      }
    },
    reset() {
      this.$refs.form.reset()
    },
  },
}
</script>
