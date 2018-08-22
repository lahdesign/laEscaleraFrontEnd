const config = require('../config')
const store = require('../store')

const createcolor = function (data) {
  return $.ajax({
    url: config.apiUrl + '/colors/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data

  })
}
const showcolors = function () {
  return $.ajax({
    url: config.apiUrl + '/colors/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updatecolor = function (data) {
  return $.ajax({
    url: config.apiUrl + '/colors/' + data.color.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const deletecolor = (colorId) => {
  return $.ajax({
    url: config.apiUrl + '/colors/' + colorId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createcolor,
  updatecolor,
  showcolors,
  deletecolor
}
