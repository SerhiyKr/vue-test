<template>
  <div id="app">
    <v-app>
      <SearchInput />
      <PostsTable />
      <AboutMe />
    </v-app>
  </div>
</template>

<script>

import PostsTable from './components/PostsTable.vue'
import SearchInput from './components/SearchInput.vue'
import AboutMe from './components/AboutMe.vue'

export default {
  name: 'App',
  data: () => {
    return {
      dialog: false,
      postDetailed: {},
      dialogDetail: false
    }
  },
  methods: {
    modalOpen (post) {
      this.postDetailed = post
      this.dialogDetail = !this.dialogDetail
      console.log(this.dialogDetail)
    }
  },
  components: { PostsTable, SearchInput, AboutMe }
}
</script>
