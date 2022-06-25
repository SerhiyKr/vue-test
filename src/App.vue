<template>
  <div id="app">
    <v-app>
      <SearchInput />
      <PackagesTable />
      <AboutMe />
    </v-app>
  </div>
</template>

<script>

import PackagesTable from './components/PackagesTable.vue'
import SearchInput from './components/SearchInput.vue'
import AboutMe from './components/AboutMe.vue'

export default {
  name: 'App',
  components: { PackagesTable, SearchInput, AboutMe }
}
</script>
