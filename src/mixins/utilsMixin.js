export default {
  methods: {

    // Text
    shortText (text, length) {
      if (!text || !length) {
        return text
      }
      if (text.length > length) {
        return text.substr(0, length) + '...'
      }
      return text
    },
    getDate (date) {
      let options = {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'}
      return new Date(date).toLocaleString('fr-FR', options)
    }
  },
  filters: {
    capitalize (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    slice (value, limit) {
      value.slice(0, limit)
    }
  }
}
