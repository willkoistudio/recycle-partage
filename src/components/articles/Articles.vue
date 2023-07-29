<template>
  <div>
    <div class="headline txtCenter uppercase nunito">
      <h2 class="headline" v-if="category[0].art"> <v-icon color="amber">color_lens</v-icon> art</h2>
      <h2 class="headline" v-if="category[0].envt"> <v-icon color="green darken-1">vpn_lock</v-icon> environnement</h2>
      <h2 class="headline" v-if="category[0].ecol"> <v-icon color="blue darken-1">attach_money</v-icon> écologie</h2>
      <hr class="subtitle small mx-auto my-4" :class="{ amber : category[0].art, 'green darken-1' : category[0].envt, 'blue darken-1' : category[0].ecol}">
    </div>
    <div id="articles">
      <!-- <h2 class="display1 uppercase my-4 display-1 fw-300 nunito">articles populaires <v-icon large color="red darken-1">trending_up</v-icon></h2> -->
      <v-layout row wrap v-masonry transition-duration="0.3s" item-selector=".article">
        <v-flex xs12 sm6 md6 lg3 v-masonry-tile v-for="article in articles" :key="article.id" class="article pa-3">
          <div @click="goTo(article.id)">
            <v-card class="pointer cardArticle">
              <v-card-media class="article" :src="article.mainImg" height="200px">
              </v-card-media>
              <v-card-title primary-title class="txtCenter">
                <h3 class="headline title fw-300 mb-0">{{shortText(article.title, 40)}}</h3>
              </v-card-title>
              <hr>
              <v-card-actions class="pa-2">
                <v-tooltip top>
                  <div slot="activator"> <span class="icon"><v-icon small>person</v-icon></span> </div>
                  <span>{{article.author}}</span>
                </v-tooltip>
                <v-tooltip right>
                <div slot="activator"><span class="icon"><v-icon small>thumb_up</v-icon></span> {{article.likes}}</div>
                <span>{{article.likes}} likes</span>
                </v-tooltip>
                <v-spacer></v-spacer>
                <v-tooltip left>
                <div slot="activator"><span class="icon"><v-icon>update</v-icon></span></div>
                <span>Créé le : {{article.dateCreated}}</span>
                </v-tooltip>
              </v-card-actions>
            </v-card>
          </div>

        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import builder from '@/mixins/builderMixin'

export default {
  mixins: [builder],
  data: () => ({
    category: [{cat: null}],
    articles: []
  }),
  watch: {
    '$route.path' (path) {
      this.checkUrl(path)
    }
  },
  methods: {
    checkUrl (url) {
      this.$store.dispatch('articles/getAll').then((response) => {
        this.articles = response
        switch (url) {
          case '/category/art':
            this.category = []
            this.category.push({art: true})
            this.articles = this.articles.filter(a => a.category === 0)
            break
          case '/category/environnement':
            this.category = []
            this.category.push({envt: true})
            this.articles = this.articles.filter(a => a.category === 1)
            break
          case '/category/economie':
            this.category = []
            this.category.push({ecol: true})
            this.articles = this.articles.filter(a => a.category === 2)
            break
        }
      })
    },
    goTo (id) {
      this.$router.push('/article/' + id)
    }
  },
  computed: {
    ...mapGetters({
      getArticles: 'articles/getArticles'
    })
  },
  created () {
    let url = this.$route.path
    this.checkUrl(url)
  }
}
</script>

<style scoped lang="scss">
  .headline {
    .icon {
      position: relative;
      bottom:2px;
    }
  }
</style>
