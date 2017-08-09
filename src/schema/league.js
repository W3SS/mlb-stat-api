const { GraphQLString, GraphQLList, GraphQLSchema, GraphQLObjectType, GraphQLNonNull } = require('graphql')
const { graphqlKoa } = require('graphql-server-koa')
const { League } = require('mlb-stat-schema')
const leagueType = require('../types/league')

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      league: {
        type: new GraphQLList(leagueType),
        args: {
          name: {
            name: 'name',
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        resolve: (root, {name}) => {
          let foundLeagues = new Promise((resolve, reject) => {
            League
              .find({name}, (err, leagues) => {
                err ? reject(err) : resolve(leagues)
              })
              .populate('season')
          })
          return foundLeagues
        }
      }
    }
  })
})

module.exports = graphqlKoa({ schema: schema })
