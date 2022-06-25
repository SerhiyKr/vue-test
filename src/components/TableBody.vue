<template>
  <tbody>
    <tr v-for="packageData in paginatedPackages" :key="packageData.id" @click="modalOpen(packageData)">
      <td>{{ packageData.name }}</td>
      <td>{{ packageData.type }}</td>
    </tr>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          {{ packageInfo.name }}
        </v-card-title>
        <v-card-text>
          Package type: {{ packageInfo.type }}
        </v-card-text>
        <v-card-text>
          Hits: {{ packageInfo.hits }}
        </v-card-text>
        <v-card-text>
          Bandwidth: {{ packageInfo.bandwidth }}
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </tbody>
</template>

<script>

export default {
  name: 'TableBody',
  props: {
    paginatedPackages: Array
  },
  data: () => {
    return {
      dialog: false,
      packageInfo: {}
    }
  },
  methods: {
    modalOpen (packageData) {
      this.dialog = true
      this.packageInfo = packageData
    }
  }
}
</script>
