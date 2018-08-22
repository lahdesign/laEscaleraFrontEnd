'use strict'
// const config = require('../config')
// const getFormFields = require('../../../lib/get-form-fields')
// const colorApi = require('../color/colorApi')
// const colorUi = require('../color/colorUi')
let colorWell
const defaultColor = '#0000ff'

window.addEventListener('load', startup, false)

function startup () {
  console.log('loaded')
  colorWell = document.querySelector('#colorWell')
  colorWell.value = defaultColor
  colorWell.addEventListener('input', updateFirst, false)
  colorWell.addEventListener('change', updateAll, false)
  colorWell.select()
}
function updateFirst (event) {
  const p = document.querySelector('p')

  if (p) {
    p.style.color = event.target.value
  }
}

function updateAll (event) {
  document.querySelectorAll('p').forEach(function (p) {
    p.style.color = event.target.value
  })
}

// const onCreateColor = (event) => {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   colorApi.createcolor(data)
//     .then(colorUi.createcolorSuccess)
//     .catch(colorUi.failure)
// }
// const onShowColors = function (event) {
//   event.preventDefault()
//   $('.content').html('')
//   colorApi.showcolors()
//     .then(colorUi.showcolorSuccess)
//     .catch(colorUi.onError)
// }

// const onUpdateColor = (event) => {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   colorApi.updatecolor(data)
//     .then(colorUi.updatecolorSuccess)
//     .catch(colorUi.failure)
// }

// // const onGetColors = (event) => {
// //   event.preventDefault()
// //   const data = getFormFields(event.target)
// //   colorApi.getColors()
// //     .then(colorUi.getColorsSuccess)
// //     .catch(colorUi.failure)
// // }

// const onClearColor = (event) => {
//   event.preventDefault()
//   colorUi.clearColor()
// }
// // const onDeleteColor = (event) => {
// //   event.preventDefault()
// //   console.log('made it here')
// //   // closest is handlebar syntax
// //   const colorId = $(event.target).closest('ul').attr('data-id')
// //   colorApi.deleteColor(colorId)
// //     .then(() => onShowColors(event))
// //     .catch(colorUi.failure)
// // }

const addHandlers = () => {
  // $('#show_colors').on('click', onShowColors)
  // $('#build_color').on('submit', onCreateColor)
  // $('#update_color').on('submit', onUpdateColor)
  // $('#delete_color').on('click', onDeletecolor)
  // $('#clearBooksButton').on('click', onClearBooks)
  // $('.content').on('click', onDeleteBook )
}

// $('.newColor').on('click', function () {
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
  // onCreateColor
  // onGetColors,
  // onDeleteColor,
  // onClearColor,
  // onShowColors
}
