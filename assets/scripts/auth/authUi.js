
const store = require('../store.js')
// const authEvents = require('../auth/authEvents')

const onSignUpSuccess = function () {
  // debugger
  $('#message').text('Signed up successfully')
  console.log('signed up successfully')
  $('#sign-up')[0].reset()
}

const onSignUpFailure = function (error) {
  console.error(error)
  $('#message').text('Signed up failed.')
  $('#message').css('background-Color', 'red')
  // resetForms()
  setTimeout(() => $('#message').text(''), 3000)
}

const onSignInSuccess = function (data) {
  $('#message').text('Signed in successfully.')
  $('#message').css('background-Color', 'green')
  // resetForms()
  setTimeout(() => $('#message').text(''), 3000)
  store.user = data.user
  // store.colorInstance()
  $('#signUp').hide()
  $('#signIn').hide()
}

const onSignInFailure = function () {
  $('#message').text('Signed in failed.')
  $('#message').css('background-Color', 'red')
  // resetForms()
  setTimeout(() => $('#message').text(''), 3000)
}
// const resetForms = function () {
//   document.getElementById('sign-up').reset()
//   document.getElementById('sign-in').reset()
//   document.getElementById('change-password').reset()
// }
// const onSignUpSuccess = function () {
//   $('#sign-up-message').text('Signed up successfully.')
//   $('#sign-up-message').css('background-Color', 'green')
//   resetForms()
//   setTimeout(() => $('#sign-up-message').text(''), 3000)
// }
const onChangePasswordSuccess = function () {
  $('#message').text('Changed password successfully.')
  $('#message').delay(4000).fadeOut(400)
  // resetForms()
  // setTimeout(() => $('#change-password-message').text(''), 3000)
}

const failure = function () {
  $('#message').text('Error')
  $('#message').css('background-Color', '#800')
  // console.log('Failure ran. Error is :', error)
}
// const onChangePasswordFailure = function () {
//   $('#change-password-message').text('Password change failed.')
//   $('#change-password-message').css('background-Color', 'red')
//   resetForms()
//   setTimeout(() => $('#change-password-message').text(''), 3000)
// }

const onSignOutSuccess = function () {
  $('#message').text('Signed out successfully.')
  $('#message').css('background-Color', 'green')
  // resetForms()
  setTimeout(() => $('#message').text(''), 3000)
  $('#signUp').show()
  $('#signIn').show()
}

// const onSignOutFailure = function () {
//   $('#sign-out-message').text('Signed out failed.')
//   $('#sign-out-message').css('background-color', 'red')
//   setTimeout(() => $('#sign-out-message').text(''), 3000)
//   resetForms()
// }

module.exports = {
//   onSuccess
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  failure,
  onSignOutSuccess
//   onSignOutFailure
}
