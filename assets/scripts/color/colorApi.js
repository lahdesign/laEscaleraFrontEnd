const config = require('../config')
const store = require('../store')

const createColor = function (data) {
  return $.ajax({
    url: config.apiUrl + '/colors/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data

  })
}
const showColors = function () {
  return $.ajax({
    url: config.apiUrl + '/colors/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateColor = function (data) {
  return $.ajax({
    url: config.apiUrl + '/colors/' + data.color.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const deleteColor = (colorId) => {
  return $.ajax({
    url: config.apiUrl + '/colors/' + colorId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createColor
  updateColor,
  showColors,
  deleteColor
}
