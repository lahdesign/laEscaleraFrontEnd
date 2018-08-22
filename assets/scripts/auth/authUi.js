
const store = require('../store.js')
// const authEvents = require('../auth/authEvents')

const onSignUpSuccess = function () {
  // debugger
  $('#userMessage').text('Signed up successfully')
  console.log('signed up successfully')
  $('#sign-up')[0].reset()
}

const onSignUpFailure = function (error) {
  console.error(error)
  $('#sign-up-message').text('Signed up failed.')
  $('#sign-up-message').css('background-color', 'red')
  // resetForms()
  setTimeout(() => $('#sign-in-message').text(''), 3000)
}

const onSignInSuccess = function (data) {
  $('#sign-in-message').text('Signed in successfully.')
  $('#sign-in-message').css('background-color', 'green')
  // resetForms()
  setTimeout(() => $('#sign-in-message').text(''), 3000)
  store.user = data.user
  // store.proposalInstance()
  $('#signUp').hide()
  $('#signIn').hide()
}

const onSignInFailure = function () {
  $('#sign-in-message').text('Signed in failed.')
  $('#sign-in-message').css('background-color', 'red')
  // resetForms()
  setTimeout(() => $('#sign-in-message').text(''), 3000)
}
// const resetForms = function () {
//   document.getElementById('sign-up').reset()
//   document.getElementById('sign-in').reset()
//   document.getElementById('change-password').reset()
// }
// const onSignUpSuccess = function () {
//   $('#sign-up-message').text('Signed up successfully.')
//   $('#sign-up-message').css('background-color', 'green')
//   resetForms()
//   setTimeout(() => $('#sign-up-message').text(''), 3000)
// }
const onChangePasswordSuccess = function () {
  $('#change-password-message').text('Changed password successfully.')
  $('#change-password-message').delay(4000).fadeOut(400)
  // resetForms()
  // setTimeout(() => $('#change-password-message').text(''), 3000)
}

const failure = function () {
  $('#userMessage').text('Error')
  $('#userMessage').css('background-color', '#800')
  // console.log('Failure ran. Error is :', error)
}
// const onChangePasswordFailure = function () {
//   $('#change-password-message').text('Password change failed.')
//   $('#change-password-message').css('background-color', 'red')
//   resetForms()
//   setTimeout(() => $('#change-password-message').text(''), 3000)
// }

const onSignOutSuccess = function () {
  $('#sign-out-message').text('Signed out successfully.')
  $('#sign-out-message').css('background-color', 'green')
  // resetForms()
  $('#game-board').html('')
  setTimeout(() => $('#sign-out-message').text(''), 3000)
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
