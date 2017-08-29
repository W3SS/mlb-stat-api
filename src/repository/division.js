const { Division } = require('mlb-stat-schema')

const findBySeasonAndLeagueAndName = (season, league, name) => {
  if (season && league && name) {
    return Division.find({season: season, league: league, name: name})
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
  findBySeasonAndLeagueAndName,
  find
}
