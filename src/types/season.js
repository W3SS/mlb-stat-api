const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = require('graphql')
const { League } = require('mlb-stat-schema')
const leagueType = require('./league')

let seasonType = new GraphQLObjectType({
  name: 'season',
  description: 'a season',
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLInt),
      description: 'Primary key'
    },
    name: {
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
      resolve: (season, { name }) => {
        return League.findBySeasonAndName(season.id, name)
      },
      description: 'Leagues of the season'
    }
  })
})

module.exports = seasonType
