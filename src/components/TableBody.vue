<template>
  <tbody>
    <tr v-for="post in paginatedPosts" :key="post.id" @click="modalOpen(post)">
      <td>{{ post.name }}</td>
      <td>{{ post.type }}</td>
    </tr>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          {{ postInfo.name }}
        </v-card-title>
        <v-card-text>
          Package type: {{ postInfo.type }}
        </v-card-text>
        <v-card-text>
          Hits: {{ postInfo.hits }}
        </v-card-text>
        <v-card-text>
          Bandwidth: {{ postInfo.bandwidth }}
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
    paginatedPosts: Array
  },
  data: () => {
    return {
      dialog: false,
      postInfo: {}
    }
  },
  methods: {
    modalOpen (post) {
      this.dialog = true
      this.postInfo = post
    }
  }
}
</script>
