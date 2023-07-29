<template>
  <v-app>
    <appHeader v-if="$route.name !== 'Login'" ></appHeader>
    <appHeaderHome v-if="$route.name === 'Home'"></appHeaderHome>
    <v-content>
      <v-container :class="{head : $route.name !== 'Home', fullContent: $route.name === 'Login'}">
        <router-view></router-view>
      </v-container>
    </v-content>
    <appFooter v-if="$route.name !== 'Login'"></appFooter>
  </v-app>
</template>

<script>

import Header from '@/components/navigation/Header.vue'
import HeaderHome from '@/components/navigation/HeaderHome.vue'
import Footer from '@/components/navigation/Footer.vue'

export default {
  components: {
    'appHeader': Header,
    'appHeaderHome': HeaderHome,
    'appFooter': Footer
  },
  data: () => ({
  }),
  // watch: {
  //   '$route.path' (val) {
  //     console.log('route', val)
  //   }
  // },
  created () {
  }
}
</script>

<style lang="scss">
  .head{
    padding-top:150px
  }
  .fullContent {
    padding: 0;
    margin: 0;
    max-width: 100%;
    height: 100%;
  }
</style>
