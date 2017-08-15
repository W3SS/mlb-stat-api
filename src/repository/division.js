const { Division } = require('mlb-stat-schema')

const findBySeason = (season) => {
  if (season) {
    return Division.find({season})
  }

  return Division.find({})
}

const find = (id) => {
  if (id) {
    return Division.find({id})
  }

  return Division.find({})
}

module.exports = {
  findBySeason,
  find
}
