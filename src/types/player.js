const { GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql')

let playerType = new GraphQLObjectType({
  name: 'player',
  description: 'a player',
  fields: () => ({
    mlb_id: {
      type: (GraphQLInt),
      description: 'The id of the player.'
    },
    name: {
      type: GraphQLString,
      description: 'The name of the player.'
    },
    position: {
      type: GraphQLString,
      description: 'The position of the player'
    }
  })
})

module.exports = playerType
