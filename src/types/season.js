const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql')
const { SeasonRepository } = require('../repository')
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
      description: 'Leagues of the season'
    }
  }),
  args: {
    year: {
      name: 'year',
      type: GraphQLString
    }
  },
  resolve: (root, {year}) => {
    return SeasonRepository.findByYear(year)
  }
})

module.exports = seasonType
