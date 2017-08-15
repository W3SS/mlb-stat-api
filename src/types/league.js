const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt } = require('graphql')
const { LeagueRepository } = require('../repository')
const divisionType = require('./division')

let leagueType = new GraphQLObjectType({
  name: 'league',
  description: 'a league',
  fields: () => ({
    name: {
      type: GraphQLString,
      description: 'The name of the league'
    },
    season: {
      type: GraphQLString,
      description: 'The season'
    },
    divisions: {
      type: new GraphQLList(divisionType),
      description: 'The divisions of the league'
    }
  }),
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },
    season: {
      name: 'season',
      type: GraphQLString
    }
  },
  resolve: (root, {id, season}) => {
    if (id) {
      return LeagueRepository.find(id)
    }
    if (season) {
      return LeagueRepository.findBySeason(season)
    }
  }
})

module.exports = leagueType
