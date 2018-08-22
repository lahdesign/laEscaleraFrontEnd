const config = require('../config')
const store = require('../store')

const createProposal = function (data) {
  return $.ajax({
    url: config.apiUrl + '/proposals/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data

  })
}
const showProposals = function () {
  return $.ajax({
    url: config.apiUrl + '/proposals/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateProposal = function (data) {
  return $.ajax({
    url: config.apiUrl + '/proposals/' + data.proposal.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const deleteProposal = (proposalId) => {
  return $.ajax({
    url: config.apiUrl + '/proposals/' + proposalId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createProposal,
  updateProposal,
  showProposals,
  deleteProposal
}
