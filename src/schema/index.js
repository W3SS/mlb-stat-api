const { GraphQLString, GraphQLList, GraphQLSchema, GraphQLObjectType } = require('graphql')
const { graphqlKoa } = require('graphql-server-koa')
const { SeasonRepository } = require('../repository')

const seasonType = require('../types/season')

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      season: {
        type: new GraphQLList(seasonType),
        args: {
          year: {
            name: 'year',
            type: GraphQLString
          }
        },
        resolve: (root, {year}) => {
          return SeasonRepository.findByYear(year)
        }
      }
    }
  })
})

module.exports = graphqlKoa({ schema: schema })