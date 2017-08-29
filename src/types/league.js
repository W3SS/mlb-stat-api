const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql')
const { DivisionRepository } = require('../repository')
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
      description: 'The divisions of the league',
      args: {
        name: {
          name: 'name',
          type: GraphQLString
        }
      },
      resolve: (league, {name}) => {
        return DivisionRepository.findBySeasonAndLeagueAndName(league.season, league.name, name)
      }
    }
  })
})

module.exports = leagueType
