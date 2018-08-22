'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const authApi = require('./authApi')
const authUi = require('./authUi')
// Name your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /books
// button is clicked

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.signUp(data)
    .then(authUi.onSignUpSuccess)
    .catch(authUi.onSignUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  $('#userInfo').show()
  const data = getFormFields(event.target)
  authApi.signIn(data)
    .then(authUi.onSignInSuccess)
    .catch(authUi.onSignInFailure)
  $('#buildProposal').show()
}

const onchangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.failure)
}
const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.signOut(data)
    .then(authUi.onSignOutSuccess)
    .catch(authUi.failure)
}

const addHandlers = () => {
  $('#sign_up').on('submit', onSignUp)
  $('#sign_in').on('submit', onSignIn)
  $('#change_password').on('submit', onchangePassword)
  $('#sign_out').on('submit', onSignOut)
}

module.exports = {
  onSignUp,
  onSignIn,
  onchangePassword,
  onSignOut,
  addHandlers

}
