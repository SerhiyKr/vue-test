<template>
    <div>
      <v-simple-table>
        <template v-slot:default>
          <TableHead />
          <TableBody v-bind:paginatedPackages="paginatedPackages" />
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
  name: 'PackagesTable',
  data: () => {
    return {
      packagePerPages: 10,
      pageNumber: 1
    }
  },
  computed: {
    ...mapGetters(['allPackages']),
    getSearchedPackages () {
      return this.$store.getters.getSearchedPackages
    },
    pages () {
      return Math.ceil(this.getSearchedPackages.length / 10)
    },
    paginatedPackages () {
      const from = (this.pageNumber - 1) * this.packagePerPages
      const to = from + this.packagePerPages
      return this.getSearchedPackages.slice(from, to)
    }
  },
  methods: {
    ...mapActions(['fetchPackages']),
    ...mapMutations(['updatePackages', 'updateSearchedPackages']),
    pageClick (value) {
      this.pageNumber = value
    }
  },
  async mounted () {
    this.fetchPackages()
  },
  components: { TableHead, TableBody }
}
</script>
