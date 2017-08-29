const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql')
const { LeagueRepository } = require('../repository')
const leagueType = require('./league')

let seasonType = new GraphQLObjectType({
  name: 'season',
  description: 'a season',
  fields: () => ({
    type: {
      type: GraphQLString,
      description: 'Regular or Playoff'
    },
    year: {
      type: GraphQLString,
      description: 'The season'
    },
    leagues: {
      type: new GraphQLList(leagueType),
      args: {
        name: {
          name: 'name',
          type: GraphQLString
        }
      },
      resolve: (season, {name}) => {
        return LeagueRepository.findBySeasonAndName(season.year, name)
      },
      description: 'Leagues of the season'
    }
  })
})

module.exports = seasonType
