const
    { graphql,
    GraphQLInt,
    GraphQLList,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLNonNull} = require('graphql');
const
    { graphqlKoa } = require('graphql-server-koa');
const { League } = require('mlb-stat-schema');
const leagueType = require('../types/league')

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      player: {
        type: new GraphQLList(leagueType),
        args: {
          name: {
            name: 'name',
            type: new GraphQLNonNull(GraphQLInt)
         }
        },
        resolve: (root, {name}) => {
          let foundLeagues = new Promise((resolve, reject) => {
              League.find({name}, (err, leagues) => {
                  err ? reject(err) : resolve(leagues)
              })
          })
          return foundLeagues
        }
      }
    }
  })
})

module.exports = graphqlKoa({ schema: schema})
