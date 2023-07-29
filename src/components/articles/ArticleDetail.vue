<template>
  <v-container grid-list-sm>
    <v-layout>
      <v-flex column id="articleContainer">
        <h1 class="display-3">{{article.title}}</h1>
        <div class="articleInfo d-flex my-3">
          <v-flex class="d-flex" justify-space-between>
            <v-avatar id="avImg"><img :src="authorDetails.avatar"></v-avatar>
            <div class="ml-2">
              <div>Par {{article.author | capitalize}}</div>
              <div>{{getDate(article.dateCreated) | capitalize}}</div>
            </div>
          </v-flex>
          <v-spacer></v-spacer>
          <div class="d-flex jc-end flex-none">
            <v-chip text-color="red darken-1" color="red darken-1" outline ><v-icon color="red darken-1">thumb_up</v-icon> {{article.likes}} likes</v-chip>
            <v-chip :color="getIconColor(article.category)" text-color="white" @click="goTo(article.category)" class="pointer">
              <v-icon color="white">{{ getIcon(article.category)}}</v-icon> {{getCatName(article.category)}}
            </v-chip>
          </div>
        </div>
        <div class="d-flex">
          <img class="mx-auto flex-none img-fluid" :src="article.mainImg" :alt="article.title">
        </div>
        <div>
          <p class="title fw-300 mt-4 w-space" id="contentArticle">{{article.content}}</p>
          <p> <v-icon color="red darken-1">http</v-icon> <a :href="article.link" target="_blank"> Source</a> </p>
        </div>
        <div class="full">
          <v-tooltip top>
            <div slot="activator">
              <v-btn fab large color="red darken-1 d-block mx-auto"><v-icon color="white">thumb_up</v-icon></v-btn>
            </div>
            <span>Liker l'article !</span>
          </v-tooltip>
        </div>
        <h2 class="display-1 my-4 txtCenter nunito uppercase">L'article en images <v-icon color="red darken-1">collections</v-icon></h2>
        <div class="d-flex jc-center" v-if="article.imgs">
          <v-flex xs4 v-for="img in article.imgs" :key="img">
            <div class="subImgs">
              <img :src="img" class="img-full pointer">
            </div>
          </v-flex>
        </div>
      </v-flex>
      <div>
      </div>
    </v-layout>
    <hr class="mt-5 mb-3">
    <v-layout column id="comments">
      <h2 class="txtCenter fw-400 nunito full uppercase display-1 my-4 ">{{comLength}} Commentaire<span v-if="comLength > 1"></span>s</h2>
      <section id="commentsWrap" class="mx-auto">
        <div v-for="(com, index) in article.comments" :key="com.id" class="mb-3">
          <div class="d-flex">
            <v-avatar class="authorAvatar mr-2" v-if="com_author[index]"><img :src="com_author[index].avatar"> </v-avatar>
            <div>
              <p class="commentsInfo"><span class="fw-600">{{com.author | capitalize}}</span> - {{getDate(com.dateCreated) | capitalize}}</p>
              <p>{{com.message}}</p>
            </div>
          </div>
        </div>
        <hr>
        <div class="d-flex mt-3">
          <v-avatar class="authorAvatar mr-2" ><img :src="currentUser.avatar"></v-avatar>
            <v-text-field
              color="red darken-1"
              multi-line
              placeholder="Tapez ici pour commencer à écrire">
              <div slot="label">
                Ajouter un commentaire
              </div>
            </v-text-field>
        </div>
        <v-btn dark color="red darken-1 mx-auto d-block">poster le commentaire</v-btn>
      </section>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import builder from '@/mixins/builderMixin'

export default {
  data: () => ({
    title: 'article detail',
    article: {},
    authorDetails: {},
    authorComDetails: {},
    comLength: 0,
    com_author: [],
    currentUser: {}
  }),
  mixins: [builder],
  methods: {
    goTo (cat) {
      this.$router.push(this.getRoutePath(cat))
    }
  },
  computed: {
    ...mapGetters({
      getDetail: 'articles/getDetail',
      getUsers: 'users/getUsers'
    })
  },
  created () {
    let id = this.$route.params.id
    this.$store.dispatch('articles/getItem', {id: id}).then((response) => {
      // remplissage du tableau d'article
      this.article = response
      this.comLength = response.comments.length
      // remplissage du tableau d'users
      this.$store.dispatch('users/getAll').then((response) => {
        this.currentUser = response[0] // en attendant le login
        let user = response.find(u => u.name === this.article.author)
        this.authorDetails = user // lien entre l'objet users et l'auteur de l'article
        for (let i in this.article.comments) {
          let comsByAuthor = response.find(u => u.id === this.article.comments[i].author_id)
          let coms = []
          coms.push(comsByAuthor)
          for (let i in coms) {
            if (coms[i] !== undefined) {
              this.com_author.push(coms[i])
            }
          }
        }
      })
    })
  }
}

</script>

<style scoped lang="scss">
#articleContainer {
  .articleInfo {
    color: #666;
    #avImg {
      max-width: 48px;
    }
    .chip {
      flex: none !important;
    }
  }
  #contentArticle {
    line-height: 125% !important;
  }
  .subImgs {
    background: #000;
    img {
      transition: all 1s;
    }
    &:hover {
      img {
        opacity: 0.4;
        transition: all 1s;
      }
    }
  }
}

#comments {
  #commentsWrap {
    width: 800px;
    .authorAvatar {
      max-width: 48px;
    }
    .commentsInfo {
      color:#666;
      margin-bottom: 5px;
    }
  }
}
</style>
