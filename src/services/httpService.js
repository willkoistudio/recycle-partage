import 'whatwg-fetch'

export default {
  _killCache (url) {
    let r = Math.floor(Math.random() * 100000)
    return url + ((url.indexOf('?') > 0 ? '&' : '?') + 'cache=' + r)
  },
  checkStatus (response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  },
  parseJSON (response) {
    return response.json()
  },
  fetch (paramMethod, paramUrl, paramBody) {
    let url = 'http://localhost:3000/' + paramUrl
    let self = this
    let oContent = {
      method: paramMethod,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: paramBody
    }
    if (paramMethod === 'GET' || paramMethod === 'DELETE') {
      delete oContent.body
    }
    return fetch(url, oContent)
      .then(self.checkStatus)
      .then(self.parseJSON)
      .then(function (data) {
        // console.log('request succeeded with JSON response', data)
        return data
      }).catch(function (error) {
        console.log('request failed', error)
      })
  },
  get (paramUrl, paramBody) {
    return this.fetch('GET', paramUrl, paramBody)
  },
  post (paramUrl, paramBody) {
    return this.fetch('POST', paramUrl, paramBody)
  },
  put (paramUrl, paramBody) {
    return this.fetch('PUT', paramUrl, paramBody)
  },
  delete (paramUrl, paramBody) {
    return this.fetch('DELETE', paramUrl, paramBody)
  }
}
