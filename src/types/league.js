const { GraphQLObjectType, GraphQLString } = require('graphql')
const seasonType = require('./season')

let leagueType = new GraphQLObjectType({
  name: 'league',
  description: 'a league',
  fields: () => ({
    name: {
      type: GraphQLString,
      description: 'The name of the League'
    },
    season: {
      type: seasonType,
      description: 'The season'
    }
  })
})

module.exports = leagueType
