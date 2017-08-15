const { League } = require('mlb-stat-schema')

const findBySeason = (season) => {
  if (season) {
    return League.find({season})
  }

  return League.find({})
}

const find = (id) => {
  if (id) {
    return League.find({id})
  }

  return League.find({})
}

module.exports = {
  findBySeason,
  find
}
