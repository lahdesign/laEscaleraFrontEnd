'use strict'
// const config = require('../config.js')
const store = require('../store')
const colorTemplate = require('../templates/showcolors.handlebars')
const colorApi = require('./colorApi.js')

// const onGetGamesSuccess = function (data) {
//   console.log(data)
// }

// const onGetGamesFailure = function () {
//   console.log('didnt work')
// }

// const onUserMovesSuccess = function (data) {}

const createcolorSuccess = function (data) {
  $('#message').text('Example successfully created')
  $('#message').css('background-color', 'green')
  store.color = data.color
  console.log('onCreateSuccess ran. Data is :', data)
}

const showcolorSuccess = function (data) {
  console.log(data)
  const htmltemplate = colorTemplate({colors: data.colors})
  $('.content').append(htmltemplate)
  $('.delete').on('click', onDeletecolor)
}

const updatecolorSuccess = function (data) {
  $('#message').text('Example successfully created')
  $('#message').css('background-color', 'green')
  store.color = data.color
  console.log('onUpdateSuccess ran. Data is :', data)
}

const onDeletecolor = (event) => {
  event.preventDefault()
  const colorId = $(event.target).closest('ul').attr('data-id')
  // console.log("delete: " + boardgameId)
  colorApi.deletecolor(colorId)
    .then(onDeletecolorSuccess)
}

const onDeletecolorSuccess = function() {
  console.log('colordeleted')
  // $('#message').html('Game has been Deleted')
  // $('#message').css('background-color', 'green')
  // $('#message').css('font-size', '20px')
  // $('#message').css('text-align', 'center')
  // $('#message').css('font-family', 'Gaegu')
  // $('#message').removeClass('hidden')
  // $('#show-game-modal').modal('hide')

}

// const onCreateFailure = function (error) {
//   $('#message').text('Error on creating example')
//   $('#message').css('background-color', 'red')
//   console.error('onCreateFailure ran. Error is :', error)
// }

// const onIndexSuccess = function (data) {
//   $('#message').text('All Examples successfully received')
//   $('#message').css('background-color', 'green')
//   console.log('onIndexSuccess ran. Data is :', data.examples)
// }

// const onIndexFailure = function (error) {
//   $('#message').text('Error on getting examples')
//   $('#message').css('background-color', 'red')
//   console.error('onIndexFailure ran. Error is :', error)
// }

// const onShowSuccess = function (data) {
//   $('#message').text('One Example successfully received')
//   $('#message').css('background-color', 'green')
//   console.log('onCreateSuccess ran. Data is :', data)
// }

// const onShowFailure = function (error) {
//   $('#message').text('Error on getting example')
//   $('#message').css('background-color', 'red')
//   console.error('onShowFailure ran. Error is :', error)
// }

// const onDestroySuccess = function () {
//   $('#message').text('Example successfully deleted')
//   $('#message').css('background-color', 'green')
//   console.log('Example successfully deleted')
// }

// const onDestroyFailure = function (error) {
//   $('#message').text('Error on deleting example')
//   $('#message').css('background-color', 'red')
//   console.error('onDestroyFailure ran. Error is :', error)
// }

// const onUpdateSuccess = function () {
//   $('#message').text('Example successfully updated')
//   $('#message').css('background-color', 'green')
//   console.log('Example successfully updated')
// }

// const onUpdateFailure = function (error) {
//   $('#message').text('Error on updating example')
//   $('#message').css('background-color', 'red')
//   console.error('onUpdateFailure ran. Error is :', error)
// }


module.exports = {
  createcolorSuccess,
  showcolorSuccess,
  updatecolorSuccess,
  onDeletecolor
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
