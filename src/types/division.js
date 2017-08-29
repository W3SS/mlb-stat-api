const { GraphQLObjectType, GraphQLString } = require('graphql')

let divisionType = new GraphQLObjectType({
  name: 'division',
  description: 'a division',
  fields: () => ({
    name: {
      type: GraphQLString,
      description: 'The name of the division'
    },
    season: {
      type: GraphQLString,
      description: 'The season of the division'
    },
    league: {
      type: GraphQLString,
      description: 'The league of the division'
    }
  })
})

module.exports = divisionType
