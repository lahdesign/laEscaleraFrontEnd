'use strict'
// const config = require('../config')
const getFormFields = require('../../../lib/get-form-fields')
const colorApi = require('../color/colorApi')
const colorUi = require('../color/colorUi')

const onCreatecolor = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  colorApi.createcolor(data)
    .then(colorUi.createcolorSuccess)
    .catch(colorUi.failure)
}

const onShowcolors = function (event) {
  event.preventDefault()
  $('.content').html('')
  colorApi.showcolors()
    .then(colorUi.showcolorSuccess)
    .catch(colorUi.onError)
}

const onUpdatecolor = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  colorApi.updatecolor(data)
    .then(colorUi.updatecolorSuccess)
    .catch(colorUi.failure)
}

// const onGetcolors = (event) => {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   colorApi.getcolors()
//     .then(colorUi.getcolorsSuccess)
//     .catch(colorUi.failure)
// }

const onClearcolor = (event) => {
  event.preventDefault()
  colorUi.clearcolor()
}
// const onDeletecolor = (event) => {
//   event.preventDefault()
//   console.log('made it here')
//   // closest is handlebar syntax
//   const colorId = $(event.target).closest('ul').attr('data-id')
//   colorApi.deletecolor(colorId)
//     .then(() => onShowcolors(event))
//     .catch(colorUi.failure)
// }

const addHandlers = () => {
  $('#show_colors').on('click', onShowcolors)
  $('#build_color').on('submit', onCreatecolor)
  $('#update_color').on('submit', onUpdatecolor)
  // $('#delete_color').on('click', onDeletecolor)
  // $('#clearBooksButton').on('click', onClearBooks)
  // $('.content').on('click', onDeleteBook )
}

// $('.newcolor').on('click', function () {
//   store.gameInstance = new Game.Game()
//   create.createGame()
//   .then(function (data) {
//     store.game = data.game
//   })
//   .catch()
//   $('#board').show()
// })

module.exports = {
  addHandlers,
  onCreatecolor,
  // onGetcolors,
  // onDeletecolor,
  onClearcolor,
  onShowcolors
}
