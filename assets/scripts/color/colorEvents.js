'use strict'
// const config = require('../config')
const getFormFields = require('../../../lib/get-form-fields')
const proposalApi = require('../proposal/proposalApi')
const proposalUi = require('../proposal/proposalUi')

const onCreateProposal = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  proposalApi.createProposal(data)
    .then(proposalUi.createProposalSuccess)
    .catch(proposalUi.failure)
}

const onShowProposals = function (event) {
  event.preventDefault()
  $('.content').html('')
  proposalApi.showProposals()
    .then(proposalUi.showProposalSuccess)
    .catch(proposalUi.onError)
}

const onUpdateProposal = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  proposalApi.updateProposal(data)
    .then(proposalUi.updateProposalSuccess)
    .catch(proposalUi.failure)
}

// const onGetProposals = (event) => {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   proposalApi.getProposals()
//     .then(proposalUi.getProposalsSuccess)
//     .catch(proposalUi.failure)
// }

const onClearProposal = (event) => {
  event.preventDefault()
  proposalUi.clearProposal()
}
// const onDeleteProposal = (event) => {
//   event.preventDefault()
//   console.log('made it here')
//   // closest is handlebar syntax
//   const proposalId = $(event.target).closest('ul').attr('data-id')
//   proposalApi.deleteProposal(proposalId)
//     .then(() => onShowProposals(event))
//     .catch(proposalUi.failure)
// }

const addHandlers = () => {
  $('#show_proposals').on('click', onShowProposals)
  $('#build_proposal').on('submit', onCreateProposal)
  $('#update_proposal').on('submit', onUpdateProposal)
  // $('#delete_proposal').on('click', onDeleteProposal)
  // $('#clearBooksButton').on('click', onClearBooks)
  // $('.content').on('click', onDeleteBook )
}

// $('.newProposal').on('click', function () {
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
  onCreateProposal,
  // onGetProposals,
  // onDeleteProposal,
  onClearProposal,
  onShowProposals
}
