<template>
	<section>
		<v-layout id="animHeader" class="pa-3">
      <v-flex class="d-flex" xs4>
        <h1 class="mx-auto my-auto display-1 txtCenter fw-300 nunito" id="title_ah">"Recycler n'aura jamais <br> été aussi plaisant"</h1>
        </v-flex>
      <v-flex xs4 column>
        <div id="logo" class="mx-auto">
        </div>
        <img src="../../assets/mascotte.svg" alt="mascotte recycle & partage" id="mascotte" height="200px" class="d-block mx-auto">
      </v-flex>
      <v-flex class="d-flex" xs4>
        <v-text-field class="mx-auto my-auto nunito" clearable color="red darken-1" append-icon="search" placeholder="Rechercher sur le site" hide-details single-line></v-text-field>
      </v-flex>
		</v-layout>
    <div id="prezHeader" class="txtCenter pt-4 pb-5">
      <v-layout>
        <v-flex xs4 class="px-4">
          <v-icon dark large>share</v-icon>
          <h2 class="display-1 mt-3 nunito">Partage</h2>
          <p class="my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis lectus metus, at posuere neque. Sed pharetra nibh eget orci convallis at posuere leo convallis. Sed blandit augue vitae augue</p>
        </v-flex>
        <v-flex xs4 class="px-4">
          <v-icon dark large>mood</v-icon>
          <h2 class="display-1 mt-3 nunito">Entraide</h2>
          <p class="my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis lectus metus, at posuere neque. Sed pharetra nibh eget orci convallis at posuere leo convallis. Sed blandit augue vitae augue</p>
        </v-flex>
        <v-flex xs4 class="px-4">
          <v-icon dark large>add_shopping_cart</v-icon>
          <h2 class="display-1 mt-3 nunito">Marché d'objets recyclés</h2>
          <p class="my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis lectus metus, at posuere neque. Sed pharetra nibh eget orci convallis at posuere leo convallis. Sed blandit augue vitae augue</p>
        </v-flex>
      </v-layout>
      <v-btn class="mx-auto my-4" color="red darken-1" large dark>moi aussi je recycle !</v-btn>
    </div>
    <div id="slider">
        <swiper :options="swiperOption">
          <swiper-slide v-for="article in articles" :key="article.id" :style="{background: 'url('+ article.mainImg + ')'}" >
            <div class="swipe-content d-flex txtCenter" :style="{background: '' + getBg(article.category) +''}">
              <v-layout class="mx-auto my-auto" column>
                <h2 class="display-1 nunito mx-auto">{{ article.title}}</h2>
                <v-layout class="mx-auto _Infos mt-3">
                  <div class="_info"><v-icon color="white">person</v-icon> <span >{{article.author | capitalize}}</span></div>
                  <div class="_info"><v-icon color="white">thumb_up</v-icon> {{ article.likes}}</div>
                  <div class="_info"><v-icon color="white">update</v-icon> {{ article.dateCreated}}</div>
                </v-layout>
              </v-layout>
            </div>
            </swiper-slide>
          <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
          <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
          <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
        </swiper>
    </div>
	</section>
</template>

<script>
import { mapGetters } from 'vuex'
import builder from '../../mixins/builderMixin'
export default {
  mixins: [builder],
  data: () => ({
    swiperOption: {
      spaceBetween: 30,
      effect: 'fade',
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true
      }
    },
    articles: []
  }),
  computed: {
    ...mapGetters({
      getArticles: 'articles/getArticles'
    })
  },
  methods: {
  },
  created () {
    this.$store.dispatch('articles/getAll').then(() => {
      this.articles = this.getArticles
      this.articles = this.articles.slice(0, 5)
    })
  }
}
</script>

<style lang="scss">
  // animations
  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes bounceIn {
    0% {
      margin-top: 0px;
      -webkit-animation-timing-function: ease-out;
    }
    20% {
      margin-top: -30px;
      -webkit-animation-timing-function: ease-in;
    }
    40% {
      margin-top: 10px;
      -webkit-animation-timing-function: ease-out;
    }
    60% {
      margin-top: -20px;
      -webkit-animation-timing-function: ease-in;
    }
    80% {
      margin-top: 5px;
      -webkit-animation-timing-function: ease-out;

    }
    90% {
      margin-top: -10px;
      -webkit-animation-timing-function: ease-in;

    }
    100% {
      margin-top: 0;
      -webkit-animation-timing-function: ease-out;
    }
  }

	#animHeader {
		background:url('../../assets/layout/bg_area.svg') repeat-x bottom, url('../../assets/layout/bg_montain.svg') no-repeat bottom #f4f4f4;
		height: 400px;
    margin-top:94px;
    #title_ah {
      color:#666
    }
		#logo {
			height: 150px;
			width: 150px;
			background: url('../../assets/logo.svg') no-repeat center;
			background-size: contain;
      animation: fadeIn 2s ease-in-out;
		}
    #mascotte {
      animation: bounceIn 2s ease-in-out;
    }
    #bg_sky {
      top:0;
    }
    #bg_montain {
      bottom: 0;
    }
	}
  #prezHeader {
    background: #333;
    color:#fff;
  }
  #slider {
    background: #eeee;
    height: 500px;
    .swiper-container {
      height: 100%;
      .swipe-content {
        color:#fff;
        height: 100%;
        h2 {
          max-width: 800px;
        }
        ._Infos {
          ._info {
            margin-right:15px;
            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
    }
  }
</style>
