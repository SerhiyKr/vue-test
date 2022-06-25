<template>
    <div>
      <v-text-field
        label="Search posts"
        v-model="search"
        @input="searchHandler"
      ></v-text-field>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'SearchInput',
  data: () => {
    return {
      search: ''
    }
  },
  computed: {
    ...mapGetters(['allPosts', 'getSearchedPosts'])
  },
  methods: {
    ...mapMutations(['updatePosts', 'updateSearchedPosts']),
    searchHandler () {
      const balanceFilter = this.allPosts.filter((post) =>
        post.name.includes(this.search)
      )
      this.updateSearchedPosts(balanceFilter)
      this.pageNumber = 1
    }
  }
}
</script>
