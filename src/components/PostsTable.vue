<template>
    <div>
      <v-simple-table>
        <template v-slot:default>
          <TableHead />
          <TableBody v-bind:paginatedPosts="paginatedPosts" />
        </template>
      </v-simple-table>
      <div class="text-center">
        <v-pagination
          v-model="pageNumber"
          :length="pages"
          @input="pageClick"
        ></v-pagination>
      </div>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import TableHead from './TableHead.vue'
import TableBody from './TableBody.vue'

export default {
  name: 'PostsTable',
  data: () => {
    return {
      postPerPages: 10,
      pageNumber: 1
    }
  },
  computed: {
    ...mapGetters(['allPosts']),
    getSearchedPosts () {
      return this.$store.getters.getSearchedPosts
    },
    pages () {
      return Math.ceil(this.getSearchedPosts.length / 10)
    },
    paginatedPosts () {
      const from = (this.pageNumber - 1) * this.postPerPages
      const to = from + this.postPerPages
      return this.getSearchedPosts.slice(from, to)
    }
  },
  methods: {
    ...mapActions(['fetchPosts']),
    ...mapMutations(['updatePosts', 'updateSearchedPosts']),
    pageClick (value) {
      this.pageNumber = value
    }
  },
  async mounted () {
    this.fetchPosts()
  },
  components: { TableHead, TableBody }
}
</script>
