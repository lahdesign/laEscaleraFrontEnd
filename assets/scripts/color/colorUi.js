'use strict'
// const config = require('../config.js')
const store = require('../store')
// const colorTemplate = require('./templates/showcolors.handlebars')
// const colorApi = require('./colorApi.js')

const createColorSuccess = function (data) {
  $('#message').text('Color successfully created')
  $('#message').css('background-color', 'green')
  store.color = data.color
  console.log('onCreateSuccess ran. Data is :', data)
}

const showColorSuccess = function (data) {
  console.log('got here')
  for (let i = 0; i < data.colors.length; i++) {
    $('#allColors ul').append(`<li>
            <h1>${data.colors[i].value}</h1>
            </li>
            <input class="delete" data-id="${data.colors[i].id}" type="button" value="Delete">
            `)
  }
}

// const updateColorSuccess = function (data) {
//   $('#message').text('Example successfully created')
//   $('#message').css('background-color', 'green')
//   store.color = data.color
//   console.log('onUpdateSuccess ran. Data is :', data)
// }

// const onDeletecolor = (event) => {
//   event.preventDefault()
//   const colorId = $(event.target).closest('ul').attr('data-id')
//   // console.log("delete: " + boardgameId)
//   colorApi.deletecolor(colorId)
//     .then(onDeletecolorSuccess)
// }

module.exports = {
  createColorSuccess,
  showColorSuccess
  // updateColorSuccess,
  // onDeletecolor
//   onCreateSuccess,
//   onCreateFailure,
//   onIndexSuccess,
//   onIndexFailure,
//   onShowSuccess,
//   onShowFailure,
//   onDestroySuccess,
//   onDestroyFailure,
//   onUpdateSuccess,
//   onUpdateFailure,
//   onUserMovesSuccess,
//   onGetGamesSuccess,
//   onGetGamesFailure
}
