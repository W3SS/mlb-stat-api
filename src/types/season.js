const { GraphQLObjectType, GraphQLString } = require('graphql')

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
    }
  })
})

module.exports = seasonType
