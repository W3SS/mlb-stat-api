const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull
} = require('graphql')
const { Division } = require('mlb-stat-schema')
const divisionType = require('./division')

let leagueType = new GraphQLObjectType({
  name: 'league',
  description: 'a league',
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLInt),
      description: 'Primary key'
    },
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
      resolve: (league, { name }) => {
        return Division.findByLeagueAndName(league.id, name)
      }
    }
  })
})

module.exports = leagueType
