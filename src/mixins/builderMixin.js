export default {
  methods: {
    // Categories
    getIcon (cat) {
      switch (cat) {
        case 0:
          return 'color_lens'
        case 1:
          return 'vpn_lock'
        case 2:
          return 'attach_money'
      }
    },
    getIconColor (cat) {
      switch (cat) {
        case 0:
          return 'amber'
        case 1:
          return 'green darken-1'
        case 2:
          return 'blue darken-1'
      }
    },
    getBg (cat) {
      switch (cat) {
        case 0:
          return 'rgba(255, 193, 7, 0.7)'
        case 1:
          return 'rgba(67, 160, 71, 0.7)'
        case 2:
          return 'rgba(30, 136, 229, 0.7)'
      }
    },
    getRoutePath (cat) {
      switch (cat) {
        case 0:
          return '/category/art'
        case 1:
          return '/category/environnement'
        case 2:
          return '/category/economie'
      }
    },
    getCatName (cat) {
      switch (cat) {
        case 0:
          return 'Art'
        case 1:
          return 'Environnement'
        case 2:
          return 'Economie'
      }
    }
  }
}
