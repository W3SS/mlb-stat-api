const { GraphQLObjectType, GraphQLString } = require('graphql')
const { DivisionRepository } = require('../repository')

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
  }),
  args: {
    year: {
      name: 'year',
      type: GraphQLString
    }
  },
  resolve: (root, {id}) => {
    return DivisionRepository.find(id)
  }
})

module.exports = divisionType
