<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="teal">
        <div class="subheading"></div>
        <div class="subheading">Serhii Krupnyk. Get connected with me on social networks!</div>
        <v-spacer></v-spacer>
        <v-btn v-for="item in socialNetworks" :key="item.icon" class="mx-4" dark icon :href="item.link">
          <v-icon size="24px">
            {{ item.icon }}
          </v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }}
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'AboutMe',
  data: () => {
    return {
      socialNetworks: {
        github: {
          icon: 'mdi-github',
          link: 'https://github.com/SerhiyKr'
        },
        linkedin: {
          icon: 'mdi-linkedin',
          link: 'https://www.linkedin.com/in/serhii-krupnyk-918aa1177'
        }
      }
    }
  }
}
</script>
