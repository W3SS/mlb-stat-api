const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } = require('graphql')

let divisionType = new GraphQLObjectType({
  name: 'division',
  description: 'a division',
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLInt),
      description: 'Primary key'
    },
    name: {
      type: GraphQLString,
      description: 'The name of the division'
    }
  })
})

module.exports = divisionType
