<template>
    <div>
      <v-text-field
        label="Search packages"
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
    ...mapGetters(['allPackages', 'getSearchedPackagess'])
  },
  methods: {
    ...mapMutations(['updatePackages', 'updateSearchedPackages']),
    searchHandler () {
      const balanceFilter = this.allPackages.filter((packageData) =>
        packageData.name.includes(this.search)
      )
      this.updateSearchedPackages(balanceFilter)
      this.pageNumber = 1
    }
  }
}
</script>
