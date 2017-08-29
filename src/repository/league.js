const { League } = require('mlb-stat-schema')

const findBySeasonAndName = (season, name) => {
  if (season && name) {
    return League.find({season: season, name: name})
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
  findBySeasonAndName,
  find
}
