// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import 'babel-polyfill'
import 'vue-style-loader'
import 'css-loader'
import { store } from '@/store/store'

import utils from '@/mixins/utilsMixin'

// Plugins
/* Vuetify */
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

/* Vue Awesome Swiper  */
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

/* Vue Masonry */
import {VueMasonryPlugin} from 'vue-masonry'

/* Vue Lodash */
import lodash from 'lodash'
import VueLodash from 'vue-lodash'

/* Vee-Validate */
import VeeValidate from 'vee-validate'

require('./assets/styles.scss')

Vue.config.productionTip = false

// Vuetify
Vue.use(Vuetify)

// VueAwesomeSwiper
Vue.use(VueAwesomeSwiper /* { default global options } */)

// VueAwesomeSwiper
Vue.use(VueMasonryPlugin)

// Lodash
Vue.use(VueLodash, lodash)

// VeeValidate
Vue.use(VeeValidate)

// Mixin global
Vue.mixin(utils)

// Bus
export const $bus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})

// Babel
new Vue()
