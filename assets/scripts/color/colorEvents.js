'use strict'
// const config = require('../config')
// const getFormFields = require('../../../lib/get-form-fields')
const colorApi = require('../color/colorApi')
const colorUi = require('../color/colorUi')
let colorWell
const defaultColor = '#0000ff'

window.addEventListener('load', startup, false)

// color changing code for the paragraph

function startup () {
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

let colorWellBackground
window.addEventListener('load', startupBackground, false)

function startupBackground () {
  colorWellBackground = document.querySelector('#colorWellBackground')
  colorWellBackground.value = defaultColor
  colorWellBackground.addEventListener('input', updateFirstBackground, false)
  colorWellBackground.addEventListener('change', updateAllBackground, false)
  colorWellBackground.select()
}
function updateFirstBackground (event) {
  const body = document.querySelector('body')
  if (body) {
    body.style.backgroundColor = event.target.value
  }
}
function updateAllBackground (event) {
  document.querySelectorAll('background').forEach(function (background) {
    background.style.color = event.target.value
    const data = {color: {value: background.style.color}}
    colorApi.createColor(data)
      .then(colorUi.createColorSuccess)
      .catch(colorUi.failure)
  })
}
// const onCreateColor = (event) => {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   colorApi.createcolor(data)
//     .then(colorUi.createcolorSuccess)
//     .catch(colorUi.failure)
// }
const onShowColors = function (event) {
  event.preventDefault()
  // $('.content').html('')
  colorApi.showColors()
    .then(colorUi.showColorSuccess)
    .catch(colorUi.onError)
}

const onUpdateColor = (event) => {
  event.preventDefault()
  console.log($(event.target).attr('data-update'))
  const data =
  {
    color: {
      id: $(event.target).attr('data-update')
    }
  }
  console.log('message', data)
  colorApi.updateColor(data)
    .then(colorUi.updateColorSuccess)
    .catch(colorUi.failure)
}

// const onGetColors = (event) => {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   colorApi.getColors()
//     .then(colorUi.getColorsSuccess)
//     .catch(colorUi.failure)
// }

// const onClearColor = (event) => {
//   event.preventDefault()
//   colorUi.clearColor()
// }

const onDeleteColor = (event) => {
  event.preventDefault()
  console.log('made it here')
  const colorId = $(event.target).attr('data-id')
  colorApi.deleteColor(colorId)
    .then(() => onShowColors(event))
    .catch(colorUi.failure)
}

const addHandlers = () => {
  $('#showEntireColors').on('click', onShowColors)
  $('#allColors').on('click', '.delete', onDeleteColor)
  // $('#build_color').on('submit', onCreateColor)
  $('#allColors').on('click', '.update', onUpdateColor)
  // $('#delete_color').on('click', onDeletecolor)
  // $('#clearBooksButton').on('click', onClearBooks)
  // $('.content').on('click', onDeleteBook )
}

module.exports = {
  addHandlers,
  // onCreateColor
  // onGetColors,
  // onDeleteColor,
  // onClearColor,
  onShowColors
}
