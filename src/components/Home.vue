<template>
  <v-layout>
    <v-flex xs12 sm12 md9 lg10 pr-3>
      <div id="lastArticles">
        <h2 class="display1 uppercase my-4 display-1 fw-300 nunito">articles récents <v-icon large color="red darken-1">update</v-icon></h2>
        <v-layout row wrap v-masonry transition-duration="0.3s" item-selector=".article">
          <v-flex xs12 sm6 md6 lg3 v-masonry-tile v-for="article in latestArticles" :key="article.id" class="article pa-3">
            <div @click="goTo(article.id)">
              <v-card class="pointer cardArticle">
                <v-card-media class="article" :src="article.mainImg" height="200px">
                <div class="category abs">
                  <v-icon :color="getIconColor(article.category)">{{getIcon(article.category)}}</v-icon>
                </div>
                </v-card-media>
                <v-card-title primary-title class="txtCenter">
                  <h3 class="headline title fw-300 mb-0">{{shortText(article.title, 40)}}</h3>
                </v-card-title>
                <hr>
                <v-card-actions class="pa-2">
                  <v-tooltip top>
                    <div slot="activator"> <span class="icon"><v-icon small>person</v-icon></span> </div>
                    <span>{{article.author | capitalize}}</span>
                  </v-tooltip>
                  <v-tooltip right>
                    <div slot="activator"><span class="icon"><v-icon small>thumb_up</v-icon></span> {{article.likes}}</div>
                    <span>{{article.likes}} likes</span>
                  </v-tooltip>
                  <v-spacer></v-spacer>
                  <v-tooltip left>
                    <div slot="activator"><span class="icon"><v-icon>update</v-icon></span></div>
                    <span>{{getDate(article.dateCreated) | capitalize}}</span>
                  </v-tooltip>
                </v-card-actions>
              </v-card>
            </div>
          </v-flex>
        </v-layout>
      </div>
      <div id="popularArticles">
        <h2 class="display1 uppercase my-4 display-1 fw-300 nunito">articles populaires <v-icon large color="red darken-1">trending_up</v-icon></h2>
        <v-layout row wrap v-masonry transition-duration="0.3s" item-selector=".article">
          <v-flex xs12 sm6 md6 lg3 v-masonry-tile v-for="article in popularArticles" :key="article.id" class="article pa-3">
            <div @click="goTo(article.id)">
              <v-card class="pointer cardArticle">
                <v-card-media class="article" :src="article.mainImg" height="200px">
                <div class="category abs">
                  <v-icon :color="getIconColor(article.category)">{{getIcon(article.category)}}</v-icon>
                </div>
                </v-card-media>
                <v-card-title primary-title class="txtCenter">
                  <h3 class="headline title fw-300 mb-0">{{shortText(article.title, 40)}}</h3>
                </v-card-title>
                <hr>
                <v-card-actions class="pa-2">
                  <v-tooltip top>
                    <div slot="activator"> <span class="icon"><v-icon small>person</v-icon></span> </div>
                    <span>{{article.author | capitalize}}</span>
                  </v-tooltip>
                  <v-tooltip right>
                  <div slot="activator"><span class="icon"><v-icon small>thumb_up</v-icon></span> {{article.likes}}</div>
                  <span>{{article.likes}} likes</span>
                  </v-tooltip>
                  <v-spacer></v-spacer>
                  <v-tooltip left>
                  <div slot="activator"><span class="icon"><v-icon>update</v-icon></span></div>
                  <span>{{getDate(article.dateCreated) | capitalize}}</span>
                  </v-tooltip>
                </v-card-actions>
              </v-card>
            </div>

          </v-flex>
        </v-layout>
      </div>
    </v-flex>
    <v-flex id="aside" XS12 sm12 md3 lg2 column>
      <div id="lastSales" class="mt-4">
        <h2 class="title uppercase fw-400 nunito mb-2">a vendre <i class="fas fa-cart-arrow-down"></i></h2>
        <div class="d-flex py-3 itemSale" v-for="item in 3" :key="item">
          <v-avatar size="70" class="mr-2" tile><img src="https://i.pinimg.com/originals/d2/8e/38/d28e38b9fb3d11a06fc0c34835b698bb.jpg" alt=""></v-avatar>
          <div>
            <div><v-icon>assignment_ind</v-icon> Hinata</div>
            <div><v-icon>update</v-icon> 03/04/2018</div>
            <div> <v-icon>monetization_on</v-icon> 60 €</div>
          </div>
        </div>
      </div>
      <div id="newsletter" class="my-3">
        <h2 class="title uppercase fw-400 nunito mb-2">newsletter <v-icon color="red darken-1">mail_outline</v-icon></h2>
        <p>Inscrivez vous à notre newsletter afin de recevoir les actus et offres Recycle & Partage par mail !</p>
        <v-text-field
          name="newsletter"
          label="Your email"
          append-icon="email"
          color="red darken-1"
        ></v-text-field>
      </div>
      <div id="social">
        <h2 class="title uppercase fw-400 nunito mb-3">suivez nous ! <i class="fas fa-hand-peace"></i></h2>
        <div class="d-flex links">
          <div class="txtCenter"><i class="fab fa-facebook-f fa-2x pointer"></i></div>
          <div class="txtCenter"><i class="fab fa-twitter fa-2x pointer"></i></div>
          <div class="txtCenter"><i class="fab fa-instagram fa-2x pointer"></i></div>
          <div class="txtCenter"><i class="fab fa-dribbble fa-2x pointer"></i></div>
          <div class="txtCenter"><i class="fab fa-pinterest fa-2x pointer"></i></div>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import builder from '../mixins/builderMixin'

// import httpService from '../services/httpService'
export default {
  mixins: [builder],
  data: () => ({
    articles: [],
    latestArticles: [],
    popularArticles: []
  }),
  computed: {
    ...mapGetters({
      getArticles: 'articles/getArticles'
    })
  },
  methods: {
    goTo (id) {
      this.$router.push('/article/' + id)
    }
  },
  created () {
    this.$store.dispatch('articles/getAll').then((response) => {
      this.articles = response
      this.latestArticles = this.articles.sort(function (a, b) {
        let itemA = a.id
        let itemB = b.id
        return itemB - itemA
      }).slice(0, 4)
      this.popularArticles = this.articles.sort(function (a, b) {
        let itemA = a.likes
        let itemB = b.likes
        return itemB - itemA
      }).slice(0, 4)
    })
    // httpService.get('articles', JSON.stringify({}))
    //   .then((data) => {
    //     this.articles = data
    //     resolve()
    //   })
  }
}
</script>

<style lang="scss">
  .article {
    .cardArticle {
      transition: all 0.5s;
      &:hover {
        box-shadow: 0px 0px 26px 1px rgba(0,0,0,0.26);
        transition: all 0.5s;
      }
    }
    .category {
      left: 15px;
      bottom: 15px;
      .icon {
        width: 100%;
      }
      background: #fff;
      height: 30px;
      width: 30px;
      display: flex;
      border-radius: 50%;
    }
    .pointer {
      &:hover {
        // box-shadow: 0 2px 1px -1px rgba(25, 127, 158, 0.959), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
      }
    }
  }
  .card__actions {
    .icon {
      background: #edf2f6;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      transition: 1s;
      &:hover {
        background:#d5e0e8;
      }
    }
  }
  .itemSale {
    border-bottom: 1px solid #eee;
    .avatar {
      max-width: 70px;
    }
    &:first-child {
      padding-top: 0;
    }
    &:last-child {
      padding-bottom: 0;
      border:none;
    }
  }
  #newsletter {
    p {
    color: #666;
    }
  }
  #aside {
    .svg-inline--fa {
      color: #e53935;
    }
    .links {
      .svg-inline--fa {
        color: #444;
        transition: all 0.5s;
        &:hover {
          color: #e53935;
          transition: all 0.5s;
        }
      }
    }
  }
</style>
